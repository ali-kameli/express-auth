const express = require('express');
const { errorHandler, notFoundPage } = require('./utils/errorHandler');
const { allRoutes } = require('./routes/index.routes');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/authtest', {}).then(() => console.log('connected to DB')).catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(allRoutes);
// Error Handling
app.use(errorHandler);
app.use(notFoundPage);


app.listen(3000, () => console.log('server running on port 3000 . . .'))