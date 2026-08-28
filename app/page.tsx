"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, Menu, Scissors, Clock, MapPin, Star, ChevronLeft, ChevronRight, Phone, Mail, Instagram, Facebook, Twitter, Sparkles, Users, Award, Calendar } from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [promoDismissed, setPromoDismissed] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })

  const services = [
    { name: 'Classic Fade', description: 'Precision fade with clean lines and sharp edges', duration: '45 min', icon: Scissors },
    { name: 'Beard Sculpt', description: 'Expert beard shaping and grooming with hot towel finish', duration: '30 min', icon: Sparkles },
    { name: 'The Full Experience', description: 'Haircut, beard trim, and signature scalp massage', duration: '90 min', icon: Award },
    { name: 'Kids Cut', description: 'Patient and precise cuts for the young ones', duration: '30 min', icon: Users },
  ]

  const testimonials = [
    { text: "Best barbershop in the city. The attention to detail is unmatched. I have been coming here for two years and never looked back.", rating: 5 },
    { text: "Finally found a place that gets my style. The vibe is incredible and the cuts are even better. Highly recommend the Full Experience.", rating: 5 },
    { text: "Clean shop, skilled barbers, great music. What more could you ask for? My go to spot every two weeks.", rating: 5 },
    { text: "The team here actually listens to what you want. Left feeling like a new man. Will definitely be back.", rating: 5 },
  ]

  const pricingTiers = [
    { name: 'Essential', services: ['Classic Haircut', 'Neck Cleanup', 'Style Finish'], price: 'From $35' },
    { name: 'Premium', services: ['Fade of Choice', 'Beard Line Up', 'Hot Towel', 'Product Styling'], price: 'From $55', featured: true },
    { name: 'VIP', services: ['The Full Experience', 'Scalp Treatment', 'Complimentary Beverage', 'Priority Booking'], price: 'From $85' },
  ]

  const galleryImages = [
    { src: '/images/hero.png', alt: 'Precision fade haircut' },
    { src: '/images/feature.png', alt: 'Beard grooming session' },
    { src: '/images/hero.png', alt: 'Modern barbershop interior' },
    { src: '/images/feature.png', alt: 'Client transformation' },
    { src: '/images/hero.png', alt: 'Detailed line work' },
    { src: '/images/feature.png', alt: 'Premium styling products' },
  ]

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Locations', href: '#locations' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request submitted! We will contact you shortly to confirm.')
  }

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
      {/* Promo Banner */}
      {!promoDismissed && (
        <div 
          className="sticky top-0 z-50 py-3 px-4 flex items-center justify-center gap-4 relative"
          style={{ backgroundColor: '#1A1A1A', borderBottom: '1px solid #39FF14' }}
        >
          <p className="text-sm md:text-base font-medium text-center">
            <span style={{ color: '#39FF14' }}>★</span> First cut FREE for new clients
          </p>
          <a
            href="#booking"
            className="px-4 py-1.5 text-sm font-bold rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: '#39FF14', color: '#0A0A0A' }}
          >
            Book Now
          </a>
          <button
            onClick={() => setPromoDismissed(true)}
            className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
            aria-label="Dismiss promo"
          >
            <X size={18} style={{ color: '#888888' }} />
          </button>
        </div>
      )}

      {/* Sticky Navigation */}
      <nav 
        className={`sticky ${promoDismissed ? 'top-0' : 'top-[52px]'} z-40 py-4 px-6 md:px-12 transition-all`}
        style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid #1A1A1A' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            EDGE<span style={{ color: '#39FF14' }}>.</span>STUDIO
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:opacity-100 transition-opacity"
                style={{ color: link.name === 'Book Now' ? '#39FF14' : '#FFFFFF', opacity: link.name === 'Book Now' ? 1 : 0.8 }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Menu size={24} style={{ color: '#39FF14' }} />
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileNavOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-lg font-medium py-2 border-b transition-colors"
                style={{ 
                  color: link.name === 'Book Now' ? '#39FF14' : '#FFFFFF',
                  borderColor: '#1A1A1A'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section className="min-h-[90vh] grid md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 order-2 md:order-1">
          <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
            PREMIUM GROOMING EXPERIENCE
          </p>
          <h1 
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Sharp Cuts.
            <br />
            <span style={{ color: '#39FF14' }}>Bold Style.</span>
          </h1>
          <p className="text-lg mb-8 max-w-md" style={{ color: '#888888' }}>
            Where precision meets personality. Step into our studio and leave looking like the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="px-8 py-4 text-center font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#39FF14', color: '#0A0A0A' }}
            >
              Book Your Slot
            </a>
            <a
              href="#services"
              className="px-8 py-4 text-center font-bold text-lg rounded-full border-2 transition-all hover:bg-white hover:text-black"
              style={{ borderColor: '#FFFFFF' }}
            >
              View Services
            </a>
          </div>
        </div>
        <div className="relative min-h-[400px] md:min-h-full order-1 md:order-2">
          <Image
            src="/images/hero.png"
            alt="Premium barbershop experience"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A0A0A 0%, transparent 30%)' }}
          />
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-24 px-8 md:px-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              WHAT WE OFFER
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group p-8 rounded-2xl transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}
              >
                <div 
                  className="absolute top-0 left-0 w-1 h-full transition-all group-hover:w-2"
                  style={{ backgroundColor: '#39FF14' }}
                />
                <div className="flex items-start justify-between mb-4">
                  <service.icon size={32} style={{ color: '#39FF14' }} />
                  <span className="text-sm" style={{ color: '#888888' }}>
                    <Clock size={14} className="inline mr-1" />
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {service.name}
                </h3>
                <p style={{ color: '#888888' }}>{service.description}</p>
                <a 
                  href="#booking" 
                  className="inline-block mt-4 text-sm font-medium transition-all group-hover:translate-x-2"
                  style={{ color: '#39FF14' }}
                >
                  Book this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Split */}
      <section id="about" className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/feature.png"
              alt="Our barbershop team"
              fill
              className="object-cover"
            />
            <div 
              className="absolute bottom-6 left-6 right-6 p-6 rounded-xl backdrop-blur-md"
              style={{ backgroundColor: 'rgba(26, 26, 26, 0.9)' }}
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ color: '#39FF14' }}>5+</p>
                  <p className="text-xs" style={{ color: '#888888' }}>Years</p>
                </div>
                <div className="w-px h-12" style={{ backgroundColor: '#888888' }} />
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ color: '#39FF14' }}>10K+</p>
                  <p className="text-xs" style={{ color: '#888888' }}>Clients</p>
                </div>
                <div className="w-px h-12" style={{ backgroundColor: '#888888' }} />
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ color: '#39FF14' }}>4.9</p>
                  <p className="text-xs" style={{ color: '#888888' }}>Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              OUR STORY
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              More Than Just a Haircut
            </h2>
            <p className="text-lg mb-6" style={{ color: '#888888' }}>
              Edge Studio was born from a simple belief: everyone deserves to feel confident when they walk out the door. We combine classic barbering techniques with modern style to create looks that are uniquely you.
            </p>
            <p className="text-lg mb-8" style={{ color: '#888888' }}>
              Our team of skilled barbers brings together years of experience with fresh, contemporary vision. We stay ahead of trends while respecting timeless techniques that never go out of style.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#39FF14' }} />
                <span>Premium Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#39FF14' }} />
                <span>Skilled Barbers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#39FF14' }} />
                <span>Clean Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 px-8 md:px-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              OUR WORK
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 ? 'col-span-2 row-span-2 h-[400px] md:h-[500px]' : 'h-[200px] md:h-[240px]'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                >
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              CLIENT REVIEWS
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What They Say
            </h2>
          </div>

          <div className="relative">
            <div 
              className="p-8 md:p-12 rounded-2xl text-center"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="#39FF14" style={{ color: '#39FF14' }} />
                ))}
              </div>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                &ldquo;{testimonials[testimonialIndex].text}&rdquo;
              </p>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ 
                      backgroundColor: index === testimonialIndex ? '#39FF14' : '#888888',
                      transform: index === testimonialIndex ? 'scale(1.5)' : 'scale(1)'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-3 rounded-full transition-colors"
              style={{ backgroundColor: '#1A1A1A' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} style={{ color: '#39FF14' }} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-3 rounded-full transition-colors"
              style={{ backgroundColor: '#1A1A1A' }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} style={{ color: '#39FF14' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 px-8 md:px-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              TRANSPARENT PRICING
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Choose Your Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl relative ${tier.featured ? 'scale-105' : ''}`}
                style={{ 
                  backgroundColor: '#0A0A0A',
                  border: tier.featured ? '2px solid #39FF14' : '1px solid #1A1A1A'
                }}
              >
                {tier.featured && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full"
                    style={{ backgroundColor: '#39FF14', color: '#0A0A0A' }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold mb-6" style={{ color: '#39FF14' }}>
                  {tier.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#39FF14' }} />
                      <span style={{ color: '#888888' }}>{service}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="block text-center py-3 rounded-full font-bold transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: tier.featured ? '#39FF14' : 'transparent',
                    color: tier.featured ? '#0A0A0A' : '#FFFFFF',
                    border: tier.featured ? 'none' : '1px solid #FFFFFF'
                  }}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-4" style={{ color: '#39FF14' }}>
              READY FOR YOUR TRANSFORMATION?
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Book Your Appointment
            </h2>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time</label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#0A0A0A', 
                    border: '1px solid #888888',
                    color: '#FFFFFF'
                  }}
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                style={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid #888888',
                  color: '#FFFFFF'
                }}
                placeholder="Any specific requests or style references..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              style={{ backgroundColor: '#39FF14', color: '#0A0A0A'