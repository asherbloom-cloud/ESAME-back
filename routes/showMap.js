import express from 'express'
import prisma from '../prisma/prisma/prismaclient.js'

const router = express.Router()

// Route: GET /api/show-map/all
// Descrizione: restituisce tutti gli spettacoli della mappa
router.get('/', async (req, res) => {
  try {
    const data = await prisma.showMap.findMany()
    res.json(data)
  } catch (error) {
    console.error('Errore nel recupero show map:', error)
    res.status(500).json({ error: 'Errore interno del server' })
  }
})

export default router