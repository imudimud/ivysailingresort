'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, Maximize, Wifi, Tv, Coffee } from 'lucide-react'
import { LazyImage } from '@/components/lazy-image'

const rooms = [
  {
    name: "Garden Room",
    description: "Peaceful retreat with garden views",
    price: "From 150₺ per night",
    image: "/garden-room.webp",
    size: "26 m²",
    occupancy: "2 adults, 1 child",
    amenities: ["Air conditioning", "TV", "Wireless internet", "Mini-bar", "Shower", "Hair dryer", "Safe", "Telephone", "Tea set"]
  },
  {
    name: "Deluxe Room",
    description: "Spacious comfort with modern amenities",
    price: "From 160₺ per night",
    image: "/deluxe-room.webp",
    size: "32 m²",
    occupancy: "2 adults, 1 child",
    amenities: ["Air conditioning", "TV", "Wireless internet", "Mini-bar", "Shower", "Hair dryer", "Safe", "Telephone", "Tea set"]
  },
  {
    name: "Executive Room",
    description: "Elegant space for the discerning traveler",
    price: "From 170₺ per night",
    image: "/executive-room.webp",
    size: "30 m²",
    occupancy: "2 adults",
    amenities: ["Air conditioning", "TV", "Wireless internet", "Mini-bar", "Shower", "Hair dryer", "Safe", "Telephone", "Tea set"]
  },
  {
    name: "Executive Suite",
    description: "Luxurious suite with separate living area",
    price: "From 500₺ per night",
    image: "/executive-suite.webp",
    size: "37 m²",
    occupancy: "2 adults, 2 children",
    amenities: ["Air conditioning", "TV", "Wireless internet", "Mini-bar", "Shower", "Hair dryer", "Safe", "Telephone", "Tea set"]
  },
  {
    name: "Executive Suite Plus",
    description: "Our most spacious and luxurious accommodation",
    price: "From 600₺ per night",
    image: "/executive-suite-plus.webp",
    size: "56 m²",
    occupancy: "2 adults, 2 children",
    amenities: ["Air conditioning", "TV", "Wireless internet", "Mini-bar", "Shower", "Hair dryer", "Safe", "Telephone", "Tea set"]
  }
]

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Elegant Accommodations at IVY Sailing Resort</h1>
      <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
        Experience comfort and style in our thoughtfully designed rooms and suites. Each space is crafted to provide a peaceful retreat after a day of seaside adventures.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <Card key={index} className="overflow-hidden">
            <LazyImage
              src={room.image}
              lowQualitySrc={`${room.image.split('.')[0]}-low.webp`}
              highQualitySrc={room.image}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Maximize className="w-4 h-4 mr-2" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{room.occupancy}</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Amenities:</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.slice(0, 6).map((amenity, i) => (
                  <div key={i} className="flex items-center">
                    <AmenityIcon amenity={amenity} />
                    <span className="ml-2 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold">{room.price}</span>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function AmenityIcon({ amenity }: { amenity: string }) {
  switch (amenity.toLowerCase()) {
    case 'air conditioning':
      return <Maximize className="w-4 h-4" />
    case 'tv':
      return <Tv className="w-4 h-4" />
    case 'wireless internet':
      return <Wifi className="w-4 h-4" />
    case 'mini-bar':
      return <Coffee className="w-4 h-4" />
    default:
      return <Bed className="w-4 h-4" />
  }
}

