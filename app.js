const express = require('express');
const app = express();
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const PORT = process.env.PORT || 3000;

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
