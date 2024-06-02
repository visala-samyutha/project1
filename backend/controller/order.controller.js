const orderModel = require('../model/order.model');
const productmodel=require('../model/product.model');
const cartModel=require('../model/cart.model')
async function enter(req, res) {
    try {
        const { userId, orderId, productName, quantity, totalPrice, status, price } = req.body;
        const order = await orderModel.create({
            userId, orderId, productName, quantity, totalPrice, status, price
        });
        res.status(200).json(order);
    } catch (err) {
        res.status(404).json({ "message": "Invalid Order" });
    }
}
async function getUserProducts(req, res) {
    try {
        const userId = req.params.userId;
        const orders = await orderModel.findOne({ userId }).exec();
        res.json(orders.items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function placeOrder(req,res){
    // const {userId}=req.body
    const userId = req.params.userId;
    console.log(userId)
    try{
        const orders=new orderModel({ userId, items: [] });
        const cartItems=await cartModel.findOne({userId})
        if(!cartItems){
                return res.json({message:"cart is empty"})
        }
        console.log(cartItems)
        var totalPrice=0
            cartItems.items.forEach(item => {
                console.log(item)
                const { imageUrl,productId, productName, quantity, price } = item;
                orders.items.push({
                    imageUrl,
                    productId,
                    productName,
                    quantity,
                    price,
                    status: "order placed"
                });
                totalPrice+=quantity*price
            });
            orders.total=totalPrice
        await orders.save();
        res.status(200).json({message:"order placed successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}
async function directOrder(req, res) {
    const { userId, productId } = req.params;
    const quantity=1;
    console.log(userId);
    console.log(productId);
    
    try {
        const orders = new orderModel({ userId, items: [] });
        const product = await productmodel.findById(productId);
        console.log(product)
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const { imageUrl,productName, price } = product;
        orders.items.push({
            imageUrl,
            productId:product._id,
            productName,
            quantity: quantity || 1,
            price,
            status: "order placed"
        });
        orders.total = price * (quantity || 1); 
        await orders.save();
        res.json({ message: "Order placed successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error in placing order", error: err.message });
    }
}


module.exports = { enter, getUserProducts, placeOrder,directOrder};