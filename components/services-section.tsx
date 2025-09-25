import { Clock, Waves, Heart, Utensils } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Clock,
      title: "Recepção",
      subtitle: "24 Horas",
      description: "Atendimento completo 24 horas por dia para sua comodidade e segurança.",
      bgImage: "/images/IMG_5233.jpg"
    },
    {
      icon: Waves,
      title: "Piscina e",
      subtitle: "Hidromassagem",
      description: "Relaxe em nossa piscina e hidromassagem com vista panorâmica.",
      bgImage: "/images/IMG_5110.jpg"
    },
    {
      icon: Heart,
      title: "Pet",
      subtitle: "Friendly",
      description: "Seu melhor amigo é bem-vindo! Ambiente preparado para pets.",
      bgImage: "/images/DSC02394.jpg"
    },
    {
      icon: Utensils,
      title: "Tintto",
      subtitle: "Restaurante",
      description: "Culinária especializada com pratos únicos e ingredientes frescos.",
      bgImage: "/images/IMG_8173.jpg"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sienna mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Oferecemos uma experiência completa com serviços de qualidade para tornar sua estadia inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-80"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.bgImage}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <IconComponent size={32} />
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-orange-200 drop-shadow-lg">
                      {service.subtitle}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-sienna/10 text-sienna px-6 py-3 rounded-full">
            <Heart size={20} />
            <span className="font-medium">Todos os serviços inclusos na sua estadia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
