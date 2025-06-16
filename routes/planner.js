import express from 'express'
import prisma from '../prisma/prisma/prismaclient.js'

const router = express.Router()

// Salva o aggiorna planner per utente e data
router.post('/save', async (req, res) => {
  const { name, date, items, userId } = req.body

  if (!name || !date || !items || !userId) {
    return res.status(400).json({ message: "Dati mancanti" })
  }

  try {
    // Controlla se l'utente esiste
    const userExists = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!userExists) {
      return res.status(404).json({ message: "Utente non trovato" })
    }

    // Cerca se esiste già un planner per questo utente e data (usiamo la stringa esatta 'YYYY-MM-DD')
    const existingPlanner = await prisma.planner.findFirst({
      where: {
        userId,
        date,
      },
    })

    let planner

    if (existingPlanner) {
      // 🔄 Aggiorna planner esistente
      planner = await prisma.planner.update({
        where: { id: existingPlanner.id },
        data: {
          name,
          items,
        },
      })
    } else {
      // ➕ Crea nuovo planner
      planner = await prisma.planner.create({
        data: {
          name,
          date, // è una stringa nel formato YYYY-MM-DD
          items,
          userId,
        },
      })
    }


    res.status(200).json({ message: "Planner salvato", planner })
  } catch (error) {
    console.error("Errore planner:", error)
    res.status(500).json({ message: "Errore durante il salvataggio" })
  }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
  
    if (!id) {
      return res.status(400).json({ message: "ID mancante" })
    }
  
    try {
      const planner = await prisma.planner.findUnique({
        where: { id: parseInt(id) },
      })
  
      if (!planner) {
        return res.status(404).json({ message: "Planner non trovato" })
      }
  
      await prisma.planner.delete({
        where: { id: parseInt(id) },
      })
  
      res.status(200).json({ message: "Planner eliminato con successo" })
    } catch (error) {
      console.error("Errore durante l'eliminazione del planner:", error)
      res.status(500).json({ message: "Errore del server durante l'eliminazione" })
    }
  })

  // ✅ BACKEND: Aggiungi questa nuova route in planner.js
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params
  
    try {
      const planner = await prisma.planner.findFirst({
        where: { userId: parseInt(userId) },
        orderBy: { createdAt: 'desc' }, // opzionale: prendi l'ultimo planner
      })
  
      if (!planner) {
        return res.status(404).json({ message: 'Nessun planner trovato' })
      }
  
      res.status(200).json({ planner })
    } catch (error) {
      console.error('Errore nel recupero del planner:', error)
      res.status(500).json({ message: 'Errore del server' })
    }
  })
  


// ✅ Esporta come default
export default router