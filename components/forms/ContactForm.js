'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/config/firebase-config'   
import SubmitButton from '@/components/ui/SubmitButton'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      let recaptchaToken = null

      // Get reCAPTCHA Enterprise v3 token (invisible)
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.enterprise) {
        try {
          // Use ready() callback before executing as per Google documentation
          recaptchaToken = await new Promise((resolve, reject) => {
            window.grecaptcha.enterprise.ready(async () => {
              try {
                const token = await window.grecaptcha.enterprise.execute(
                  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                  { action: 'submit' }
                )
                resolve(token)
              } catch (error) {
                reject(error)
              }
            })
          })
        } catch (recaptchaError) {
          throw new Error('reCAPTCHA verification failed. Please try again.')
        }
      }

      // Submit to Firebase Firestore
      const submissionData = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        phone: e.target.phone.value.trim(),
        message: e.target.message.value.trim(),
        timestamp: serverTimestamp(),
        status: 'new'
      }

      // Add reCAPTCHA token if available
      if (recaptchaToken) {
        submissionData.recaptchaToken = recaptchaToken
      }

      // Create document in 'contactSubmissions' collection for Firestore Send Email extension
      // The extension is configured to listen to this collection and send emails automatically
      await addDoc(collection(db, 'mail'), {
        to: ['sales@rjdairy.com'],
        cc: ['info@lotusmarketingsolutions.com'],
        replyTo: submissionData.email,
        message: {
          subject: `New Contact Form Submission from ${submissionData.name}`,
          text:
            `
              You have a new contact form submission:

              Name: ${submissionData.name}
              Email: ${submissionData.email}
              Phone: ${submissionData.phone}

              Message: ${submissionData.message}
            `,
          html:
            ` <p>You have a new contact form submission:</p>
              <ul>
                <li><strong>Name:</strong> ${submissionData.name}</li>
                <li><strong>Email:</strong> ${submissionData.email}</li>
                <li><strong>Phone:</strong> ${submissionData.phone}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p>${submissionData.message.replace(/\n/g, '<br/>')}</p>
            `,
        }
      })

      // Success - reset form
      setSubmitStatus('success')
      e.target.reset()

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error.message || 'Failed to send message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = () => {
    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null)
      setErrorMessage('')
    }
  }

  return (
    <div className="">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md font-barlow">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md font-barlow">
            {errorMessage}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-barlow">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-barlow"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-barlow">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-barlow"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-barlow">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-barlow"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-barlow">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleInputChange}
            rows="5"
            required
            placeholder="Include any detail you can offer"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-barlow"
          ></textarea>
        </div>
        
        <SubmitButton
          type="submit"
          className="w-full"
          loading={isSubmitting}
          disabled={isSubmitting}
          icon={<FaPaperPlane />}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </form>
    </div>
  )
}
