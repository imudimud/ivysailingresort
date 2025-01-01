'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Leaf, Smile, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { LazyImage } from '@/components/lazy-image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">About IVY Sailing Resort</h1>
      <p className="text-lg mb-12 text-center font-opensans max-w-3xl mx-auto">
        Discover the story behind IVY Sailing Resort and our commitment to providing exceptional all-inclusive vacations in a beautiful Turkish setting. We are dedicated to creating unique and unforgettable experiences for every guest.
      </p>

      {/* Resort History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 font-opensans">
              Founded in 2010, IVY Sailing Resort started as a small beachfront hotel with a vision to provide unique, high-quality vacations on the beautiful Turkish coast. Over the years, we've grown and evolved, continuously improving our facilities and services to become the luxury all-inclusive destination we are today.
            </p>
            <p className="text-lg font-opensans">
              Our journey has been marked by a commitment to excellence, sustainability, and creating unforgettable experiences for our guests. From our humble beginnings to our current status as a premier resort, we've never lost sight of what matters most - your satisfaction and enjoyment.
            </p>
          </div>
          <div>
            <LazyImage
              src="/resort-history.webp"
              lowQualitySrc="/resort-history-low.webp"
              highQualitySrc="/resort-history.webp"
              alt="IVY Sailing Resort in its early days"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Our Mission and Values</h2>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-opensans">
              Our mission is to create an exceptional, all-inclusive resort experience that combines the beauty of the Turkish coastline with outstanding service, luxurious amenities, and a commitment to sustainability.
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                <span>Guest Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Providing exceptional guest experiences that exceed expectations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="w-6 h-6 mr-2" />
                <span>Quality Offerings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Offering diverse and high-quality dining and activities for all guests.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smile className="w-6 h-6 mr-2" />
                <span>Seamless Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ensuring our guests have a seamless, worry-free experience from start to finish.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>Community Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Supporting our local community and environment through sustainable practices.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Our Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 font-opensans">
              IVY Sailing Resort is nestled in the beautiful coastal town of Ayvalık, in the Balıkesir province of Turkey. Our prime location offers guests the perfect blend of natural beauty, rich cultural heritage, and modern amenities.
            </p>
            <p className="text-lg mb-4 font-opensans">
              Situated right on the Aegean coast, our resort boasts breathtaking views of the sea and easy access to pristine beaches. The surrounding area is known for its olive groves, historic sites, and charming local villages, providing endless opportunities for exploration and discovery.
            </p>
            <p className="text-lg font-opensans">
              Whether you're looking to relax on the beach, indulge in water sports, or immerse yourself in Turkish culture, our location offers something for everyone.
            </p>
          </div>
          <div>
            <LazyImage
              src="/resort-map.webp"
              lowQualitySrc="/resort-map-low.webp"
              highQualitySrc="/resort-map.webp"
              alt="Map showing IVY Sailing Resort location"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Our Commitment to Sustainability</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-4 font-opensans">
              At IVY Sailing Resort, we are committed to preserving the beautiful environment that surrounds us and supporting our local community. Our sustainability initiatives include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-opensans">
              <li>Energy conservation through the use of solar panels and energy-efficient appliances</li>
              <li>Water management systems to reduce waste and promote conservation</li>
              <li>Reducing food waste through careful planning and composting programs</li>
              <li>Supporting local producers and businesses to reduce our carbon footprint and boost the local economy</li>
              <li>Educating our guests about the local ecosystem and how they can help preserve it</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>Main: +90 266 324 53 00</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>Reservations: +90 549 743 53 00</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>info@ivysailinghotel.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>bilgi@ivysailinghotel.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>Küçükkoy Mah. Açelya Sok. No: 16, Ayvalık/Balıkesir – Türkiye</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16l4-4-4-4-4 4 4 4z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Send Us a Message</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Experience IVY Sailing Resort?</h2>
        <p className="text-lg mb-6 font-opensans">
          Contact us today to learn more about IVY Sailing Resort. We're here to answer all your questions and help you plan your perfect getaway!
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Now
        </Button>
      </section>
    </div>
  )
}

