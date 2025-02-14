import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const trendingItems = [
  {
    title: "Cozy Studio Apartments",
    image: "/placeholder.svg?height=200&width=300",
    href: "/trending/studios",
  },
  {
    title: "Luxury Penthouses with Views",
    image: "/placeholder.svg?height=200&width=300",
    href: "/trending/penthouses",
  },
  {
    title: "Family-Friendly Suburban Homes",
    image: "/placeholder.svg?height=200&width=300",
    href: "/trending/suburban",
  },
  {
    title: "Modern Lofts in the City Center",
    image: "/placeholder.svg?height=200&width=300",
    href: "/trending/lofts",
  },
]

export default function TrendingSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Trending right now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2]">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

