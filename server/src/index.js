const app = require('./app.js')
const server = app.listen(process.env.PORT || 5000, ()=>console.log("Listening"));


