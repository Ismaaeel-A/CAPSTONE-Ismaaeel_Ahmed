import { Products } from './Products.js'
import { Users } from './Users.js'
import { Cart } from './cart.js'
const users = new Users()
const products = new Products()
const cart = new Cart()

export{
    users, 
    products,
    cart
}