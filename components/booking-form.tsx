"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, Bed, ChevronDown } from "lucide-react"

export function BookingForm() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: 'suite',
    rooms: 1,
    adults: 1,
    children: 0
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const generateBookingUrl = () => {
    // URLs específicas para cada tipo de quarto
    const roomUrls = {
      'suite': 'https://book.omnibees.com/hotel/16875/room/99196?c=9190&q=16875',
      'standard-triplo': 'https://book.omnibees.com/hotel/16875/room/102187?c=9190&q=16875',
      'standard-duplo': 'https://book.omnibees.com/hotel/16875/room/99010?c=9190&q=16875',
      'vista-mar': 'https://book.omnibees.com/hotel/16875/room/99195?c=9190&q=16875'
    }
    
    const baseUrl = roomUrls[bookingData.roomType as keyof typeof roomUrls] || roomUrls.suite
    
    // Converter datas do formato YYYY-MM-DD para DDMMYYYY
    const formatDateForUrl = (dateStr: string) => {
      const [year, month, day] = dateStr.split('-')
      return `${day}${month}${year}`
    }
    
    const params = new URLSearchParams({
      CheckIn: formatDateForUrl(bookingData.checkIn),
      CheckOut: formatDateForUrl(bookingData.checkOut),
      NRooms: bookingData.rooms.toString(),
      ad: bookingData.adults.toString(),
      ch: bookingData.children.toString(),
      lang: 'pt-BR',
      currencyId: '16',
      version: '4'
    })
    
    return `${baseUrl}&${params.toString()}`
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${day}/${month}/${year}`
  }

  const handleReserve = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      window.open(generateBookingUrl(), '_blank')
    }
  }

  return (
    <Card className="bg-white shadow-lg border-0 p-3 sm:p-6 max-w-6xl mx-auto">
      {/* Layout responsivo: coluna no mobile, linha no desktop */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-3 items-stretch lg:items-end">
        
        {/* Primeira linha no mobile: Tipo de Quarto */}
        <div className="w-full lg:flex-1 lg:min-w-0">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Tipo
          </label>
          <div className="relative">
            <select
              value={bookingData.roomType}
              onChange={(e) => setBookingData(prev => ({ ...prev, roomType: e.target.value }))}
              className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-10"
            >
              <option value="suite">Suíte - R$ 477,75</option>
              <option value="standard-triplo">Standard Triplo - R$ 426,40</option>
              <option value="standard-duplo">Standard Duplo - R$ 341,25</option>
              <option value="vista-mar">Vista Mar - R$ 426,40</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={14} />
          </div>
        </div>

        {/* Segunda linha no mobile: Check-in e Check-out lado a lado */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full lg:flex-1 lg:min-w-0">
          {/* Check-in */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Check-in
            </label>
            <div className="relative">
              <input
                type="date"
                value={bookingData.checkIn}
                onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-10"
              />
              <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary" size={14} />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Check-out
            </label>
            <div className="relative">
              <input
                type="date"
                value={bookingData.checkOut}
                onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-10"
              />
              <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary" size={14} />
            </div>
          </div>
        </div>

        {/* Terceira linha no mobile: Quartos, Adultos, Crianças e Botão */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full lg:flex-1 lg:min-w-0">
          {/* Quartos */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Quartos
            </label>
            <div className="relative">
              <select
                value={bookingData.rooms}
                onChange={(e) => setBookingData(prev => ({ ...prev, rooms: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-10"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={14} />
            </div>
          </div>

          {/* Adultos */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Adultos
            </label>
            <div className="relative">
              <select
                value={bookingData.adults}
                onChange={(e) => setBookingData(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-10"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={14} />
            </div>
          </div>

          {/* Crianças */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Crianças
            </label>
            <div className="relative">
              <select
                value={bookingData.children}
                onChange={(e) => setBookingData(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-10"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={14} />
            </div>
          </div>

          {/* Botão Reservar */}
          <div className="w-full sm:w-auto sm:flex-shrink-0">
            <Button
              onClick={handleReserve}
              disabled={!bookingData.checkIn || !bookingData.checkOut}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-4 lg:px-8 py-2 text-sm font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed h-10"
            >
              RESERVAR
            </Button>
          </div>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-600">
          Preços com desconto de 35% • Café da manhã incluso • Wi-Fi gratuito
        </p>
      </div>
    </Card>
  )
}
