"use client"

import { MapPin } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-carppa title-carppa-h2 mb-4">
            Localização
          </h2>
          <p className="text-lg text-dark-gray">
            privilegiada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações do Hotel */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-sienna mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-sienna mb-2">TINTTO Hotel</h3>
                <p className="text-dark-gray leading-relaxed">
                  Av. Almirante Barroso, 727 - apto 101<br />
                  Praia de Iracema, Fortaleza - CE<br />
                  CEP: 60060-440
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-peru/20">
                <h4 className="font-semibold text-sienna mb-2">Próximo às principais atrações:</h4>
                <ul className="text-dark-gray space-y-1 text-sm">
                  <li>• Beira Mar</li>
                  <li>• Ponte dos Ingleses</li>
                  <li>• Dragão do Mar</li>
                  <li>• Centro Cultural Dragão do Mar</li>
                  <li>• Supermercado São Luiz</li>
                  <li>• Farmácia Drogasil</li>
                  <li>• Mercado Central</li>
                  <li>• Aeroporto Internacional</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-peru/20">
                <h4 className="font-semibold text-sienna mb-2">Transporte:</h4>
                <ul className="text-dark-gray space-y-1 text-sm">
                  <li>• Ônibus: Linhas que passam na Av. Almirante Barroso</li>
                  <li>• Uber/Taxi: Fácil acesso 24h</li>
                  <li>• Estacionamento: Disponível no local</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.123456789!2d-38.5234567!3d-3.7174567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f0c1234567%3A0x1234567890abcdef!2sAv.%20Almirante%20Barroso%2C%20727%20-%20Praia%20de%20Iracema%2C%20Fortaleza%20-%20CE%2C%2060060-440!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            
            {/* Marcador personalizado */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-sienna text-white p-3 rounded-full shadow-lg border-4 border-white">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
