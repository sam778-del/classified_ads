"use client"

import Image from "next/image"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Apartments", image: "/placeholder.svg?height=200&width=300", href: "/category/apartments" },
  { name: "Houses", image: "/placeholder.svg?height=200&width=300", href: "/category/houses" },
  { name: "Rooms", image: "/placeholder.svg?height=200&width=300", href: "/category/rooms" },
  { name: "Student Housing", image: "/placeholder.svg?height=200&width=300", href: "/category/student-housing" },
  { name: "Short-term Rentals", image: "/placeholder.svg?height=200&width=300", href: "/category/short-term" },
]

export default function TopCategories() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Top categories</h2>
      <div className="relative">
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="snap-start shrink-0 first:pl-0 last:pr-0">
              <Card className="w-[250px] sm:w-[300px] overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

