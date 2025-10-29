import PrimaryButton from '@/components/ui/PrimaryButton'

export default function CallToAction({ 
  message = "Contact an R&J Consultant for more information.",
  buttonText = "Contact an R&J Consultant Today",
  buttonHref = "/contact",
  variant = "centered", // "centered" or "split"
  className = ""
}) {
  if (variant === "split") {
    return (
      <div className={`mt-12 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 border border-gray-500 bg-gray-900 text-white" style={{ boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.8)' }}>
          <span className="flex-1 text-center md:text-left font-dosis text-xl md:text-2xl">
            {message}
          </span>
          <div className="flex-shrink-0">
            <PrimaryButton href={buttonHref}>
              {buttonText}
            </PrimaryButton>
          </div>
        </div>
      </div>
    )
  }

  // Default centered variant
  return (
    <div className={`text-center mt-12 mx-auto max-w-3xl ${className}`}>
      <div className="bg-gray-900 text-white space-y-4 p-12" style={{ boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.8)' }}>
        <p className="text-white/80 font-dosis text-3xl">{message}</p>
        <div className="text-center">
          <PrimaryButton href={buttonHref}>
            {buttonText}
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

