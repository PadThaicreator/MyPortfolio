
import express , {Request , Response} from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import projectRoute from './routes/project.route'
import mailRouter from './routes/email.route'
import cors from 'cors';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {

    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI is not defined in .env');
    }

    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  }
}


connectDB()

app.get('/', (req : Request, res : Response) => {
  res.send('Hello from Express + MongoDB!')
})

app.use('/project' , projectRoute)
app.use('/mail' , mailRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
