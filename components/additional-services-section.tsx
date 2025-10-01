import { Wifi, Utensils, Coffee, Car, Heart, Coffee as CoffeeIcon } from "lucide-react"

export function AdditionalServicesSection() {
  const additionalServices = [
    {
      icon: Wifi,
      title: "Aproveite nosso Wi-Fi",
      description: "Aqui você pode ficar conectado 24h, seja para trabalhar ou para atualizar os amigos nas redes sociais."
    },
    {
      icon: Utensils,
      title: "O melhor da culinária regional no café da manhã",
      description: "Experimente a gastronomia nordestina no Tintto Restaurante, com os melhores sabores da cidade. Aberto ao público (quarta a domingo das 12h às 22h)"
    },
    {
      icon: Coffee,
      title: "Snacks e bebidas a qualquer hora",
      description: "Você pode comprar diversos lanches ou bebidas sem precisar sair do hotel em nosso Snack Bar."
    },
    {
      icon: Heart,
      title: "Pet Friendly",
      description: "Taxa de R$85,00/dia. Verifique as condições com nosso time!"
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Taxa de R$35,00/dia. Vagas limitadas. Garanta a sua no ato da reserva!"
    },
    {
      icon: CoffeeIcon,
      title: "Café da Manhã",
      description: "Desfrute de um café da manhã completo e aberto ao público (todos os dias das 6h30 às 10h)"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Content with icon on the side */}
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <IconComponent size={24} className="text-black" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-black mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
