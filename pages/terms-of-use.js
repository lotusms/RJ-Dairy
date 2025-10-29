import Layout from '@/layout/Layout'

export default function TermsOfUse() {
  return (
    <Layout
      title="Terms of Use - R&J Dairy Consulting"
      description="Terms of Use for R&J Dairy Consulting"
    >
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Use</h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Use License</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials on R&J Dairy Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                    <li>attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The materials on R&J Dairy Consulting's website are provided on an 'as is' basis. R&J Dairy Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall R&J Dairy Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on R&J Dairy Consulting's website, even if R&J Dairy Consulting or a R&J Dairy Consulting authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Accuracy of Materials</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The materials appearing on R&J Dairy Consulting's website could include technical, typographical, or photographic errors. R&J Dairy Consulting does not warrant that any of the materials on its website are accurate, complete or current. R&J Dairy Consulting may make changes to the materials contained on its website at any time without notice. However R&J Dairy Consulting does not make any commitment to update the materials.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Links</h2>
                  <p className="text-gray-600 leading-relaxed">
                    R&J Dairy Consulting has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by R&J Dairy Consulting of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Modifications</h2>
                  <p className="text-gray-600 leading-relaxed">
                    R&J Dairy Consulting may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Pennsylvania and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><a href="/" className="text-blue-600 hover:text-blue-800">http://www.rjdairy.com/</a></p>
                    <p><a href="mailto:jackiebehr@rjdairy.com" className="text-blue-600 hover:text-blue-800">jackiebehr@rjdairy.com</a></p>
                    <p>Phone: 717-203-6777</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
