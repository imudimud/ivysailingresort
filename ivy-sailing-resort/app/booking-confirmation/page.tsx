import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingConfirmation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
          <CardDescription>Thank you for choosing Ivy Sailing Resort</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">Your booking has been successfully confirmed!</p>
          <p className="mb-2">A confirmation email has been sent to your provided email address with all the details of your reservation.</p>
          <p className="mb-4">If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

