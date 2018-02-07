import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRouter from './Routes/bookRouter';
const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect(process.env.DB_ADDRESS);

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/Books', bookRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

