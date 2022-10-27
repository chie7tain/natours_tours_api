const app = require('./app');
console.log(app.get('env')); 
const PORT = process.env.PORT || 3000; // 1) GLOBAL MIDDLEWARES
// 4) START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
