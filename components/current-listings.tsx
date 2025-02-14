import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const listings = [
  {
    id: 1,
    title: "Modern Studio in City Center",
    price: "1200",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "John D",
      rating: 4.7,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 2,
    title: "Cozy 2BR Apartment with Balcony",
    price: "1500",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Sarah M",
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    title: "Spacious Family Home with Garden",
    price: "2200",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Mike R",
      rating: 4.5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 4,
    title: "Student Room near University",
    price: "600",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Emma L",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function CurrentListings() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Latest Listings</h2>
        <Link href="/listings" className="text-sm text-muted-foreground hover:underline">
          See more listings →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((listing) => (
          <Link key={listing.id} href={`/listing/${listing.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2]">
                  <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{listing.title}</h3>
                    <p className="text-lg font-bold">${listing.price}/month</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={listing.seller.avatar} />
                      <AvatarFallback>{listing.seller.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-1 text-sm">
                      <span>{listing.seller.name}</span>
                      <span className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        {listing.seller.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

