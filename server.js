const express = require('express')
const PORT = process.env.PORT || 3002
const app = express()
const cors = require('cors/lib/server.js');

const axios = require('axios');

console.log(axios.isCancel('something'));

//Middleware
app.use(cors());
app.use(express.json());

// app.use(
//   cors({
//     origin: `http://localhost:${PORT}/`,
//     methods: ['GET', 'POST'],
//   })
// );


//Controllers

const productsController = require(`./BackEnd/Controllers/productController.js`)


//Routes
app.get('/', (req, res) => {
  res.send('working')
})
app.get('/home')
app.get('/products', productsController.getProducts)
app.get('/products/department/:department', productsController.getDepartment) 
app.get('/products/id/:id', productsController.getProduct) 


app.listen(PORT,() => console.log(`Server running on ${PORT}`))