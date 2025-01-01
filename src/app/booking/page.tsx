'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { format, differenceInDays } from "date-fns"
import { CalendarIcon, Users, Heart, CreditCard, Star, Plus, Minus } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { LazyImage } from '@/components/lazy-image'

const packageTypes = [
  { value: "family", label: "Family Fun Package", icon: <Users className="h-4 w-4" />, basePrice: 200 },
  { value: "couples", label: "Romantic Escapes Package", icon: <Heart className="h-4 w-4" />, basePrice: 220 },
  { value: "budget", label: "Budget Traveler Package", icon: <CreditCard className="h-4 w-4" />, basePrice: 180 },
  { value: "luxury", label: "Luxury Seeker Package", icon: <Star className="h-4 w-4" />, basePrice: 500 },
]

const roomTypes = [
  { value: "garden", label: "Garden Room", priceMultiplier: 1 },
  { value: "seaview", label: "Sea View Room", priceMultiplier: 1.2 },
  { value: "deluxe", label: "Deluxe Room", priceMultiplier: 1.3 },
  { value: "suite", label: "Executive Suite", priceMultiplier: 1.5 },
  { value: "suitePlus", label: "Executive Suite Plus", priceMultiplier: 1.8 },
]

const specialExperiences = {
  family: [
    { id: "kidsCamp", label: "Kids Adventure Camp", price: 50 },
    { id: "familyExcursion", label: "Family Island Excursion", price: 120 },
    { id: "waterPark", label: "Water Park Access", price: 40 },
  ],
  couples: [
    { id: "coupleSpa", label: "Couples Spa Treatment", price: 150 },
    { id: "romanticDinner", label: "Private Beach Dinner", price: 180 },
    { id: "sunsetCruise", label: "Sunset Yacht Cruise", price: 200 },
  ],
  budget: [
    { id: "guidedTour", label: "Guided City Tour", price: 30 },
    { id: "cookingClass", label: "Turkish Cooking Class", price: 45 },
    { id: "bikeRental", label: "Bicycle Rental (per day)", price: 15 },
  ],
  luxury: [
    { id: "privateButler", label: "24/7 Private Butler Service", price: 300 },
    { id: "helicopterTour", label: "Private Helicopter Tour", price: 500 },
    { id: "yachtCharter", label: "Luxury Yacht Charter (half-day)", price: 1000 },
  ],
}

export default function BookingPage() {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [adults, setAdults] = useState<string>('')
  const [children, setChildren] = useState<string>('')
  const [packageType, setPackageType] = useState<string>('')
  const [roomType, setRoomType] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    calculateTotalPrice()
  }, [checkIn, checkOut, packageType, roomType, selectedExperiences])

  useEffect(() => {
    // Reset selected experiences when package type changes
    setSelectedExperiences([])
  }, [packageType])

  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut || !packageType || !roomType) {
      setTotalPrice(0)
      return
    }

    const nights = differenceInDays(checkOut, checkIn)
    const selectedPackage = packageTypes.find(p => p.value === packageType)
    const selectedRoom = roomTypes.find(r => r.value === roomType)

    if (!selectedPackage || !selectedRoom) {
      setTotalPrice(0)
      return
    }

    let price = selectedPackage.basePrice * selectedRoom.priceMultiplier * nights
    
    selectedExperiences.forEach(exp => {
      const experience = specialExperiences[packageType as keyof typeof specialExperiences].find(e => e.id === exp)
      if (experience) {
        price += experience.price
      }
    })

    setTotalPrice(price)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!checkIn) newErrors.checkIn = 'Check-in date is required'
    if (!checkOut) newErrors.checkOut = 'Check-out date is required'
    if (!adults) newErrors.adults = 'Number of adults is required'
    if (!packageType) newErrors.packageType = 'Package type is required'
    if (!roomType) newErrors.roomType = 'Room type is required'
    if (!name) newErrors.name = 'Name is required'
    if (!email) newErrors.email = 'Email is required'
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid'
    if (!phone) newErrors.phone = 'Phone number is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setProgress(25)

    if (!validateForm()) {
      setIsSubmitting(false)
      setProgress(0)
      return
    }

    setProgress(50)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API delay
      setProgress(75)
      // Here you would typically send the form data to your backend
      console.log('Form submitted', { 
        checkIn, 
        checkOut, 
        adults, 
        children, 
        packageType, 
        roomType, 
        name, 
        email, 
        phone, 
        specialRequests,
        selectedExperiences,
        totalPrice
      })
      setProgress(100)
      // Redirect to confirmation page
      router.push('/booking-confirmation')
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'An error occurred while submitting the form. Please try again.' })
      setIsSubmitting(false)
      setProgress(0)
    }
  }

  const handleExperienceToggle = (experienceId: string) => {
    setSelectedExperiences(prev => 
      prev.includes(experienceId)
        ? prev.filter(id => id !== experienceId)
        : [...prev, experienceId]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Book Your Stay at IVY Sailing Resort</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Reservation Details</CardTitle>
            <CardDescription>Fill out the form below to reserve your room</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adults">Adults</Label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger id="adults">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.adults && <p className="text-red-500 text-sm">{errors.adults}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children (2-12 years)</Label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger id="children">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="packageType">Package Type</Label>
                <Select value={packageType} onValueChange={setPackageType}>
                  <SelectTrigger id="packageType">
                    <SelectValue placeholder="Select package type" />
                  </SelectTrigger>
                  <SelectContent>
                    {packageTypes.map((pkg) => (
                      <SelectItem key={pkg.value} value={pkg.value}>
                        <div className="flex items-center">
                          {pkg.icon}
                          <span className="ml-2">{pkg.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.packageType && <p className="text-red-500 text-sm">{errors.packageType}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="roomType">Room Type</Label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger id="roomType">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((room) => (
                      <SelectItem key={room.value} value={room.value}>{room.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
              </div>
              {packageType && (
                <div className="space-y-2">
                  <Label>Special Experiences</Label>
                  {specialExperiences[packageType as keyof typeof specialExperiences].map((experience) => (
                    <div key={experience.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={experience.id}
                        checked={selectedExperiences.includes(experience.id)}
                        onCheckedChange={() => handleExperienceToggle(experience.id)}
                      />
                      <label
                        htmlFor={experience.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {experience.label} (+${experience.price})
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 123 456 7890" required />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Textarea id="specialRequests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Any special requests or dietary requirements?" />
              </div>
              {errors.submit && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errors.submit}</AlertDescription>
                </Alert>
              )}
              <div className="text-xl font-bold mb-4">
                Total Price: ${totalPrice.toFixed(2)}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Booking...' : 'Book Now'}
              </Button>
            </form>
          </CardContent>
          {isSubmitting && (
            <CardFooter>
              <Progress value={progress} className="w-full" />
            </CardFooter>
          )}
        </Card>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose IVY Sailing Resort?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>All-inclusive luxury experience</li>
                <li>Prime location on the Turkish coast</li>
                <li>Tailored packages for every type of traveler</li>
                <li>Exceptional service and amenities</li>
                <li>Unforgettable experiences and activities</li>
              </ul>
            </CardContent>
          </Card>
          <LazyImage 
            src="/resort-overview.webp" 
            lowQualitySrc="/resort-overview-low.webp"
            highQualitySrc="/resort-overview.webp"
            alt="IVY Sailing Resort Overview" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
          <Card>
            <CardHeader>
              <CardTitle>Need Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our dedicated team is here to help you plan your perfect stay. Don't hesitate to reach out if you have any questions or special requirements.</p>
              <p><strong>Phone:</strong> +90 266 324 53 00</p>
              <p><strong>Email:</strong> reservations@ivysailingresort.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

