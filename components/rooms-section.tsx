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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-tan/30">
              <div className="relative">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-peru text-white shadow-lg">
                  {room.originalPrice && (
                    <span className="line-through text-sm mr-2">{room.originalPrice}</span>
                  )}
                  A partir de {room.price}
                </Badge>
              </div>

              <CardHeader className="bg-gradient-to-r from-soft-beige to-white">
                <CardTitle className="text-sienna">{room.name}</CardTitle>
              </CardHeader>

              <CardContent className="bg-white">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-dark-gray">
                    <Users size={18} className="text-peru" />
                    <span>Até {room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-gray">
                    <Bed size={18} className="text-peru" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-gray">
                    <Bath size={18} className="text-peru" />
                    <span>
                      {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                    </span>
                  </div>
                  {room.hasSuite && (
                    <div className="flex items-center space-x-2 text-dark-gray">
                      <Sofa size={18} className="text-peru" />
                      <span>Sala de estar</span>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/quartos/${room.id}`}>Saiba Mais</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
