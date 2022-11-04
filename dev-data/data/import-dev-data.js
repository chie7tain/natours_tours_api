const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');

dotenv.config({ path: './config.env' });
console.log(process.env);
const Tour = require('../../models/tourModel');

const DB = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);
// IMPORT DATA INTO DB
const importDate = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (error) {
    console.log(error);
  }
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (error) {
    console.log(error);
  }
};

console.log(process.argv);
