import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Utensils, SpadeIcon as Spa, Sunset, Wine, Umbrella, Sailboat, SpaceIcon as Yoga} from 'lucide-react'

const romanticSettings = [
  {
    title: "Candlelit Dinners",
    description: "Enjoy intimate dinners in elegant settings under the stars.",
    icon: <Utensils className="h-6 w-6 text-primary" />
  },
  {
    title: "Adults-Only Areas",
    description: "Relax in our exclusive adults-only pools and beach sections.",
    icon: <Umbrella className="h-6 w-6 text-primary" />
  },
  {
    title: "Couples' Spa",
    description: "Indulge in private massages and aromatherapy treatments designed for two.",
    icon: <Spa className="h-6 w-6 text-primary" />
  },
  {
    title: "Private Cabanas",
    description: "Unwind in your own private beach cabana or poolside retreat.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }
]

const exquisiteExperiences = [
  {
    title: "Private Dining",
    description: "Experience bespoke dining experiences in picturesque locations.",
    icon: <Utensils className="h-6 w-6 text-primary" />
  },
  {
    title: "Wine Tasting",
    description: "Savor a selection of fine wines in our cozy wine cellar.",
    icon: <Wine className="h-6 w-6 text-primary" />
  },
  {
    title: "Sunset Cruise",
    description: "Embark on a romantic sunset cruise along the beautiful Turkish coast.",
    icon: <Sailboat className="h-6 w-6 text-primary" />
  },
  {
    title: "Couples' Activities",
    description: "Enjoy partner yoga or cooking classes designed for two.",
    icon: <Yoga className="h-6 w-6 text-primary" />
  }
]

const coupleTestimonials = [
  {
    quote: "Our honeymoon at IVY Sailing Resort was absolutely magical. The private beach cabana and couples' massage were highlights of our trip!",
    author: "Emma and James, Honeymooners"
  },
  {
    title: "Cooking Class",
    description: "Learn to prepare delicious Turkish cuisine together.",
    icon: <Utensils className="h-6 w-6 text-primary" />
  },
  {
    quote: "The romantic dinner under the stars and the sunset cruise made our anniversary unforgettable. IVY Sailing Resort truly knows how to create magical moments for couples.",
    author: "Sophie and Michael, Anniversary Celebration"
  },
  {
    quote: "As a couple seeking a peaceful getaway, we found everything we needed at IVY Sailing Resort. The adults-only areas and exquisite dining experiences were perfect.",
    author: "Laura and David, Romantic Escape"
  }
]

export default function CouplesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Indulge in Romance and Luxury at IVY Sailing Resort</h1>
      
      <section className="mb-16">
        <p className="text-lg mb-8 text-center font-opensans max-w-3xl mx-auto">
          Escape to IVY Sailing Resort, where tranquility and romance await. Our couples-focused packages are meticulously designed to offer intimate and luxurious experiences, making it the perfect destination for honeymoons, anniversaries, or a spontaneous romantic escape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/couple-beach-sunset.jpg" 
            alt="Couple enjoying sunset on the beach" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/romantic-dinner.jpg" 
            alt="Romantic candlelit dinner setting" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Romantic Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {romanticSettings.map((setting, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {setting.icon}
                  <span>{setting.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{setting.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Exquisite Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exquisiteExperiences.map((experience, index) => (
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
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Couples' Package Highlights</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Luxurious accommodation in our adults-only section</span>
              </li>
              <li className="flex items-center gap-2">
                <Umbrella className="h-5 w-5 text-primary" />
                <span>Access to private beach cabanas and exclusive pools</span>
              </li>
              <li className="flex items-center gap-2">
                <Spa className="h-5 w-5 text-primary" />
                <span>Complimentary couples' spa treatment</span>
              </li>
              <li className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                <span>Romantic candlelit dinner for two</span>
              </li>
              <li className="flex items-center gap-2">
                <Wine className="h-5 w-5 text-primary" />
                <span>Welcome bottle of champagne in your room</span>
              </li>
              <li className="flex items-center gap-2">
                <Sunset className="h-5 w-5 text-primary" />
                <span>Sunset cruise along the beautiful Turkish coast</span>
              </li>
              <li className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                <span>Couples' cooking class or wine tasting session</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">A Day of Romance at IVY Sailing Resort</h2>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="font-bold">8:00 AM:</span> Start your day with a private breakfast on your balcony overlooking the sea.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">10:00 AM:</span> Relax together in your exclusive beach cabana.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">1:00 PM:</span> Enjoy a couples' massage at our luxurious spa.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">4:00 PM:</span> Participate in a romantic couples' cooking class or wine tasting.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">6:30 PM:</span> Watch the sunset during a private boat tour.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">8:00 PM:</span> Indulge in a candlelit dinner under the stars.
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">What Our Couples Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coupleTestimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
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
        <h2 className="text-3xl font-bold mb-4 font-playfair">Plan Your Perfect Romantic Escape Now!</h2>
        <p className="text-lg mb-6 font-opensans">
          Experience the ultimate romantic getaway at IVY Sailing Resort. Our couples packages ensure an unforgettable escape filled with luxury, intimacy, and cherished moments.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/booking">Book Your Romantic Getaway Today!</Link>
        </Button>
      </section>
    </div>
  )
}

