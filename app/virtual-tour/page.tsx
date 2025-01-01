'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LazyImage } from '@/components/lazy-image'

const tourSpots = [
  { id: 1, name: "Lobby", image: "/lobby.webp", description: "Experience the warm welcome of our elegant lobby." },
  { id: 2, name: "Pool Area", image: "/pool-area.webp", description: "Relax by our stunning pool with a view of the Aegean Sea." },
  { id: 3, name: "Beach", image: "/beach.webp", description: "Enjoy our private beach with crystal-clear waters." },
  { id: 4, name: "Restaurant", image: "/restaurant.webp", description: "Savor delicious meals in our main restaurant." },
  { id: 5, name: "Spa", image: "/spa.webp", description: "Indulge in relaxation at our luxurious spa." },
  { id: 6, name: "Garden Room", image: "/garden-room.webp", description: "Rest in comfort in our Garden Rooms." },
  { id: 7, name: "Executive Suite", image: "/executive-suite.webp", description: "Experience luxury in our spacious Executive Suites." },
  { id: 8, name: "Kids Club", image: "/kids-club.webp", description: "Fun activities await at our Kids Club." },
]

export default function VirtualTourPage() {
  const [currentSpot, setCurrentSpot] = useState(0)

  const nextSpot = () => {
    setCurrentSpot((prev) => (prev + 1) % tourSpots.length)
  }

  const prevSpot = () => {
    setCurrentSpot((prev) => (prev - 1 + tourSpots.length) % tourSpots.length)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Virtual Tour of IVY Sailing Resort</h1>
      <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
        Explore our beautiful resort from the comfort of your home. Take a virtual walk through our facilities and get a taste of the luxury that awaits you at IVY Sailing Resort.
      </p>

      <div className="relative mb-8">
        <LazyImage
          src={tourSpots[currentSpot].image}
          lowQualitySrc={`${tourSpots[currentSpot].image.split('.')[0]}-low.webp`}
          highQualitySrc={tourSpots[currentSpot].image}
          alt={tourSpots[currentSpot].name}
          width={800}
          height={600}
          className="w-full h-[60vh] object-cover rounded-lg"
        />
        <Button variant="outline" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSpot}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSpot}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="absolute bottom-4 right-4">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{tourSpots[currentSpot].name}</DialogTitle>
              <DialogDescription>{tourSpots[currentSpot].description}</DialogDescription>
            </DialogHeader>
            <LazyImage
              src={tourSpots[currentSpot].image}
              lowQualitySrc={`${tourSpots[currentSpot].image.split('.')[0]}-low.webp`}
              highQualitySrc={tourSpots[currentSpot].image}
              alt={tourSpots[currentSpot].name}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 font-playfair">{tourSpots[currentSpot].name}</h2>
        <p className="text-lg font-opensans">{tourSpots[currentSpot].description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tourSpots.map((spot, index) => (
          <Card key={spot.id} className={`cursor-pointer ${index === currentSpot ? 'ring-2 ring-primary' : ''}`} onClick={() => setCurrentSpot(index)}>
            <CardContent className="p-2">
              <LazyImage
                src={spot.image}
                lowQualitySrc={`${spot.image.split('.')[0]}-low.webp`}
                highQualitySrc={spot.image}
                alt={spot.name}
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="mt-2 text-center font-semibold">{spot.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

