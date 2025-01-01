import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Waves, Sailboat, Utensils, Dumbbell, Users, CreditCard, Menu, Glasses } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IVY Sailing Resort - Alcohol-Free All-Inclusive Paradise',
  description: 'Experience luxury and tranquility at IVY Sailing Resort, an alcohol-free all-inclusive resort in Ayvalık/Balıkesir, Turkey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Sailboat className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary font-playfair">IVY Sailing Resort</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <NavLink href="/rooms" icon={<Waves className="h-4 w-4" />}>Rooms</NavLink>
                <NavLink href="/dining" icon={<Utensils className="h-4 w-4" />}>Dining</NavLink>
                <NavLink href="/activities" icon={<Dumbbell className="h-4 w-4" />}>Activities</NavLink>
                <NavLink href="/packages" icon={<Users className="h-4 w-4" />}>Packages</NavLink>
                <NavLink href="/about" icon={<CreditCard className="h-4 w-4" />}>About Us</NavLink>
                <NavLink href="/virtual-tour" icon={<Glasses className="h-4 w-4" />}>Virtual Tour</NavLink>
              </div>
              <div className="flex items-center space-x-4">
                <Button asChild variant="default" className="hidden md:block">
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-4 mt-4">
                      <NavLink href="/rooms" icon={<Waves className="h-4 w-4" />}>Rooms</NavLink>
                      <NavLink href="/dining" icon={<Utensils className="h-4 w-4" />}>Dining</NavLink>
                      <NavLink href="/activities" icon={<Dumbbell className="h-4 w-4" />}>Activities</NavLink>
                      <NavLink href="/packages" icon={<Users className="h-4 w-4" />}>Packages</NavLink>
                      <NavLink href="/about" icon={<CreditCard className="h-4 w-4" />}>About Us</NavLink>
                      <NavLink href="/virtual-tour" icon={<Glasses className="h-4 w-4" />}>Virtual Tour</NavLink>
                      <Button asChild variant="default" className="w-full">
                        <Link href="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 font-playfair">IVY Sailing Resort</h3>
                <p className="font-opensans">Ayvalık/Balıkesir, Turkey</p>
                <p className="font-opensans">Phone: +90 266 324 53 00</p>
                <p className="font-opensans">Email: info@ivysailinghotel.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
                <ul className="font-opensans space-y-2">
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                  <li><Link href="/rooms" className="hover:underline">Rooms & Suites</Link></li>
                  <li><Link href="/dining" className="hover:underline">Dining</Link></li>
                  <li><Link href="/activities" className="hover:underline">Activities</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-playfair">Packages</h3>
                <ul className="font-opensans space-y-2">
                  <li><Link href="/packages#families" className="hover:underline">Family Packages</Link></li>
                  <li><Link href="/packages#couples" className="hover:underline">Couples Retreats</Link></li>
                  <li><Link href="/packages#budget" className="hover:underline">Budget-Friendly Options</Link></li>
                  <li><Link href="/packages#luxury" className="hover:underline">Luxury Experiences</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-playfair">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
                  <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="font-opensans">&copy; {new Date().getFullYear()} IVY Sailing Resort - Mavimed. All rights reserved.</p>
              <p className="font-opensans mt-2">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
                <Link href="/terms-and-conditions" className="hover:underline ml-2">Terms and Conditions</Link> | 
                <Link href="/sitemap" className="hover:underline ml-2">Site Map</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

function NavLink({ href, children, icon }: { href: string, children: React.ReactNode, icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
      {icon}
      <span>{children}</span>
    </Link>
  )
}

