import PrimaryButton from '@/components/ui/PrimaryButton'

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-dosis text-blue-800 mb-8">Who We Are</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center">
          <div className="text-center">
            <img src="/assets/img/LogoNew.png" alt="R&J Logo" className="mx-auto max-w-xs" />
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-600 leading-relaxed mb-6 font-dosis">
              R&J Consulting was started in 2006 and is an independent consulting group serving the Pennsylvania area. Our passion is working with family-owned farms. We provide pricing options through local mills on blended feeds and on-farm mineral packs. R&J offers more than just feed options, we are your full consultants offering feed ingredient options, routine farm visits, ration balancing, cost analysis, on-farm technical support and much more.
            </p>
            <div className="text-center">
              <PrimaryButton href="/about">
                Contact an R&J Consultant Today
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
