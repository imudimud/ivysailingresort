'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Heart, CreditCard, Star, Umbrella, Utensils, SpadeIcon as Spa, Sailboat } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components"
import { LazyImage } from '@/components/lazy-image'

const packages = [
  {
    name: "Family Fun Package",
    description: "Create unforgettable memories with our family-friendly package. Enjoy kids' clubs, water parks, and spacious family suites for a stress-free vacation.",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: "/family-fun.webp",
    features: [
      "Spacious Family Suites (Deluxe, Executive Suite, or Executive Suite Plus)",
      "Access to Kids' Clubs with age-appropriate activities",
      "Water Park and splash zones access",
      "Family-friendly dining options",
      "Organized family activities and entertainment"
    ],
    pricing: "Starting from $200 per night",
    link: "/families"
  },
  {
    name: "Romantic Escapes Package",
    description: "Indulge in a luxurious and intimate getaway with our exclusive couples package, featuring tranquility, relaxation, and unforgettable moments designed for two.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    image: "/romantic-escape.webp",
    features: [
      "Luxurious accommodation in our adults-only section",
      "Access to private beach cabanas and exclusive pools",
      "Complimentary couples' spa treatment",
      "Romantic candlelit dinner for two",
      "Welcome bottle of champagne in your room",
      "Sunset cruise along the beautiful Turkish coast"
    ],
    pricing: "Starting from $220 per night",
    link: "/couples"
  },
  {
    name: "Budget Traveler Package",
    description: "Our affordable all-inclusive package offers the perfect blend of comfort and value, allowing you to enjoy a memorable vacation without compromising on quality.",
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    image: "/budget-friendly.webp",
    features: [
      "Comfortable Rooms: (Garden Rooms and Deluxe Rooms)",
      "All-inclusive meals and drinks",
      "Access to the main swimming pools",
      "Participation in resort activities and entertainment",
      "Use of fitness center and sports facilities"
    ],
    pricing: "Starting from $180 per night",
    link: "/budget-travelers"
  },
  {
    name: "Luxury Seeker Package",
    description: "Experience unparalleled luxury with our high-end all-inclusive package, offering premium services and exclusive experiences.",
    icon: <Star className="h-8 w-8 text-primary" />,
    image: "/luxury-experience.webp",
    features: [
      "Spacious Executive Suite or Executive Suite Plus accommodation",
      "Personalized butler service",
      "Access to exclusive beach area and private cabanas",
      "Gourmet dining options with a la carte choices and tasting menus",
      "Premium spa treatments and unlimited access to wellness facilities",
      "Private yacht tour with gourmet picnic"
    ],
    pricing: "Starting from $500 per night",
    link: "/luxury-seekers"
  }
]

const faqs = [
  {
    question: "What's included in the all-inclusive packages?",
    answer: "Our all-inclusive packages typically include accommodation, meals, drinks, access to resort facilities, and various activities. The specific inclusions may vary depending on the package you choose."
  },
  {
    question: "Can I upgrade my package after booking?",
    answer: "Yes, you can upgrade your package subject to availability. Please contact our reception desk for assistance with upgrades."
  },
  {
    question: "Are there any additional fees not covered by the all-inclusive package?",
    answer: "Most resort amenities and activities are included in your package. However, some premium services like certain spa treatments or special excursions may incur additional charges."
  },
  {
    question: "Is airport transfer included in the packages?",
    answer: "Airport transfers are not automatically included in our packages but can be arranged for an additional fee. Please inquire at the time of booking."
  }
]

export default function PackagesPage() {
  return (
    <TooltipProvider value="tooltip-provider">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Explore Our All-Inclusive Packages</h1>
        <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
          Discover our curated all-inclusive packages, designed to fulfill your unique vacation dreams. Each package has been crafted to provide an unforgettable experience, whether you're traveling with family, seeking a romantic escape, looking for affordable luxury, or indulging in the highest standard of luxury.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <LazyImage
                src={pkg.image}
                lowQualitySrc={`${pkg.image.split('.')[0]}-low.webp`}
                highQualitySrc={pkg.image}
                alt={pkg.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {pkg.icon}
                  <span>{pkg.name}</span>
                </CardTitle>
                <Tooltip type="single" value={`tooltip-${index}`}>
                  <TooltipTrigger asChild>
                    <CardDescription className="cursor-help">{pkg.description}</CardDescription>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{pkg.description}</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent className="flex-grow">
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xl font-semibold">{pkg.pricing}</span>
                <div className="space-x-2">
                  <Button asChild variant="outline">
                    <Link href={pkg.link}>Learn More</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`${pkg.link}#booking`}>Book Now</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Why Choose IVY Sailing Resort?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Utensils className="h-12 w-12 text-primary" />}
              title="All-Inclusive Luxury"
              description="Experience a truly worry-free vacation with our comprehensive all-inclusive packages."
            />
            <FeatureCard
              icon={<Sailboat className="h-12 w-12 text-primary" />}
              title="Prime Turkish Location"
              description="Enjoy breathtaking views and crystal-clear waters in the stunning Ayvalık region."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-primary" />}
              title="Exceptional Service"
              description="Our dedicated team is committed to providing you with unparalleled service."
            />
            <FeatureCard
              icon={<Spa className="h-12 w-12 text-primary" />}
              title="Diverse Experiences"
              description="From relaxation to adventure, we offer a wide range of activities to suit your preferences."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Book Your Perfect Package?</h2>
          <p className="text-xl mb-8 font-opensans">
            Choose the package that suits you best and start planning your dream vacation at IVY Sailing Resort.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">Book Your Perfect Package Now</Link>
          </Button>
        </section>
      </div>
    </TooltipProvider>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 font-playfair">{title}</h3>
        <p className="text-muted-foreground font-opensans">{description}</p>
      </CardContent>
    </Card>
  )
}

