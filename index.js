import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

import authRouter from './routes/auth.js'
import plannerRoutes from './routes/planner.js'
import ticketsRouter from './routes/tickets.js'
import showRouter from "./routes/show.js"
import attractionsRouter from './routes/attractions.js'
import attractionMapRoutes from './routes/attractionMap.js'
import showMapRoutes from './routes/showMap.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/planner', plannerRoutes)
app.use('/api/tickets', ticketsRouter)
app.use("/api/shows", showRouter)
app.use('/api/attractions', attractionsRouter)
app.use('/api/attraction-map', attractionMapRoutes)
app.use('/api/show-map', showMapRoutes)

// ✅ ROTTA METEO
app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'Rome'
  const apiKey = process.env.OPENWEATHER_KEY

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
    )
    const data = await response.json()

    if (!response.ok) {
      return res.status(400).json({ message: data.message || 'Errore nella richiesta meteo' })
    }

    res.json(data)
  } catch (error) {
    console.error('Errore nella chiamata meteo:', error)
    res.status(500).json({ message: 'Errore interno del server' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`✅ Server avviato sulla porta ${PORT}`)
})