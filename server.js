const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

// Load env variables
dotenv.config({ path: './config.env' });

// Connect to MongoDB
const url = process.env.MONGODB_URL
mongoose.connect(url)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log("Not Connected"));

// Middleware


// Routes   
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/user', require('./routes/userRoute'));

// Start the server
const port = process.env.PORT
app.listen(port, () => console.log(`Server : http://localhost:${port}`));