import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Sailboat, Waves, Users, CreditCard, Heart, Star, Umbrella, SpadeIcon as Spa } from 'lucide-react'
import { FlyingDatePicker } from '@/components/flying-date-picker'
import { LazyImage } from '@/components/lazy-image'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <LazyImage
          src="/hero-image.webp"
          lowQualitySrc="/hero-image-low.webp"
          highQualitySrc="/hero-image-high.webp"
          alt="IVY Sailing Resort"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-playfair text-shadow">
            IVY Sailing Resort
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-opensans">
            Your All-Inclusive Turkish Paradise Awaits
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/packages">Explore Packages</Link>
          </Button>
        </div>
      </section>

      {/* Scrolling Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {/* Family Fun Section */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <LazyImage
                  src="/family-fun.webp"
                  lowQualitySrc="/family-fun-low.webp"
                  highQualitySrc="/family-fun-high.webp"
                  alt="Family Fun at IVY Sailing Resort"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 font-playfair">Family Fun</h2>
                <p className="text-lg mb-4 font-opensans">
                  Create unforgettable memories with our family-friendly packages. Enjoy kids' clubs, water parks, and spacious family suites for a stress-free vacation.
                </p>
                <Button asChild>
                  <Link href="/families">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Romantic Escapes Section */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <LazyImage
                  src="/romantic-escape.webp"
                  lowQualitySrc="/romantic-escape-low.webp"
                  highQualitySrc="/romantic-escape-high.webp"
                  alt="Romantic Escapes at IVY Sailing Resort"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 font-playfair">Romantic Escapes</h2>
                <p className="text-lg mb-4 font-opensans">
                  Indulge in luxury and intimacy with our couples-focused packages, featuring private beach cabanas, exquisite dining experiences, and unforgettable moments designed for two.
                </p>
                <Button asChild>
                  <Link href="/couples">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Budget-Friendly Section */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <LazyImage
                  src="/budget-friendly.webp"
                  lowQualitySrc="/budget-friendly-low.webp"
                  highQualitySrc="/budget-friendly-high.webp"
                  alt="Budget-Friendly Options at IVY Sailing Resort"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 font-playfair">Worry-Free Getaways</h2>
                <p className="text-lg mb-4 font-opensans">
                  Enjoy comfortable and affordable all-inclusive packages that offer everything you need for a fantastic vacation without breaking the bank.
                </p>
                <Button asChild>
                  <Link href="/budget-travelers">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Luxury Experience Section */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <LazyImage
                  src="/luxury-experience.webp"
                  lowQualitySrc="/luxury-experience-low.webp"
                  highQualitySrc="/luxury-experience-high.webp"
                  alt="Luxury Experience at IVY Sailing Resort"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 font-playfair">Exclusive Luxury</h2>
                <p className="text-lg mb-4 font-opensans">
                  Experience unparalleled luxury with our premium all-inclusive packages. Indulge in gourmet dining, personalized service, and exclusive access to the most luxurious aspects of our resort.
                </p>
                <Button asChild>
                  <Link href="/luxury-seekers">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-playfair">Special Offers</h2>
          <Card className="bg-white p-8 rounded-lg text-center mb-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Summer Flash Sale</h3>
              <p className="text-xl mb-4">Save 20% on all bookings made before July 31st!</p>
              <div className="countdown-timer mb-4">
                {/* Add countdown timer component here */}
              </div>
              <Button asChild size="lg">
                <Link href="/booking">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
          <div className="text-center">
            <Link href="/packages" className="text-primary hover:underline text-lg">
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready for Your Dream Vacation?</h2>
          <p className="text-xl mb-8 font-opensans">Book your stay at IVY Sailing Resort and experience the magic of Ayvalık/Balıkesir.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/packages">Book Your Escape Now</Link>
          </Button>
          <div className="mt-8">
            <p className="mb-2">Contact us:</p>
            <p>Phone: +90 266 324 53 00 (main) | +90 549 743 53 00 (reservations)</p>
            <p>Email: info@ivysailinghotel.com | bilgi@ivysailinghotel.com</p>
          </div>
        </div>
      </section>

      {/* Flying Date Picker */}
      <FlyingDatePicker />
    </div>
  )
}

