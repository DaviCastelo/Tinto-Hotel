import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import Image from "next/image"

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/IMG_0366.jpg')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider">
            O Hotel
          </h1>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-white py-8 md:py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/IMG_0366.jpg"
                alt="Tintto Hotel"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-sienna leading-tight">
                O Conforto e Sofisticação<br />
                nos Detalhes
              </h2>
              <p className="text-lg text-dark-gray leading-relaxed">
                O Tintto pode deixar sua viagem ainda mais incrível. O hotel possui um clima aconchegante e sofisticado, perfeito para quem ama relaxar, se aventurar ou apenas conhecer a cultura e a diversão da cidade. Viva a energia da Cidade do Sol hospedado no coração da Praia de Iracema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sienna text-center mb-16">
            Experiências
          </h2>
          
          <div className="space-y-20">
            {/* Praia Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/images/IMG_5110.jpg"
                  alt="Praia de Iracema"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-sienna">
                  Viva a Praia de Iracema
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  Além da Praia de Iracema possuir a melhor vista do pôr do sol da cidade em sua orla, também contempla a Av. Beira Mar, o píer, o aterro, a clássica feira de artesanato, o espigão da Rui Barbosa, casas de humor, museus, bares, restaurantes e muito mais.
                </p>
              </div>
            </div>

            {/* Sabores Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-sienna">
                  Sabores do Nordeste
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  A gastronomia nordestina possui sabores marcantes que encantam o Brasil inteiro e estes sabores estão presentes no nosso variado café da manhã, servido diariamente no Restaurante do Hotel. São temperos únicos, misturas inesperadas, pratos diversificados e novas interpretações da culinária que farão você se apaixonar.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 order-1 lg:order-2">
                <Image
                  src="/images/IMG_8173.jpg"
                  alt="Culinária Nordestina"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
