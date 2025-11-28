"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react"
import { ContactForm } from "./contact-form"

const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  // Disparar evento de conversão do Google Ads
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-16951667380/QWGHCPHp87QbELTVl5M_',
      'transaction_id': ''
    });
  }
  // Permitir que o link abra normalmente
}

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Information */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Hotel Logo */}
              <div>
                <Image 
                  src="/images/Design sem nome (45).png" 
                  alt="TINTTO Hotel" 
                  width={300} 
                  height={120} 
                  className="h-24 w-auto" 
                />
              </div>

              {/* Hotel Description */}
              <div className="space-y-4 text-gray-600">
                <p>
                  Hospede-se no coração da cidade e desfrute do melhor da Terra do Sol com muito conforto e modernidade.
                </p>
                <p>
                  Dá para curtir entre amigos, família ou casal. É uma mistura entre o regionalismo e o litoral, repleto de espaços e lugares fascinantes, e claro, um céu com tons alaranjados contemplativo para poder assistir ao pôr do sol na Praia de Iracema.
                </p>
              </div>

              {/* Carppa Hotel */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2">Conheça também</p>
                <div>
                  <Link 
                    href="https://carppahotel.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/images/carppa-logo-backup.png" 
                      alt="Carppa Hotel" 
                      width={200} 
                      height={60} 
                      className="h-12 w-auto" 
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="p-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-sienna uppercase">
                Contatos e Reservas
              </h3>
              
              {/* Contact Information List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Instagram size={20} className="text-sienna" />
                  <Link 
                    href="https://instagram.com/tinttohotel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sienna hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    @tinttohotel
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle size={20} className="text-sienna" />
                  <Link 
                    href="https://wa.me/5585981600354" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="text-sienna hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    Central de Reservas WhatsApp:<br />(85) 98160-0354
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-sienna" />
                  <span className="text-sienna">Central de Reservas: (85) 98160-0354</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-sienna" />
                  <span className="text-sienna">Recepção: (85) 98160-0354</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-sienna" />
                  <span className="text-sienna">reservas@tinttohotel.com.br</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Address Bar */}
        <div className="border-t border-sienna mt-8 pt-4">
          <div className="text-center">
            <p className="text-sienna">Av. Almirante Barroso, 727 - Praia de Iracema, Fortaleza CE / Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
