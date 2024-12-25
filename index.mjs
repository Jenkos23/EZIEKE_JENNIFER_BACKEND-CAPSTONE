import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs'
import fashionRoutes from './routes/fashionRoutes.mjs'
import weatherRoutes from './routes/weatherRoutes.mjs'
import dotenv from 'dotenv';
dotenv.config();




const app = express();
const PORT = process.env.PORT || 3000;


// connect to environment variables in production
const mongodbURI = process.env.MONGODB_URI;


//MiddleWare
app.use(cors());
app.use(express.json());


// MongoDB connection
const connectToDatabase = async () => {
    try {
        if (!mongodbURI) {
            throw new Error('MongoDB URI is not defined!');
        }
        await mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the application if connection fails
    }
};

connectToDatabase();

app.use('/users', userRoutes)
app.use('/fashion', fashionRoutes)
app.use('/weather', weatherRoutes)















//Confirm if the server is listening
app.get('/', (req, res) => {
    res.send("Greetings from the backend! let's create our Fashion website")
}
)







app.listen(PORT, () =>{
    console.log(`Serving is running on PORT: ${PORT}`)
});