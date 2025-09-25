import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Star, Bath, Sofa } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export default function QuartosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nossos Quartos</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Escolha entre nossas acomodações cuidadosamente projetadas para proporcionar máximo conforto e hospitalidade
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
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

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Precisa de Ajuda para Escolher?</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudá-lo a encontrar a acomodação perfeita para sua estadia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
              <Link href="tel:+5511999999999">Ligar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
