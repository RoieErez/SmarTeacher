const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connecting DB
connectDB();

//init mid ware
app.use(express.json({ exteended: false }));

app.get('/', (req, res) => {
  res.send('API running');
});

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.POST || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
