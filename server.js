import express from 'express'
import productRoute from'./src/product.js'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('home')
})
app.use('/products',productRoute)
app.listen(3000, () => {
    console.log('connected');
})