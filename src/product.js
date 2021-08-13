import express from 'express'

const products = [
    { id: 0, name: 'Fosil', price: 9999 },
    { id: 1, name: 'Diesel', price: 14999 },
    { id: 2, name: 'Mi', price: 6799 },
    { id: 3, name: 'Rolex', price: 5499 },
    { id: 4, name: 'Casio', price: 599 },
    { id: 5, name: 'Sonata', price: 899 },
    { id: 6, name: 'Timex', price: 199 },
    { id: 7, name: 'Titan', price: 1599 },
    { id: 8, name: 'Fastrack', price: 1490 }
]
// const a = Object.freeze({})
const route = express.Router()
//  '/product/'
route.get('/', (req, res) => {
    res.status(200).send(products)
})
route.get('/:id', (req, res) => {
    const id = req.params.id
    // validation
    const number = /[0-9]/
    if (!number.exec(id)) return res.status(400).send({ error: 'enter number' })
    const p = products.find(item => item.id == id)
    if (p == null) return res.send({ error: 'not found' })
    return res.send(p)
})
route.post('/', (req, res) => {
    // const {id,price,name} = req.body
    const product = req.body
    products.push(product)
    res.send(product)
})

export default route