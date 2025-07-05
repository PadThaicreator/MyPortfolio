// server.js หรือ index.js
import express from 'express'
import mongoose from 'mongoose'

const app = express()

// ตัวอย่าง URL ของ MongoDB (เช่น MongoDB Atlas หรือ Local)
const mongoURI = 'mongodb://localhost:27017/mydatabase' // เปลี่ยนชื่อ mydatabase ตามต้องการ

// ฟังก์ชันเชื่อมต่อ MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  }
}


connectDB()

app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
