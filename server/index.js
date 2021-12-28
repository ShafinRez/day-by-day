import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/users.js';

const app = express();

app.use('/users', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended:true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended:true }));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.jgntx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Server running on port: ${PORT}`)})