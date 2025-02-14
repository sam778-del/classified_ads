import { NextResponse } from "next/server"
import db from "@/lib/db"

export async function GET() {
  try {
    const categories = await db.any("SELECT * FROM categories ORDER BY name")
    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, slug } = await request.json()
    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 })
    }

    const newCategory = await db.one("INSERT INTO categories (name, slug) VALUES ($1, $2) RETURNING *", [name, slug])

    return NextResponse.json(newCategory, { status: 201 })
  } catch (error) {
    console.error("Error creating category:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

