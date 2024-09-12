import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'

const cartRouter = express.Router()

cartRouter.use(bodyParser.json())

cartRouter.get('/:id', (req,res) => {
    cart.getCart(req,res)
})
cartRouter.post('/add', (req,res) => {
    cart.addCart(req,res)
})
cartRouter.patch('/edit/:uid/:pid', (req,res) => {
    cart.editCart(req,res)
})
cartRouter.delete('/delete/:uid/:pid', (req,res) => {
    cart.deleteCart(req,res)
})
cartRouter.delete('/delete/:uid', (req,res) => {
    cart.deleteAllCart(req,res)
})

export{
    cartRouter,
    express
}