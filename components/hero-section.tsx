import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookingForm } from "@/components/booking-form"

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-hotel-exterior-with-pool-and-beautiful-land.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center text-white mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-balance">TINTTO HOTEL</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Experimente o conforto e a hospitalidade em um ambiente único
          </p>
        </div>
        
        {/* Formulário de Reserva */}
        <div className="max-w-5xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
