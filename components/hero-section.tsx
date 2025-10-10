export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/66.jpeg')`,
        }}
      >
      </div>

    </section>
  )
}
