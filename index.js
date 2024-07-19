import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Database/dbConfig.js';
import stuRouter from './Routers/student.router.js';
import mentRouter from './Routers/mentor.router.js' 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json({Message:"App is working fine"});
});

connectDb();
  
app.use('/api/student', stuRouter);
app.use('/api/mentor', mentRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})