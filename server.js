const path = require('path');
const express = require('express');
const fileupload = require('express-fileupload');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './config/config.env' });

// Body parser
app.use(express.json());

//File uploade
app.use(fileupload());

// Set security headers
app.use(helmet());

// Enable CORS
app.use(cors());

// Define Routes
app.use('/images', express.static(__dirname + '/images'));
app.use('/api/upload', require('./routes/api/upload'));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/build/index.html'));
//     });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
