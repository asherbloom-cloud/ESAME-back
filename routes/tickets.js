import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// Salvataggio biglietto
router.post('/save', async (req, res) => {
  const { type, quantity, date, code, userId } = req.body

  if (!type || !quantity || !date || !code || !userId) {
    return res.status(400).json({ message: "Dati mancanti" })
  }

  try {
    const ticket = await prisma.ticket.create({
      data: {
        type,
        quantity,
        date,
        code,
        userId,
      },
    })

    res.status(201).json({ message: "Biglietto salvato con successo", ticket })
  } catch (error) {
    console.error("Errore durante il salvataggio del biglietto:", error)
    res.status(500).json({ message: "Errore del server" })
  }
})

// Ottieni tutti i biglietti per un dato userId
router.get('/user/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId)
  
    if (!userId) {
      return res.status(400).json({ message: "userId mancante o non valido" })
    }
  
    try {
      const tickets = await prisma.ticket.findMany({
        where: { userId },
      })
  
      res.status(200).json(tickets)
    } catch (error) {
      console.error("Errore nel recupero dei biglietti:", error)
      res.status(500).json({ message: "Errore del server" })
    }
  })

export default router