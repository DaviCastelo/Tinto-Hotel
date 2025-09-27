import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/IMG_0366.jpg')`,
        }}
      >
        {/* Overlay apenas no desktop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm hidden md:block" />
      </div>

      {/* Logo no centro da foto - apenas no desktop */}
      <div className="absolute inset-0 z-10 hidden md:flex items-center justify-center">
        <div className="text-center">
          <Image 
            src="/images/Design sem nome (45).png" 
            alt="TINTTO Hotel" 
            width={300} 
            height={120} 
            className="h-32 lg:h-40 xl:h-48 w-auto mx-auto" 
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
