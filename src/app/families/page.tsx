import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Umbrella, Utensils, Calendar, Sun } from 'lucide-react'

const familyAmenities = [
  {
    title: "Kids' Clubs",
    description: "Age-appropriate activities and entertainment for children of all ages.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Water Parks",
    description: "Fun and safe splash zones and water slides for the whole family.",
    icon: <Umbrella className="h-6 w-6 text-primary" />
  },
  {
    title: "Family Dining",
    description: "Kid-friendly menus and flexible meal times to suit your family's schedule.",
    icon: <Utensils className="h-6 w-6 text-primary" />
  },
  {
    title: "Family Suites",
    description: "Spacious accommodations designed for comfort and convenience.",
    icon: <Sun className="h-6 w-6 text-primary" />
  }
]

const familyActivities = [
  "Organized family excursions and boat trips",
  "Beach games and watersports",
  "Themed nights and evening entertainment",
  "Games rooms and dedicated family areas",
  "Supervised activities at kids' clubs"
]

const familyTestimonials = [
  {
    quote: "Our kids had the time of their lives at the water park, and we parents got to relax knowing they were safe and having fun!",
    author: "The Johnson Family"
  },
  {
    quote: "The kids' club activities were so engaging, our children didn't want to leave. It was the perfect balance of family time and adult relaxation.",
    author: "Sarah and Tom, parents of two"
  }
]

export default function FamiliesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Create Unforgettable Family Memories at IVY Sailing Resort</h1>
      
      <section className="mb-16">
        <p className="text-lg mb-8 text-center font-opensans max-w-3xl mx-auto">
          At IVY Sailing Resort, we understand that family vacations are all about creating lasting memories together. Our family packages are designed to provide a stress-free and fun-filled getaway for all ages, with activities, amenities, and dining options tailored to meet the needs of every family member.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/family-fun.jpg" 
            alt="Family enjoying the resort" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/kids-club.jpg" 
            alt="Kids having fun at the kids club" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Family-Friendly Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {familyAmenities.map((amenity, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {amenity.icon}
                  <span>{amenity.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Family Activities</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {familyActivities.map((activity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">A Day in the Life at IVY Sailing Resort</h2>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="font-bold">8:00 AM:</span> Start your day with a family breakfast at our buffet restaurant.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">10:00 AM:</span> Drop the kids off at the Kids' Club for morning activities while parents relax by the pool.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">12:30 PM:</span> Family lunch at the beach-side grill.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">2:00 PM:</span> Family water park time with slides and splash zones.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">4:00 PM:</span> Organized family beach games and activities.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">6:30 PM:</span> Family dinner at the main restaurant.
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">8:00 PM:</span> Evening entertainment suitable for all ages.
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Family Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {familyTestimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 font-playfair">Ready for Your Family Adventure?</h2>
        <p className="text-lg mb-6 font-opensans">
          Experience the perfect blend of relaxation and excitement for the whole family at IVY Sailing Resort. Our all-inclusive family packages ensure a stress-free and memorable vacation for everyone.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/booking">Book Your Stress-Free Family Vacation Today!</Link>
        </Button>
      </section>
    </div>
  )
}

