import HeroSection from "@/components/hero-section"
import TrendingSection from "@/components/trending-section"
import TopCategories from "@/components/top-categories"
import CurrentListings from "@/components/current-listings"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <HeroSection />
        <TrendingSection />
        <TopCategories />
        <CurrentListings />
      </main>
      <Footer />
    </div>
  )
}

