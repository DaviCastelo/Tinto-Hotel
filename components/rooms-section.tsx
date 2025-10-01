import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Bath, Sofa } from "lucide-react"

const rooms = [
  {
    id: "suite",
    name: "Suíte",
    price: "R$ 477,75",
    originalPrice: "R$ 735,00",
    image: "/Quartos/Suíte/Mais claras/IMG_0319.jpg",
    capacity: "4 pessoas",
    beds: "Queen + Beliche",
    bathrooms: 1,
    hasSuite: true,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99196?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "standard-triplo", 
    name: "Standard Triplo Solteiro",
    price: "R$ 426,40",
    originalPrice: "R$ 656,00",
    image: "/Quartos/Standard triplo solteiro/62.jpg",
    capacity: "4 pessoas",
    beds: "Cama de casal + Solteiro",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/102187?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "standard-duplo",
    name: "Standard Duplo Casal",
    price: "R$ 341,25",
    originalPrice: "R$ 525,00",
    image: "/Quartos/Standard duplo casal/67.jpeg",
    capacity: "2 pessoas",
    beds: "Cama de casal ou 2 solteiros",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99010?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "standard-triplo-casal",
    name: "Standard Triplo Casal",
    price: "R$ 380,00",
    originalPrice: "R$ 585,00",
    image: "/Quartos/Standard triplo casal/55.jpg",
    capacity: "3 pessoas",
    beds: "Cama de casal + Solteiro",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99195?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "vista-mar",
    name: "Parcial Mar Duplo Solteiro (PNE)",
    price: "R$ 426,40",
    originalPrice: "R$ 656,00",
    image: "/Quartos/Parcial mar duplo solteiro (PNE)/Claras/IMG_0154.jpg",
    capacity: "2 pessoas",
    beds: "Cama de casal ou 2 solteiros",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99195?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  }
]

export function RoomsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sienna mb-4">Nossos Quartos</h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={room.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-slide-in-${isEven ? 'left' : 'right'}`}
              >
                {/* Room Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Room Information */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <h3 className="text-4xl font-bold text-dark-gray mb-2">{room.name.toUpperCase()}</h3>
                    <div className="flex items-center space-x-2 text-dark-gray mb-4">
                      <Users size={20} className="text-sienna" />
                      <span className="text-lg">Até {room.capacity} pessoas</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-dark-gray text-lg leading-relaxed">
                      Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-dark-gray">
                      <Bed size={20} className="text-sienna" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-dark-gray">
                      <Bath size={20} className="text-sienna" />
                      <span>
                        {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                      </span>
                    </div>
                    {room.hasSuite && (
                      <div className="flex items-center space-x-3 text-dark-gray">
                        <Sofa size={20} className="text-sienna" />
                        <span>Sala de estar</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="bg-sienna hover:bg-sienna/90 text-white px-8 py-3 border border-sienna">
                      <Link href={`/quartos/${room.id}`}>Saiba Mais</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent text-sienna border-sienna hover:bg-sienna hover:text-white px-8 py-3">
                      <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
