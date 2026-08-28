"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Scissors, Clock, Star, ChevronLeft, ChevronRight, Instagram, Facebook, MapPin, Phone, Mail, Zap, Crown, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Opiniones', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ]

  const services = [
    {
      icon: Scissors,
      title: 'Corte Clásico',
      description: 'El corte tradicional perfeccionado con técnicas modernas. Incluye lavado y estilizado.',
      features: ['Consulta de estilo', 'Lavado premium', 'Acabado con producto']
    },
    {
      icon: Crown,
      title: 'Fade Premium',
      description: 'Degradados impecables desde skin fade hasta mid fade. Arte en cada transición.',
      features: ['Degradado personalizado', 'Línea de diseño', 'Retoque de cejas']
    },
    {
      icon: Sparkles,
      title: 'Barba Sculpt',
      description: 'Perfilado y diseño de barba con navaja caliente. Experiencia completa de grooming.',
      features: ['Toalla caliente', 'Aceite nutritivo', 'Perfilado preciso']
    },
    {
      icon: Zap,
      title: 'Combo Elite',
      description: 'Corte completo más barba. El pack definitivo para el hombre que exige lo mejor.',
      features: ['Corte a elección', 'Barba completa', 'Tratamiento capilar']
    },
  ]

  const galleryItems = [
    { image: '/images/hero.png', style: 'Low Fade Texturizado', barber: 'Barber Senior' },
    { image: '/images/feature.png', style: 'Buzz Cut Clean', barber: 'Barber Junior' },
    { image: '/images/hero.png', style: 'Pompadour Moderno', barber: 'Barber Senior' },
    { image: '/images/feature.png', style: 'High Skin Fade', barber: 'Master Barber' },
    { image: '/images/hero.png', style: 'Crop Top French', barber: 'Barber Senior' },
    { image: '/images/feature.png', style: 'Mullet Contemporáneo', barber: 'Master Barber' },
  ]

  const testimonials = [
    {
      text: 'El mejor fade que me han hecho en la vida. El ambiente es increíble y el servicio de primera. Ya encontré mi barbería de confianza.',
      rating: 5,
      role: 'Cliente frecuente'
    },
    {
      text: 'Atención personalizada desde que entras. Te asesoran sobre qué estilo te queda mejor y el resultado siempre supera las expectativas.',
      rating: 5,
      role: 'Cliente desde 2023'
    },
    {
      text: 'Profesionales de verdad. El tratamiento de barba con toalla caliente es una experiencia que todo hombre debería probar.',
      rating: 5,
      role: 'Cliente nuevo'
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <Scissors className="w-8 h-8 transition-transform duration-300 group-hover:rotate-45" style={{ color: '#39FF14' }} />
              <span className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                SHARP<span style={{ color: '#39FF14' }}>CUT</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#39FF14]"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#39FF14', 
                  color: '#0A0A0A',
                  fontFamily: 'Bebas Neue, sans-serif'
                }}
              >
                RESERVAR CITA
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 transition-colors duration-300"
              style={{ color: '#39FF14' }}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#1A1A1A' }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block py-3 text-lg font-medium tracking-wide border-b transition-colors duration-300 hover:text-[#39FF14]"
                style={{ borderColor: '#333', fontFamily: 'Inter, sans-serif' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="block w-full py-4 text-center text-lg font-bold tracking-wider mt-4"
              style={{ 
                backgroundColor: '#39FF14', 
                color: '#0A0A0A',
                fontFamily: 'Bebas Neue, sans-serif'
              }}
            >
              RESERVAR CITA
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Split Section */}
      <section id="hero" className="min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 mb-6" style={{ backgroundColor: '#1A1A1A', border: '1px solid #39FF14' }}>
                <span className="text-sm font-medium tracking-widest" style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}>
                  BARBERÍA URBANA
                </span>
              </div>
              <h1 
                className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mb-6"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                CORTES QUE<br />
                <span style={{ color: '#39FF14' }}>DEFINEN</span><br />
                TU ESTILO
              </h1>
              <p 
                className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
                style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
              >
                Donde la tradición barbera se encuentra con la cultura urbana. Fades impecables, ambiente único y profesionales que entienden tu visión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-4 text-lg font-bold tracking-wider transition-all duration-300 hover:scale-105 text-center"
                  style={{ 
                    backgroundColor: '#39FF14', 
                    color: '#0A0A0A',
                    fontFamily: 'Bebas Neue, sans-serif'
                  }}
                >
                  AGENDA TU CITA
                </a>
                <a
                  href="#gallery"
                  className="px-8 py-4 text-lg font-bold tracking-wider transition-all duration-300 hover:bg-white hover:text-black text-center"
                  style={{ 
                    border: '2px solid #FFFFFF',
                    fontFamily: 'Bebas Neue, sans-serif'
                  }}
                >
                  VER TRABAJOS
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8" style={{ borderTop: '1px solid #333' }}>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}>5K+</div>
                  <div className="text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>Cortes realizados</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}>4.9</div>
                  <div className="text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>Rating promedio</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}>3+</div>
                  <div className="text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>Años de experiencia</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
                <div 
                  className="absolute inset-0 translate-x-4 translate-y-4"
                  style={{ border: '3px solid #39FF14' }}
                />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Expert barber showcasing precision haircut"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section id="services" className="py-24 lg:py-32" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="inline-block text-sm font-medium tracking-widest mb-4"
              style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}
            >
              NUESTROS SERVICIOS
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              DOMINA TU <span style={{ color: '#39FF14' }}>LOOK</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
            >
              Cada servicio está diseñado para ofrecerte una experiencia premium. Técnica, estilo y atención personalizada en cada visita.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #333'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ border: '2px solid #39FF14' }}
                />
                <service.icon 
                  className="w-12 h-12 mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#39FF14' }}
                />
                <h3 
                  className="text-2xl lg:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="w-1.5 h-1.5" style={{ backgroundColor: '#39FF14' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-medium transition-colors duration-300"
              style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}
            >
              Consulta precios y disponibilidad
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section id="gallery" className="py-24 lg:py-32" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span 
                className="inline-block text-sm font-medium tracking-widest mb-4"
                style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}
              >
                PORTFOLIO
              </span>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                TRABAJOS <span style={{ color: '#39FF14' }}>RECIENTES</span>
              </h2>
            </div>
            <p 
              className="text-lg max-w-md mt-4 lg:mt-0"
              style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
            >
              Cada corte cuenta una historia. Mira nuestros trabajos más recientes y encuentra inspiración para tu próximo estilo.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.style}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 lg:p-6"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)' }}
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div 
                      className="w-12 h-0.5 mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"
                      style={{ backgroundColor: '#39FF14' }}
                    />
                    <h3 
                      className="text-lg lg:text-xl font-bold mb-1"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {item.style}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
                    >
                      por {item.barber}
                    </p>
                  </div>
                </div>
                {/* Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-300"
                  style={{ 
                    borderTop: '2px solid #39FF14',
                    borderRight: '2px solid #39FF14'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold tracking-wider transition-all duration-300 hover:scale-105"
              style={{ 
                border: '2px solid #39FF14',
                fontFamily: 'Bebas Neue, sans-serif'
              }}
            >
              <Instagram className="w-5 h-5" style={{ color: '#39FF14' }} />
              VER MÁS EN INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* About Centered Section */}
      <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, #39FF14 0, #39FF14 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span 
              className="inline-block text-sm font-medium tracking-widest mb-4"
              style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}
            >
              NUESTRA HISTORIA
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              MÁS QUE UNA <span style={{ color: '#39FF14' }}>BARBERÍA</span>
            </h2>
            
            <div className="relative my-12">
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40"
                style={{ 
                  border: '3px solid #39FF14',
                  transform: 'translate(-50%, -50%) rotate(45deg)'
                }}
              />
              <Scissors className="w-16 h-16 lg:w-20 lg:h-20 mx-auto relative z-10" style={{ color: '#39FF14' }} />
            </div>

            <p 
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
            >
              Nacimos con una visión clara: crear un espacio donde el arte del corte se fusione con la cultura urbana contemporánea. No somos solo barberos, somos artistas que entienden que tu estilo es una extensión de tu personalidad.
            </p>
            
            <p 
              className="text-lg leading-relaxed mb-12"
              style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
            >
              Cada silla en nuestro local cuenta historias de transformación. Desde el fade más técnico hasta el corte clásico más elegante, ponemos la misma pasión y dedicación. Porque sabemos que cuando sales de aquí, no solo llevas un corte, llevas confianza.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 pt-8" style={{ borderTop: '1px solid #333' }}>
              <div>
                <div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  100%
                </div>
                <div style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                  Satisfacción garantizada
                </div>
              </div>
              <div>
                <div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  PRO
                </div>
                <div style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                  Productos premium
                </div>
              </div>
              <div>
                <div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  VIP
                </div>
                <div style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                  Experiencia exclusiva
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section id="testimonials" className="py-24 lg:py-32" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="inline-block text-sm font-medium tracking-widest mb-4"
              style={{ color: '#39FF14', fontFamily: 'Inter, sans-serif' }}
            >
              TESTIMONIOS
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              LO QUE <span style={{ color: '#39FF14' }}>DICEN</span>
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div 
              className="p-8 lg:p-12 text-center"
              style={{ backgroundColor: '#1A1A1A', border: '1px solid #333' }}
            >
              {/* Quote Mark */}
              <div 
                className="text-6xl lg:text-8xl font-bold leading-none mb-6"
                style={{ color: '#39FF14', fontFamily: 'Bebas Neue, sans-serif', opacity: 0.3 }}
              >
                &ldquo;
              </div>
              
              {/* Testimonial Content */}
              <p 
                className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {testimonials[currentTestimonial].text}
              </p>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#39FF14' }} />
                ))}
              </div>
              
              {/* Author */}
              <div 
                className="text-sm font-medium tracking-wide"
                style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
              >
                {testimonials[currentTestimonial].role}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid #39FF14' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#39FF14' }} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="w-2 h-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: index === currentTestimonial ? '#39FF14' : '#333',
                      transform: index === currentTestimonial ? 'scale(1.5)' : 'scale(1)'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid #39FF14' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" style={{ color: '#39FF14' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Full Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, #39FF14 0%, #1A1A1A 50%, #0A0A0A 100%)',
            opacity: 0.1
          }}
        />
        <div 
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: '#39FF14' }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            ¿LISTO PARA TU<br />
            <span style={{ color: '#39FF14' }}>TRANSFORMACIÓN</span>?
          </h2>
          <p
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
          >
            Reserva tu cita hoy y descubre por qué somos la barbería preferida de quienes buscan excelencia. Tu mejor versión te espera.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-5 text-xl font-bold tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#39FF14',
              color: '#0A0A0A',
              fontFamily: 'Bebas Neue, sans-serif'
            }}
          >
            RESERVAR AHORA
          </a>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 lg:py-24" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#39FF14' }}
              >
                THE CUT LAB
              </h3>
              <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                Donde cada corte es una obra de arte y cada cliente sale sintiéndose su mejor versión.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                CONTACTO
              </h4>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: '#39FF14' }} />
                  <span style={{ color: '#666666' }}>Calle Principal 123, Ciudad</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" style={{ color: '#39FF14' }} />
                  <span style={{ color: '#666666' }}>+34 600 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: '#39FF14' }} />
                  <span style={{ color: '#666666' }}>info@thecutlab.com</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                HORARIO
              </h4>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', color: '#666666' }}>
                <div className="flex justify-between">
                  <span>Lun - Vie</span>
                  <span>10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Copyright */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid #333' }}
          >
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid #39FF14' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: '#39FF14' }} />
              </a>
              <a
                href="#"
                className="p-3 transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid #39FF14' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: '#39FF14' }} />
              </a>
            </div>
            <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              © 2024 The Cut Lab. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}