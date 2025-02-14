import type { IDatabase } from "pg-promise"

export async function up(db: IDatabase<{}>) {
  await db.none(`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

export async function down(db: IDatabase<{}>) {
  await db.none("DROP TABLE IF EXISTS categories")
}

