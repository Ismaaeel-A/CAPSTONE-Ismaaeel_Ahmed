import { connection as db } from "../config/index.js"

class Cart{
    
    getCart(req, res) {
        try {
            const strQry = 
            `SELECT c.userID, c.productID, p.prodName, p.prodBrand, p.price, SUM(c.quantity) AS quantity
            FROM Cart c
            JOIN 
            Products p ON c.productID = p.productID
            WHERE c.userID = ${req.params.id}
            GROUP BY c.userID, c.productID;`

            db.query(strQry, (err, result) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    result: result
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }


    addCart(req, res) {
        try {
            let data = req.body
            const strQry = 
            
                    `
                    INSERT INTO Cart SET ?
                    ON DUPLICATE KEY UPDATE quantity = quantity + 1;
                    `

            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error(`Unable to retrieve cart.`)
                res.json({
                    status: res.statusCode,
                    msg: 'Product added successfully to cart.'

                    
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }


    editCart(req, res) {
        try {
            const { quantity } = req.body;


            const strQry = `UPDATE Cart SET quantity = ? WHERE userID = ${req.params.uid} AND productID = ${req.params.pid};`
            console.log(`${req.params.uid}, ${req.params.pid}, ${req}, ${res} 55`);
            
            db.query(strQry, [quantity], (err) => {
                if (err) throw new Error('Cart update failed.')
                res.json({
                    status: res.statusCode,
                    msg: 'Product successfully updated'
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }


    deleteCart(req, res) {
        try {
            const strQry = `DELETE FROM Cart WHERE userID = ${req.params.uid} AND productID = ${req.params.pid};`

            db.query(strQry, (err) => {
                if (err) throw new Error('Failed to remove item.')
                res.json({
                    status: res.statusCode,
                    msg: "The product has been removed."
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteAllCart(req, res) {
        try {
            const strQry = `DELETE FROM Cart WHERE userID = ${req.params.uid};`

            db.query(strQry, (err) => {
                if (err) throw new Error('Failed to empty cart.')
                res.json({
                    status: res.statusCode,
                    msg: "Cart emptied."
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    }

    export{
        Cart
    }