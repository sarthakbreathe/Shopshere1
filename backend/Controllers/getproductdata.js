const Product = require('../models/Product');
// const product = require("../models/product");
const getProductdata = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const response={
            name:product.name,
            description:product.description,
            price:product.price,
            image:product.image,
            stock:product.stock
        }

        // console.log(product);
        return res.status(200).json(response);
        
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { getProductdata};
