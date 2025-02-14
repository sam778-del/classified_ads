import { NextResponse } from "next/server"
import db from "@/lib/db"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const result = await db.result("DELETE FROM categories WHERE id = $1", [id])
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
    return NextResponse.json({ message: "Category deleted successfully" })
  } catch (error) {
    console.error("Error deleting category:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { name, slug } = await request.json()
    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 })
    }

    const updatedCategory = await db.oneOrNone(
      "UPDATE categories SET name = $1, slug = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
      [name, slug, id],
    )

    if (!updatedCategory) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(updatedCategory)
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

