const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
dotenv.config({ path: './.env' });

const app = require('./app');

const DB = process.env.DATABASE_URI.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const PORT = process.env.PORT || 3000; // 1) GLOBAL MIDDLEWARES
// 4) START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

