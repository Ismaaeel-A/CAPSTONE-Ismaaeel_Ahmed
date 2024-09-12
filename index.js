import path from 'path'
import cors from 'cors' 
import { productRouter } from './controller/ProductController.js'
import { userRouter, express } from './controller/UserController.js'
import { errorHandling } from './middleware/ErrorHandling.js'
import { cartRouter } from './controller/CartController.js'

//CREATE AN EXPRESS APP
const app = express()
const port = +process.env.PORT || 4000

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
}) 

app.use('/users', userRouter)
app.use('/products',productRouter)
app.use('/cart', cartRouter)
app.use( express.static('./static'), express.json(), express.urlencoded({
    extended: true
    }),
    cors()
)

//ENDPOINT
app.get('^/$|/Home', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req, res) => {
    res.json({
        status: 404,
        err: 'Resource not found.'
    })
})

app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})