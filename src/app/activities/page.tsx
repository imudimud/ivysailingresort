'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Waves, Dumbbell, Music, Sun, Ship, Users } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LazyImage } from '@/components/lazy-image'

const activities = [
  {
    name: "Sports",
    description: "Stay active with our range of sports facilities and activities.",
    image: "/sports.webp",
    icon: <Dumbbell className="w-8 h-8" />,
    details: [
      "Fully equipped fitness center",
      "Tennis courts (equipment available for rent)",
      "Beach volleyball and other beach sports"
    ]
  },
  {
    name: "Water Activities",
    description: "Dive into fun with our exciting water-based activities.",
    image: "/water-activities.webp",
    icon: <Waves className="w-8 h-8" />,
    details: [
      "Multiple swimming pools, including kids' pools and adults-only areas",
      "Private beach access with sunbeds and umbrellas",
      "Kayaking, paddleboarding, and sailing (rentals available)",
      "Scuba diving and snorkeling (with experienced guides, extra cost)",
      "Organized boat trips and excursions"
    ]
  },
  {
    name: "Entertainment",
    description: "Enjoy a variety of entertainment options for all ages.",
    image: "/entertainment.webp",
    icon: <Music className="w-8 h-8" />,
    details: [
      "Live music and cultural performances in the evening",
      "Organized theme nights and parties",
      "Kids' clubs with supervised activities and games",
      "Evening events such as comedy shows and karaoke",
      "Games rooms and movie nights for different age groups"
    ]
  }
]

const weeklySchedule = [
  { day: "Monday", activities: "Morning Yoga, Beach Volleyball Tournament, Evening Live Music" },
  { day: "Tuesday", activities: "Aqua Aerobics, Cooking Class, Turkish Night" },
  { day: "Wednesday", activities: "Tennis Lessons, Kids' Craft Workshop, Karaoke Night" },
  { day: "Thursday", activities: "Guided Nature Walk, Water Polo, Comedy Show" },
  { day: "Friday", activities: "Paddleboard Lessons, Wine Tasting, Beach Party" },
  { day: "Saturday", activities: "Sailing Excursion, Family Olympics, Movie Under the Stars" },
  { day: "Sunday", activities: "Sunrise Tai Chi, Sand Castle Competition, Farewell Gala Dinner" }
]

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Exciting Activities at IVY Sailing Resort</h1>
      <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
        At IVY Sailing Resort, we offer a wide range of activities to ensure your vacation is full of adventure, relaxation, and unforgettable moments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {activities.map((activity, index) => (
          <Card key={index} className="overflow-hidden">
            <LazyImage
              src={activity.image}
              lowQualitySrc={`${activity.image.split('.')[0]}-low.webp`}
              highQualitySrc={activity.image}
              alt={activity.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="flex items-center">
                {activity.icon}
                <span className="ml-2">{activity.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{activity.description}</CardDescription>
              <ul className="list-disc list-inside space-y-1">
                {activity.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center font-playfair">Weekly Activity Schedule</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Activities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weeklySchedule.map((day, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{day.day}</TableCell>
                <TableCell>{day.activities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 font-playfair">Additional Information</h2>
        <p className="text-lg font-opensans mb-6">
          Most activities are included in your all-inclusive package. Some premium activities or excursions may incur additional costs. Please check with our activities desk for more information on pricing and availability.
        </p>
        <p className="text-lg font-opensans mb-6">
          Activity schedules and availability may vary based on season and weather conditions. We recommend checking the daily activity schedule upon arrival or inquiring at the reception for the most up-to-date information.
        </p>
        <Button size="lg" variant="secondary">
          Discover, Explore, and Create Lasting Memories
        </Button>
      </div>
    </div>
  )
}

