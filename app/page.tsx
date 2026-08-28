"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Scissors,
  Menu,
  X,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Users,
  Calendar,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Classic Cut",
    description: "Precision haircut tailored to your style and face shape",
    price: "From $25",
    icon: Scissors,
  },
  {
    title: "Fade Specialist",
    description: "Seamless gradients from skin to length, any style",
    price: "From $30",
    icon: Sparkles,
  },
  {
    title: "Beard Sculpting",
    description: "Sharp lines and expert shaping for the perfect beard",
    price: "From $15",
    icon: Award,
  },
  {
    title: "Hot Towel Shave",
    description: "Old school luxury with a straight razor finish",
    price: "From $35",
    icon: Star,
  },
  {
    title: "Kids Cut",
    description: "Patient service for the next generation of fresh cuts",
    price: "From $18",
    icon: Users,
  },
  {
    title: "The Full Experience",
    description: "Haircut, beard trim, hot towel, and styling products",
    price: "From $55",
    icon: Calendar,
  },
];

const teamMembers = [
  {
    name: "Master Barber",
    specialty: "Fades & Precision Cuts",
    initials: "MB",
    color: "bg-[#39FF14]",
    textColor: "text-[#0A0A0A]",
  },
  {
    name: "Senior Stylist",
    specialty: "Creative Designs & Textures",
    initials: "SS",
    color: "bg-white",
    textColor: "text-[#0A0A0A]",
  },
  {
    name: "Beard Specialist",
    specialty: "Shaves & Beard Grooming",
    initials: "BS",
    color: "bg-[#6B6B6B]",
    textColor: "text-white",
  },
  {
    name: "Junior Barber",
    specialty: "Classic Cuts & Styling",
    initials: "JB",
    color: "bg-[#39FF14]",
    textColor: "text-[#0A0A0A]",
  },
];

const testimonials = [
  {
    quote:
      "Best fade I've ever had. These guys know what they're doing. The vibe in here is unmatched.",
    author: "Regular Client",
    initials: "RC",
  },
  {
    quote:
      "Finally found a shop that gets my style. Clean cuts, good music, great conversation.",
    author: "First Time Visitor",
    initials: "FT",
  },
  {
    quote:
      "Been coming here for months. Consistent quality every single time. Highly recommend.",
    author: "Loyal Customer",
    initials: "LC",
  },
];

const stats = [
  { value: "5000+", label: "Fresh Cuts" },
  { value: "4.9", label: "Star Rating" },
  { value: "10+", label: "Years Combined Experience" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-xl tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <Scissors className="w-6 h-6 text-[#39FF14]" />
              <span>
                THE CUT <span className="text-[#39FF14]">LAB</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#6B6B6B] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#39FF14] text-[#0A0A0A] hover:bg-[#39FF14]/90 font-semibold"
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileNavOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-lg font-medium text-[#6B6B6B] hover:text-white transition-all duration-300"
                style={{
                  transitionDelay: mobileNavOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#39FF14] text-[#0A0A0A] hover:bg-[#39FF14]/90 font-semibold mt-2 transition-all duration-300"
              style={{
                transitionDelay: mobileNavOpen
                  ? `${navLinks.length * 60}ms`
                  : "0ms",
              }}
            >
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-[#1A1A1A] rounded-full text-[#39FF14] text-sm font-medium mb-6">
                Premium Urban Grooming
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Where Precision
                <br />
                Meets <span className="text-[#39FF14]">Style</span>
              </h1>
              <p className="text-lg text-[#6B6B6B] mb-8 max-w-lg">
                Step into The Cut Lab and experience the art of the perfect cut.
                Our master barbers blend classic technique with modern trends to
                craft your signature look.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#39FF14] text-[#0A0A0A] hover:bg-[#39FF14]/90 font-semibold text-base"
                >
                  <a href="#contact">Book Your Cut</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#2A2A2A] text-white hover:bg-[#1A1A1A] font-semibold text-base"
                >
                  <a href="#services">View Services</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-[#2A2A2A]">
                <div className="flex -space-x-2">
                  {["RC", "FT", "LC"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#1A1A1A] border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-[#39FF14]"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#39FF14] text-[#39FF14]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#6B6B6B]">
                    Trusted by thousands of clients
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="The Cut Lab barbershop interior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14] flex items-center justify-center">
                    <Scissors className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">10+ Years</p>
                    <p className="text-sm text-[#6B6B6B]">Combined Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#39FF14] text-sm font-medium uppercase tracking-wider mb-4">
              What We Offer
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#39FF14]/50 transition-colors group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-[#6B6B6B] mb-4">{service.description}</p>
                  <p className="text-[#39FF14] font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section id="gallery" className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#39FF14] text-sm font-medium uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden col-span-2 row-span-2">
              <Image
                src="/images/feature.png"
                alt="Featured transformation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#39FF14] text-sm font-medium">Featured</p>
                <p className="text-lg font-bold">Signature Fade</p>
              </div>
            </div>
            {[
              { title: "Skin Fade", gradient: "from-[#39FF14]/20 to-[#0A0A0A]" },
              { title: "Textured Crop", gradient: "from-[#6B6B6B]/30 to-[#0A0A0A]" },
              { title: "Classic Taper", gradient: "from-white/10 to-[#0A0A0A]" },
              { title: "Beard Design", gradient: "from-[#39FF14]/10 to-[#1A1A1A]" },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} flex items-end p-4 group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-[#39FF14]/0 group-hover:bg-[#39FF14]/5 transition-colors" />
                <div className="relative z-10">
                  <p className="text-sm text-[#6B6B6B]">Style</p>
                  <p className="font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#39FF14] text-sm font-medium uppercase tracking-wider mb-4">
              Meet The Crew
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-32 h-32 mx-auto rounded-full ${member.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                >
                  <span
                    className={`text-3xl font-bold ${member.textColor}`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#6B6B6B]">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-[#39FF14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#0A0A0A]/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#39FF14] text-sm font-medium uppercase tracking-wider mb-4">
              What Clients Say
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Testimonials
            </h2>
          </div>
          <div className="relative">
            <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#39FF14] text-[#39FF14]"
                  />
                ))}
              </div>
              <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#39FF14] font-bold">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div className="text-left">
                  <p className="font-bold">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">Verified Client</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-[#39FF14]"
                        : "bg-[#2A2A2A]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-20 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#39FF14] blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ready to Get <span className="text-[#39FF14]">Fresh</span>?
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-10 max-w-2xl mx-auto">
            Walk ins welcome, but booking ahead guarantees your spot. Join the
            thousands who trust The Cut Lab for their signature look.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#39FF14] text-[#0A0A0A] hover:bg-[#39FF14]/90 font-semibold text-lg px-10"
          >
            <a href="#contact">Book Your Appointment</a>
          </Button>
        </div>
      </section>

      {/* Contact Split */}
      <section id="contact" className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#39FF14] text-sm font-medium uppercase tracking-wider mb-4">
                Get In Touch
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Book Your Visit
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Ready for a fresh cut? Drop us a message or stop by the shop.
                Walk ins are welcome but appointments are recommended for
                guaranteed service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Hours</p>
                    <p className="text-[#6B6B6B]">Contact us for current hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Location</p>
                    <p className="text-[#6B6B6B]">Contact us for directions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Follow Us</p>
                    <p className="text-[#6B6B6B]">@thecutlab</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-[#1A1A1A] border-[#2A2A2A] focus:border-[#39FF14] focus:ring-[#39FF14]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-[#1A1A1A] border-[#2A2A2A] focus:border-[#39FF14] focus:ring-[#39FF14]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help?"
                      rows={4}
                      className="bg-[#1A1A1A] border-[#2A2A2A] focus:border-[#39FF14] focus:ring-[#39FF14]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#39FF14] text-[#0A0A0A] hover:bg-[#39FF14]/90 font-semibold"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <a
                href="#"
                className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <Scissors className="w-6 h-6 text-[#39FF14]" />
                <span>
                  THE CUT <span className="text-[#39FF14]">LAB</span>
                </span>
              </a>
              <p className="text-[#6B6B6B] text-sm">
                Premium urban grooming for the modern gentleman. Where precision
                meets style.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#6B6B6B] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-[#6B6B6B] hover:text-white transition-colors text-sm"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:contact@thecutlab.com"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#39FF14] hover:text-[#0A0A0A] transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#39FF14] hover:text-[#0A0A0A] transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/thecutlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#39FF14] hover:text-[#0A0A0A] transition-colors"
                  aria-label="Follow on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#6B6B6B] text-sm">
              &copy; {new Date().getFullYear()} The Cut Lab. All rights reserved.
            </p>
            <p className="text-[#6B6B6B] text-sm">
              Premium Urban Grooming
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
