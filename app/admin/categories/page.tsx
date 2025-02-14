"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { useToast } from "@/components/ui/use-toast"

interface Category {
  id: number
  name: string
  slug: string
}

export default function AdminCategoriesPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState({ name: "", slug: "" })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories")
      if (!response.ok) throw new Error("Failed to fetch categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
      toast({
        title: "Error",
        description: "Failed to load categories. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddCategory = async () => {
    if (newCategory.name && newCategory.slug) {
      try {
        const response = await fetch("/api/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCategory),
        })
        if (!response.ok) throw new Error("Failed to add category")
        const addedCategory = await response.json()
        setCategories([...categories, addedCategory])
        setNewCategory({ name: "", slug: "" })
        toast({
          title: "Success",
          description: "Category added successfully.",
        })
      } catch (error) {
        console.error("Error adding category:", error)
        toast({
          title: "Error",
          description: "Failed to add category. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const handleDeleteCategory = async (id: number) => {
    try {
      const response = await fetch(`/api/categories/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete category")
      setCategories(categories.filter((category) => category.id !== id))
      toast({
        title: "Success",
        description: "Category deleted successfully.",
      })
    } catch (error) {
      console.error("Error deleting category:", error)
      toast({
        title: "Error",
        description: "Failed to delete category. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">{t("admin.categories.title")}</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-5">{t("admin.categories.addNew")}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("admin.categories.addNewTitle")}</DialogTitle>
            <DialogDescription>{t("admin.categories.addNewDescription")}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t("admin.categories.name")}
              </Label>
              <Input
                id="name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="slug" className="text-right">
                {t("admin.categories.slug")}
              </Label>
              <Input
                id="slug"
                value={newCategory.slug}
                onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddCategory}>
              {t("admin.categories.add")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("admin.categories.name")}</TableHead>
            <TableHead>{t("admin.categories.slug")}</TableHead>
            <TableHead>{t("admin.categories.actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>{category.slug}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteCategory(category.id)}>
                  {t("admin.categories.delete")}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

