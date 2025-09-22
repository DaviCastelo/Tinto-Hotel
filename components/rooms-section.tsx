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
    image: "/luxury-hotel-suite-with-king-bed-and-elegant-decor.jpg",
    capacity: "4 pessoas",
    beds: "Queen + Beliche",
    bathrooms: 1,
    hasSuite: true,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99196?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "standard-triplo", 
    name: "Apartamento Standard Triplo",
    price: "R$ 426,40",
    originalPrice: "R$ 656,00",
    image: "/deluxe-hotel-room-with-double-bed-and-single-bed.jpg",
    capacity: "4 pessoas",
    beds: "Cama de casal + Solteiro",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/102187?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "standard-duplo",
    name: "Apartamento Standard",
    price: "R$ 341,25",
    originalPrice: "R$ 525,00",
    image: "/modern-hotel-room-with-double-bed.jpg",
    capacity: "2 pessoas",
    beds: "Cama de casal ou 2 solteiros",
    bathrooms: 1,
    hasSuite: false,
    reservationUrl: "https://book.omnibees.com/hotel/16875/room/99010?c=9190&q=16875&NRooms=1&CheckIn=21092025&CheckOut=22092025&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  },
  {
    id: "vista-mar",
    name: "Apartamento Vista Parcial Mar",
    price: "R$ 426,40",
    originalPrice: "R$ 656,00",
    image: "/comfortable-hotel-standard-room-with-modern-decor.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Nossos Quartos</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-luxury-gold text-charcoal">
                  {room.originalPrice && (
                    <span className="line-through text-sm mr-2">{room.originalPrice}</span>
                  )}
                  A partir de {room.price}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-black">{room.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-black">
                    <Users size={18} />
                    <span>Até {room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-black">
                    <Bed size={18} />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-black">
                    <Bath size={18} />
                    <span>
                      {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                    </span>
                  </div>
                  {room.hasSuite && (
                    <div className="flex items-center space-x-2 text-black">
                      <Sofa size={18} />
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
