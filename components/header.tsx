"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 py-6 max-w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo - Left (Desktop) */}
          <div className="hidden md:flex items-center ml-28">
            <Link href="/">
              <Image 
                src="/images/Design sem nome (45).png" 
                alt="TINTTO Hotel" 
                width={120} 
                height={45} 
                className="h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Mobile Logo - Center */}
          <div className="md:hidden flex justify-center">
            <Image 
              src="/images/Design sem nome (45).png" 
              alt="TINTTO Hotel" 
              width={120} 
              height={45} 
              className="h-10 w-auto" 
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide">
              Home
            </Link>
            <Link href="/sobre" className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide">
              O Hotel
            </Link>
            <Link href="/quartos" className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide">
              Acomodações
            </Link>
            <Link href="#footer" className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide">
              Contato
            </Link>
          </nav>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-800 rounded-none px-8 py-3 font-medium uppercase text-base tracking-wide">
              <Link href="https://app.otabuilder.com/tinttohotel" target="_blank" rel="noopener noreferrer">Reserve Já</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden absolute right-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-gray-200">
            <div className="flex flex-col space-y-6 pt-6">
              <Link href="/" className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                O Hotel
              </Link>
              <Link
                href="/quartos"
                className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Acomodações
              </Link>
              <Link
                href="#footer"
                className="text-amber-800 hover:text-amber-700 transition-colors font-medium uppercase text-base tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button
                asChild
                className="bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-800 rounded-none w-fit px-6 py-3 font-medium uppercase text-base tracking-wide"
              >
                <Link href="https://app.otabuilder.com/tinttohotel" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Reserve Já
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
