import express from 'express'
import prisma from '../prisma/prisma/prismaclient.js'

const router = express.Router()

// Route: GET /api/attraction-map/all
// Descrizione: restituisce tutte le attrazioni della mappa
router.get('/', async (req, res) => {
  try {
    const data = await prisma.attractionMap.findMany()
    res.json(data)
  } catch (error) {
    console.error('Errore nel recupero attraction map:', error)
    res.status(500).json({ error: 'Errore interno del server' })
  }
})

export default router