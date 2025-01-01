import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Utensils, SpadeIcon as Spa, Sailboat, Users, Wine, Coffee } from 'lucide-react'

const premiumServices = [
  {
    title: "Personalized Butler Service",
    description: "Dedicated attention to cater to your every need",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Private Beach Cabanas",
    description: "Exclusive access to secluded relaxation areas",
    icon: <Sailboat className="h-6 w-6 text-primary" />
  },
  {
    title: "Gourmet Dining",
    description: "Curated menus and premium wine lists",
    icon: <Utensils className="h-6 w-6 text-primary" />
  },
  {
    title: "High-End Spa Treatments",
    description: "Luxurious massages and skin treatments",
    icon: <Spa className="h-6 w-6 text-primary" />
  }
]

const sophisticatedExperiences = [
  {
    title: "Private Boat Excursions",
    description: "Exclusive trips with personal guides",
    icon: <Sailboat className="h-6 w-6 text-primary" />
  },
  {
    title: "Exclusive Events",
    description: "Cocktail parties and special gatherings",
    icon: <Wine className="h-6 w-6 text-primary" />
  },
  {
    title: "Personal Fitness",
    description: "Tailored yoga and fitness sessions",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Private Chef Services",
    description: "Bespoke dining experiences",
    icon: <Coffee className="h-6 w-6 text-primary" />
  }
]

const testimonials = [
  {
    quote: "The personalized service and attention to detail at IVY Sailing Resort exceeded all our expectations. It was truly a luxurious escape.",
    author: "Emma and James, London"
  },
  {
    quote: "From the private beach cabanas to the exquisite gourmet dining, every moment of our stay was pure indulgence.",
    author: "Sophie and Michael, New York"
  },
  {
    quote: "The exclusive experiences and premium amenities made our anniversary celebration absolutely unforgettable.",
    author: "Olivia and Daniel, Paris"
  }
]

export default function LuxurySeekersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Experience Unrivaled Luxury and Exclusivity at IVY Sailing Resort</h1>
      
      <section className="mb-16">
        <p className="text-lg mb-8 text-center font-opensans max-w-3xl mx-auto">
          Indulge in the ultimate luxury experience at IVY Sailing Resort. Our high-end all-inclusive packages are designed to provide an extraordinary escape for discerning travelers, with premium services, exclusive amenities, and personalized attention to every detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/luxury-villa.jpg" 
            alt="Luxurious private villa" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/gourmet-dining.jpg" 
            alt="Exquisite gourmet dining experience" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Sophisticated Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sophisticatedExperiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {experience.icon}
                  <span>{experience.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Exclusive Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/private-pool.jpg" 
            alt="Exclusive private pool" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/luxury-spa.jpg" 
            alt="High-end spa treatment" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Guest Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-yellow-400 mb-4" />
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Read more reviews on TripAdvisor
          </Link>
        </div>
      </section>

      <section className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 font-playfair">Indulge in the Ultimate Luxury Experience</h2>
        <p className="text-xl mb-8 font-opensans">
          Elevate your vacation to new heights of opulence and exclusivity at IVY Sailing Resort.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/booking">Book Your Luxury Escape Now</Link>
        </Button>
      </section>
    </div>
  )
}

