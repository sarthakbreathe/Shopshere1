const Product = require('../models/Product');

const createProduct = async (req, res) => {
    const { name, description, price, stock,image } = req.body;
    // const imageFile = req.files?.image;

    try {
        if (!name || !description || !price || !stock) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let imageUrl = image;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                upload_preset: 'eccoh7rx'
            });
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            stock,
            image: imageUrl,
        });

        await product.save();
        return res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ message: 'Error creating product', error });
    }
};

module.exports = {
    createProduct
};












// const Product = require('../Models/product'); 
// const cloudinary = require('cloudinary').v2; 

// const createProduct = async (req, res) => {
//     const { name, description, price,image,createdAt,stock } = req.body;

//     try {
//         const productExists = await Product.findOne({ name });
//         if (productExists) {
//             return res.status(400).json({ message: "Product already exists" });
//         }

//         let updatedProductImage = req.body.image;

//         if (req.file) {
//             const result = await cloudinary.uploader.upload(req.file.path, {
//               upload_preset: 'eccoh7rx' 
//             });
//             updatedProductImage = result.secure_url; 
//         }

//         const product = await Product.create({
//             name,
//             description,
//             price,
//             image: updatedProductImage,
//             image,
//             stock
//         });

//         return res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//         console.error("ERROR:", error);
//         return res.status(500).json({ message: "Server error", error });
//     }
// };

// module.exports = { createProduct };

// const Product = require('../Models/product'); // Import the Product model
// const cloudinary = require('cloudinary').v2; // Import Cloudinary

// const createProduct = async (req, res) => {
//     const { name, description, price,image,createdAt,stock } = req.body;

//     try {
//         const productExists = await Product.findOne({ name });
//         if (productExists) {
//             return res.status(400).json({ message: "Product already exists" });
//         }

//         let updatedProductImage = req.body.image;

//         if (req.file) {
//             const result = await cloudinary.uploader.upload(req.file.path, {
//               upload_preset: 'eccoh7rx' 
//             });
//             updatedProductImage = result.secure_url;
//         }

//         const product = await Product.create({
//             name,
//             description,
//             price,
//             image: updatedProductImage,
//             image,
//             stock
//         });

//         return res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//         console.error("ERROR:", error);
//         return res.status(500).json({ message: "Server error", error });
//     }
// };

// module.exports = { createProduct };


// const Product = require('../Models/product'); 
// const cloudinary = require('cloudinary').v2;

// const createProduct = async (req, res) => {
//     const { name, description, price, stock,image } = req.body; // Removed 'image' and 'createdAt' from destructuring

//     try {
//         const productExists = await Product.findOne({ name });
//         if (productExists) {
//             console.error(`Product already exists: ${name}`); // Log product existence error
//             return res.status(400).json({ message: "Product already exists" });
//         }

//         let updatedProductImage=image;

//         if (req.file) {
//             try {
//                 const result = await cloudinary.uploader.upload(req.file.path, {
//                     upload_preset: 'eccoh7rx' 
//                 });
//                 updatedProductImage = result.secure_url;
//                 console.log(`Image uploaded successfully: ${updatedProductImage}`); 
//             } catch (uploadError) {
//                 console.error("Error uploading image to Cloudinary:", uploadError); 
//                 return res.status(500).json({ message: "Error uploading image", error: uploadError });
//             }
//         } else {
//             updatedProductImage = req.body.image; 
//         }

//         const product = await Product.create({
//             name,
//             description,
//             price,
//             image: updatedProductImage,
//             stock
//         });

//         console.log(`Product created successfully: ${product}`); 
//         return res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//         console.error("ERROR:", error);
//         return res.status(500).json({ message: "Server error", error });
//     }
// };

// module.exports = { createProduct };

// const Product = require('../models/Product');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// // Function to create a new product
// const createProduct = async (req, res) => {
//     try {
//         console.log(req.body); // Log the request body to debug
//         const { name, description, price, stock, image } = req.body;

//         // Validation checks
//         if (!name || !description || !price || !stock) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Proceed with product creation
//         const product = new Product({ name, description, price, stock, image });

//         // Save the product
//         await product.save();

//         // Send success response
//         return res.status(201).json({ message: 'Product created successfully' });
//     } catch (error) {
//         console.error('Error creating product:', error); // Log the error for debugging
//         return res.status(500).json({ message: 'Error creating product', error });
//     }
// };

// module.exports = { createProduct,upload };


// const Product = require('../models/Product');
// const cloudinary = require('cloudinary').v2;

// // Function to create a new product
// const createProduct = async (req, res) => {
//     try {
//         const { name, description, price, stock } = req.body;
//         const imageFile = req.files?.image; // Assuming you're sending the file as 'image' in FormData

//         // Validation checks
//         if (!name || !description || !price || !stock) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         let imageUrl = null;

//         // Upload the image to Cloudinary if the file exists
//         if (imageFile) {
//             const result = await cloudinary.uploader.upload(imageFile.tempFilePath, {
//                 folder: 'products', // Optional: specify a folder in Cloudinary
//             });
//             imageUrl = result.secure_url; // Store the Cloudinary URL of the uploaded image
//         }

//         // Create the product with the Cloudinary image URL
//         const product = new Product({
//             name,
//             description,
//             price,
//             stock,
//             image: imageUrl, // Use the Cloudinary URL
//         });

//         await product.save();
//         return res.status(201).json({ message: 'Product created successfully' });
//     } catch (error) {
//         console.error('Error creating product:', error);
//         return res.status(500).json({ message: 'Error creating product', error });
//     }
// };

// module.exports = {
//     createProduct
// };


// const { image } = require('../cloudinary');