const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = process.env.PORT || 3000; // 1) GLOBAL MIDDLEWARES
// 4) START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
