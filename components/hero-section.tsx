"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Search, MapPin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const featuredCategories = [
  { name: "Apartments", icon: "🏢", color: "bg-blue-100" },
  { name: "Houses", icon: "🏠", color: "bg-green-100" },
  { name: "Rooms", icon: "🛏️", color: "bg-yellow-100" },
  { name: "Student Housing", icon: "🎓", color: "bg-purple-100" },
  { name: "Short-term Rentals", icon: "🏖️", color: "bg-red-100" },
  { name: "Shared Living", icon: "👥", color: "bg-pink-100" },
]

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-lg lg:text-xl">{t("hero.subtitle")}</p>
            </div>

            <div className="space-y-4 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder={t("hero.searchPlaceholder")} className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <SelectValue placeholder={t("hero.locationPlaceholder")} />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paris">Paris</SelectItem>
                    <SelectItem value="lyon">Lyon</SelectItem>
                    <SelectItem value="marseille">Marseille</SelectItem>
                    <SelectItem value="bordeaux">Bordeaux</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full sm:w-auto">{t("hero.searchButton")}</Button>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {t("hero.popularSearches")}
              {["Apartments", "Houses", "Rooms", "Furnished", "Short-term"].map((item) => (
                <button key={item} className="hover:text-primary transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <Image
              src="/placeholder.svg?height=400&width=600&text=Featured+Rental"
              alt="Featured rental"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6">{t("categories.title")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`${category.color} rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm">{category.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              {t("categories.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

