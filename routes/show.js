import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
  try {
    const shows = await prisma.show.findMany()
    res.json(shows)
  } catch (error) {
    console.error("Errore nel recupero degli spettacoli:", error)
    res.status(500).json({ message: "Errore nel server" })
  }
})

export default router