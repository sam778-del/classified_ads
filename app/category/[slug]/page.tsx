import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Link from "next/link"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <aside className="w-full md:w-64 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Price Range</h3>
            <Slider defaultValue={[0, 1000]} max={1000} step={1} className="w-full" />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Sort By</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Location</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full md:w-auto">Apply Filters</Button>
        </aside>

        {/* Listings */}
        <main className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold capitalize">{params.slug.replace("-", " ")}</h1>
            <span className="text-sm text-muted-foreground">245 listings</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <Link key={i} href={`/listing/${i}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={`/placeholder.svg?height=300&width=400`}
                        alt="Listing image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Product Title {i + 1}</h3>
                      <p className="text-lg font-bold">${(99 + i * 50).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">New York, NY</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </main>
      </div>
    </div>
  )
}

