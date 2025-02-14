import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClassifiedAds",
  description: "Your trusted marketplace for buying and selling",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <MainNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

