import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Milk97Section() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="w-full h-full p-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image 
                src="/assets/img/97milk.png" 
                alt="97milk" 
                width={250}
                height={250}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-4xl font-dosis text-blue-800 mb-6">Support your local dairy farmers, Drink whole milk!</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-dosis">
              97 Milk is a not for profit group of dairy farmers and agribusinesses that are advocating for whole milk and milk education. Why? Because whole milk is a nutrient powerhouse drink that has tons of health benefits! 97 Milk's mission is to provide information on the health benefits of dairy products and the passion and dedication that farmers have for dairy farming.
              <br /><br />
              Check out the largest online source of information on whole milk including a large variety of articles, marketing materials, an online store, and learn how you can get involved!
              <br /><br />
              Join us in supporting 97 MILK!
            </p>
            <div className="text-center mx-auto max-w-xs">
              <PrimaryButton 
                href="https://www.97milk.com/" 
                external={true}
                className="w-full bg-blue-800 text-white"
              >
                Visit 97Milk!
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
