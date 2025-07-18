
import express from 'express'

import dotenv from 'dotenv'

import mailRouter from './routes/email.route.js'
import cors from 'cors';

const app = express();

dotenv.config();
app.use(express.json());
app.use({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});




app.use('/mail' , mailRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
