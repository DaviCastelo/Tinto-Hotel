'use client'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  threshold?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: false // Repetir sempre
  })

  const getTransformClass = () => {
    switch (direction) {
      case 'left':
        return isVisible ? 'translate-x-0' : '-translate-x-12'
      case 'right':
        return isVisible ? 'translate-x-0' : 'translate-x-12'
      case 'down':
        return isVisible ? 'translate-y-0' : '-translate-y-12'
      case 'up':
      default:
        return isVisible ? 'translate-y-0' : 'translate-y-12'
    }
  }

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? `opacity-100 transform ${getTransformClass()}` 
          : `opacity-0 transform ${getTransformClass()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
