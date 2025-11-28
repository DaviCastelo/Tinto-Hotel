"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, MapPin, Building } from "lucide-react"
import Link from "next/link"

export function ChatWidgetSimple() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    // Disparar evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16951667380/QWGHCPHp87QbELTVl5M_',
        'transaction_id': ''
      });
    }
    // Abrir WhatsApp
    const phoneNumber = "5585981600354"
    const message = "Olá! Gostaria de falar com o atendimento do TINTTO Hotel."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const quickOptions = [
    {
      icon: Building,
      label: "Ver Quartos",
      action: () => window.location.href = "/quartos"
    },
    {
      icon: MapPin,
      label: "Localização",
      action: () => {
        const address = "Av. Almirante Barroso, 727 - apto 101 - Praia de Iracema, Fortaleza - CE, 60060-440"
        const encodedAddress = encodeURIComponent(address)
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank')
      }
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: handleWhatsAppClick
    }
  ]

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            size="icon"
          >
            <MessageCircle size={24} />
          </Button>
        </div>
      )}

      {/* Widget de chat simplificado */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-4 flex items-center justify-between">
              <Image 
                src="/images/Design sem nome (45).png" 
                alt="TINTTO Hotel" 
                width={120} 
                height={40} 
                className="h-8 w-auto" 
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-gray-50">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">T</span>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm max-w-[85%]">
                  <p className="text-sm text-gray-800 mb-2">
                    Olá! Bem-vindo ao TINTTO Hotel! Como posso ajudá-lo hoje? 😊
                  </p>
                  
                  {/* Opções rápidas */}
                  <div className="space-y-2">
                    {quickOptions.map((option, index) => {
                      const IconComponent = option.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs h-9 justify-start bg-white hover:bg-secondary text-black hover:text-black border-gray-200"
                          onClick={option.action}
                        >
                          <IconComponent size={14} className="mr-2" />
                          {option.label}
                        </Button>
                      )
                    })}
                  </div>
                  
                  <div className="text-xs text-gray-500 text-right mt-2">
                    {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-100 text-center">
              <p className="text-xs text-gray-500">Atendimento 24h</p>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

