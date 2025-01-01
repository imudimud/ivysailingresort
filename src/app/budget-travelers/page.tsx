import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Umbrella, Utensils, Users, Bed } from 'lucide-react'

export default function BudgetTravelersPage() {
  const valueForMoney = [
    {
      title: "Comfortable Accommodations",
      description: "Garden Rooms and Deluxe Rooms with essential amenities",
      icon: <Bed className="h-6 w-6 text-primary" />
    },
    {
      title: "All-Inclusive Meals & Drinks",
      description: "Plenty of choices for each meal time",
      icon: <Utensils className="h-6 w-6 text-primary" />
    },
    {
      title: "Pool & Beach Access",
      description: "Enjoy our main swimming pools and beach areas",
      icon: <Umbrella className="h-6 w-6 text-primary" />
    },
    {
      title: "Cost-Effective Entertainment",
      description: "Games rooms, movie nights, and evening events",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ]

  const worryFreeTravel = [
    "No hidden costs and transparent pricing",
    "Easy booking process and clear cancellation policies",
    "Friendly staff available to assist guests",
    "Everything you need in one place"
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Affordable All-Inclusive Getaways at IVY Sailing Resort</h1>
      
      <section className="mb-16">
        <p className="text-lg mb-8 text-center font-opensans max-w-3xl mx-auto">
          At IVY Sailing Resort, we believe everyone deserves a fantastic vacation, no matter their budget. Our affordable all-inclusive packages offer the perfect blend of comfort, convenience, and value, allowing you to enjoy a memorable getaway without overspending. We provide a worry-free travel experience that is both easy and affordable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/budget-friendly-pool.jpg" 
            alt="Guests enjoying the swimming pool" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/budget-friendly-beach.jpg" 
            alt="Affordable beach experience" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Value for Money</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueForMoney.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Worry-Free Travel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worryFreeTravel.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Affordable Luxury Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src="/budget-friendly-buffet.jpg" 
            alt="All-inclusive buffet" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Image 
            src="/budget-friendly-room.jpg" 
            alt="Comfortable accommodations" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center font-playfair">Why Choose Our Budget-Friendly Package?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Affordable All-Inclusive experience</li>
              <li>Budget-Friendly Vacation without compromising on quality</li>
              <li>Great Value for Money with transparent pricing</li>
              <li>Worry-Free Getaway with everything included</li>
              <li>Comfortable accommodations and essential amenities</li>
              <li>Access to main resort facilities and activities</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 font-playfair">Ready for Your Affordable Luxury Getaway?</h2>
        <p className="text-xl mb-8 font-opensans">
          Enjoy a fantastic vacation without breaking the bank! Book now for affordable all-inclusive luxury at IVY Sailing Resort.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/booking">Book Your Budget-Friendly Escape Now!</Link>
        </Button>
      </section>
    </div>
  )
}

