import pgPromise from "pg-promise"
import * as path from "path"
import * as fs from "fs"

const pgp = pgPromise()
const db = pgp(process.env.DATABASE_URL!)

async function runMigration(filename: string) {
  const migration = require(path.join(__dirname, "..", "migrations", filename))
  console.log(`Running migration: ${filename}`)
  await migration.up(db)
  console.log(`Completed migration: ${filename}`)
}

async function migrate() {
  const migrationFiles = fs
    .readdirSync(path.join(__dirname, "..", "migrations"))
    .filter((file) => file.endsWith(".ts") || file.endsWith(".js"))
    .sort()

  for (const file of migrationFiles) {
    await runMigration(file)
  }

  await pgp.end()
}

migrate().catch(console.error)

