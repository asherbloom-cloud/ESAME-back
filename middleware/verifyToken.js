import jwt from "jsonwebtoken"


export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log("authHeader:", authHeader)

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token mancante o malformato" })
  }

  const token = authHeader.split(" ")[1]
  console.log("TOKEN ricevuto:", token)

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // contiene ad esempio: { id, email, ... }
    next()
  } catch (error) {
    return res.status(401).json({ message: "Token non valido o scaduto" })
  }
}