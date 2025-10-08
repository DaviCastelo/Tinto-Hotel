import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/IMG_0199.jpg')`,
          }}
        >
          {/* Overlay apenas no desktop - efeito branco bem intenso sem desfoque */}
          <div className="absolute inset-0 bg-white/60 hidden md:block" />
        </div>

        {/* Title centralizado */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-wider" style={{ color: '#7d3330' }}>
            O Hotel
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HbrXmv_n-zM?autoplay=1&loop=1&playlist=HbrXmv_n-zM&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=1"
              title="Vídeo do Hotel Tinto"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="title-carppa title-carppa-h2 text-center mb-16">
            Experiências
          </h2>
          
          <div className="space-y-20">
            {/* Café da Manhã Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="title-carppa title-carppa-h3">
                  Café da Manhã no Quarto
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  Desfrute de um café da manhã completo e variado servido diretamente no conforto do seu quarto. Nossa seleção inclui frutas frescas, pães artesanais, sucos naturais, café especial e pratos típicos da culinária nordestina, proporcionando uma experiência gastronômica única para começar o dia com energia.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 order-1 lg:order-2">
                <Image
                  src="/IMG_5887_jpg.jpg"
                  alt="Café da Manhã no Quarto"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Dia de Noiva Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/IMG_5828_jpg.jpg"
                  alt="Dia de Noiva"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="title-carppa title-carppa-h3">
                  Dia de Noiva
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  Celebre o dia mais especial da sua vida em um ambiente único e romântico. Oferecemos pacotes especiais para noivas, com decoração personalizada, suíte nupcial luxuosa, serviços de beleza e fotografia, criando memórias inesquecíveis para o seu grande dia.
                </p>
              </div>
            </div>

            {/* Lua de Mel Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="title-carppa title-carppa-h3">
                  Lua de Mel
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  Desfrute de uma lua de mel romântica e inesquecível em Fortaleza. Nossos pacotes especiais incluem jantares românticos, passeios exclusivos, decoração especial no quarto e experiências únicas para celebrar o amor e criar memórias eternas juntos.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 order-1 lg:order-2">
                <Image
                  src="/IMG_5927_jpg.jpg"
                  alt="Lua de Mel"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Sabores Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/IMG_8157.jpg"
                  alt="Culinária Nordestina"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="title-carppa title-carppa-h3">
                  Sabores do Nordeste
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  A gastronomia nordestina possui sabores marcantes que encantam o Brasil inteiro e estes sabores estão presentes no nosso variado café da manhã, servido diariamente no Restaurante do Hotel. São temperos únicos, misturas inesperadas, pratos diversificados e novas interpretações da culinária que farão você se apaixonar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
