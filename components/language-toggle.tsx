"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="w-[40px] px-0"
    >
      {language === "en" ? "FR" : "EN"}
    </Button>
  )
}

