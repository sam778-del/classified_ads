"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, LogOut } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MainNav() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    // Check if user is logged in
    const userSession = document.cookie.includes("user_session=true")
    const adminSession = document.cookie.includes("admin_session=true")
    setIsLoggedIn(userSession || adminSession)
  }, [])

  const handleSignOut = () => {
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
    setIsLoggedIn(false)
    router.push("/auth/signin")
  }

  return (
    <div className="w-full border-b bg-background">
      <div className="container flex flex-col">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-2">
                  <div className="px-4 py-2">
                    <Input placeholder="Search ads..." className="w-full" startIcon={<Search className="h-4 w-4" />} />
                  </div>
                  <div className="px-2 py-2">
                    <Button className="w-full mb-2" variant="default">
                      Post an ad
                    </Button>
                  </div>
                  <nav className="space-y-1">
                    <SheetClose asChild>
                      <Link
                        href="/category/real-estate"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Real estate
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/category/vehicles"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Vehicles
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/category/fashion"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Fashion
                      </Link>
                    </SheetClose>
                    <div className="border-t my-2" />
                    <SheetClose asChild>
                      <Link
                        href="/saved"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Saved
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/messages"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Messages
                      </Link>
                    </SheetClose>
                    <div className="border-t my-2" />
                    <div className="px-4 py-2 flex items-center justify-between">
                      <span className="text-sm">Language</span>
                      <LanguageToggle />
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 font-bold text-xl sm:text-2xl text-green-600">
              ClassifiedAds
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center gap-4 px-8">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search ads..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="default" className="hidden sm:flex bg-green-600 hover:bg-green-700">
              Post an ad
            </Button>
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/saved" className="text-sm font-medium hover:text-green-600">
                Saved
              </Link>
              <Link href="/messages" className="text-sm font-medium hover:text-green-600">
                Messages
              </Link>
              {isLoggedIn ? (
                <Button variant="ghost" className="font-medium" onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              ) : (
                <Button variant="ghost" className="font-medium" onClick={() => router.push("/auth/signin")}>
                  Sign in
                </Button>
              )}
            </div>
            <div className="hidden sm:flex">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Mobile Search (shown below header on mobile) */}
        <div className="md:hidden px-4 py-2 -mx-4 border-t">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search ads..." className="pl-10 w-full" />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="hidden lg:flex h-12 items-center space-x-4">
          <Link
            href="/category/real-estate"
            className="flex items-center gap-2 text-sm font-medium hover:text-green-600"
          >
            Real estate
          </Link>
          <Link href="/category/vehicles" className="flex items-center gap-2 text-sm font-medium hover:text-green-600">
            Vehicles
          </Link>
          <Link href="/category/fashion" className="flex items-center gap-2 text-sm font-medium hover:text-green-600">
            Fashion
          </Link>
        </div>
      </div>
    </div>
  )
}

