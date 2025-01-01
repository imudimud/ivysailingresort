'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Coffee, Wine, Sandwich, Clock } from 'lucide-react'
import { LazyImage } from '@/components/lazy-image'

const diningOptions = [
  {
    name: "Open Buffet",
    description: "Enjoy a wide range of buffet options throughout the day, with fresh and delicious selections catering to all preferences.",
    image: "/open-buffet.webp",
    icon: <Utensils className="w-8 h-8" />,
    timings: [
      { meal: "Breakfast", time: "07:00 - 10:00" },
      { meal: "Late Breakfast", time: "10:00 - 12:00" },
      { meal: "Snacks", time: "12:00 - 14:00" },
      { meal: "Lunch", time: "13:00 - 15:00" },
      { meal: "Dinner", time: "19:00 - 21:00" },
      { meal: "Night Soup", time: "23:00 - 24:00" }
    ]
  },
  {
    name: "Specialty Dining",
    description: "Experience exquisite a la carte options at our specialty restaurants. Reservations required.",
    image: "/specialty-dining.webp",
    icon: <Wine className="w-8 h-8" />
  },
  {
    name: "Snack Bar",
    description: "For light bites and refreshments throughout the day, visit our snack bar by the pool.",
    image: "/snack-bar.webp",
    icon: <Sandwich className="w-8 h-8" />
  },
  {
    name: "Beverage Service",
    description: "Enjoy a wide range of beverages included in your all-inclusive package, from refreshing soft drinks to local spirits.",
    image: "/beverage-service.webp",
    icon: <Coffee className="w-8 h-8" />
  }
]

export default function DiningPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Culinary Delights at IVY Sailing Resort</h1>
      <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
        Embark on a culinary journey at IVY Sailing Resort. Our all-inclusive dining experience offers a variety of delicious options, from local Turkish delicacies to international favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {diningOptions.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <LazyImage
              src={option.image}
              lowQualitySrc={`${option.image.split('.')[0]}-low.webp`}
              highQualitySrc={option.image}
              alt={option.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="flex items-center">
                {option.icon}
                <span className="ml-2">{option.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{option.description}</CardDescription>
              {option.timings && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Dining Hours:</h3>
                  <ul className="space-y-1">
                    {option.timings.map((timing, i) => (
                      <li key={i} className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{timing.meal}: {timing.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 font-playfair">Fresh, Local Ingredients</h2>
        <p className="text-lg font-opensans mb-6">
          We take pride in using the freshest, locally-sourced ingredients in all our dishes. Our chefs work closely with local suppliers to ensure that you experience the best flavors Turkey has to offer.
        </p>
        <h3 className="text-xl font-semibold mb-2 font-playfair">Beverages</h3>
        <p className="text-lg font-opensans mb-6">
          Our all-inclusive package includes a wide range of beverages. Enjoy refreshing soft drinks, local spirits, and a selection of non-alcoholic cocktails throughout your stay.
        </p>
        <Button size="lg">Join Us for a Delightful Gastronomic Experience</Button>
      </div>
    </div>
  )
}

