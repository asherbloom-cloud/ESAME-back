import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

// GET tutte le attrazioni
router.get("/", async (req, res) => {
  try {
    const attractions = await prisma.attraction.findMany()
    res.json(attractions)
  } catch (error) {
    console.error("Errore nel recupero delle attrazioni:", error)
    res.status(500).json({ error: "Errore nel recupero delle attrazioni" })
  }
})

export default router