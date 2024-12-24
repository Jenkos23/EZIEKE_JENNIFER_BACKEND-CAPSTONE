import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs'
import dotenv from 'dotenv';
dotenv.config();




const app = express();
const PORT = process.env.PORT || 3000;


// connect to environment variables in production
const mongodbURI = process.env.MONGODB_URI;


//MiddleWare
app.use(cors());
app.use(express.json());


//MongoDB connection
await mongoose.connect(mongodbURI);
console.log('Connected to MongoDB successfully!');


app.use('/users', userRoutes)















//Confirm if the server is listening
app.get('/', (req, res) => {
    res.send("Greetings from the backend! let's create our Fashion website")
}
)







app.listen(PORT, () =>{
    console.log(`Serving is running on PORT: ${PORT}`)
});