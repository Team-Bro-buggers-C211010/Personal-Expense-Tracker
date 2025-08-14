import express from 'express';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});