const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { loginUser } = require('../Ecombackend/Controllers/loginuser');
const userRoutes = require('./Routes/user');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT||5000
const bodyParser = require('body-parser');
const router = express.Router();
// const PORT = 8000;
// dotenv.config();
// const path = require('path');
const { connectToMongoDB } = require('./connect');

// Connect to MongoDB
connectToMongoDB(process.env.MONGO_URL);

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use('/api', userRoutes);
router.post('/login', loginUser);
router.get('/login', loginUser);
// app.use('/api/admin', userRoutes);
// app.use('/api/single', userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on Port=${PORT}`);
});
