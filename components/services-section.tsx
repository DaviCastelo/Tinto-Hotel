import { Clock, Waves, Heart, Utensils } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Clock,
      title: "TINTTO HOTEL",
      subtitle: "Recepção",
      description: "24 Horas",
      bgImage: "/images/IMG_0203.jpg"
    },
    {
      icon: Waves,
      title: "Piscina e",
      subtitle: "Hidromassagem",
      description: "",
      bgImage: "/images/IMG_5110.jpg"
    },
    {
      icon: Heart,
      title: "Pet",
      subtitle: "Friendly",
      description: "",
      bgImage: "/images/DSC02394.jpg"
    },
    {
      icon: Utensils,
      title: "Tintto",
      subtitle: "Restaurante",
      description: "",
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
      </div>

      {/* Full-width services section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
               <div
                 key={index}
                 className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-[400px] md:h-[500px]"
               >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.bgImage}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    className="object-cover brightness-125 contrast-90 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  />
                  {/* White blur overlay for subtle effect */}
                  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/20 transition-colors duration-500"></div>
                </div>

                 {/* Content */}
                 <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                  {/* Icon - Orange-ish color that becomes white on hover */}
                  <div className="inline-flex items-center justify-center w-20 h-20 md:w-20 md:h-20 mb-6 md:mb-6 group-hover:scale-110 transition-all duration-300 mx-auto">
                    <IconComponent 
                      size={56} 
                      className="text-orange-400 group-hover:text-white drop-shadow-lg transition-colors duration-300 md:hidden" 
                      strokeWidth={1.5} 
                    />
                    <IconComponent 
                      size={48} 
                      className="text-orange-400 group-hover:text-white drop-shadow-lg transition-colors duration-300 hidden md:block" 
                      strokeWidth={1.5} 
                    />
                  </div>

                  {/* Title and Subtitle - Orange text like icons */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-2xl font-bold text-orange-400 group-hover:text-white mb-1 drop-shadow-lg transition-colors duration-300">
                      {service.title}
                    </h3>
                    <h4 className="text-xl md:text-xl font-semibold text-orange-400 group-hover:text-white drop-shadow-lg transition-colors duration-300">
                      {service.subtitle}
                    </h4>
                    {service.description && (
                      <p className="text-lg md:text-lg font-semibold text-orange-400 group-hover:text-white drop-shadow-lg mt-1 transition-colors duration-300">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Additional Info */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-sienna/10 text-sienna px-6 py-3 rounded-full">
          <Heart size={20} />
          <span className="font-medium">Todos os serviços inclusos na sua estadia</span>
        </div>
      </div>
    </section>
  )
}
