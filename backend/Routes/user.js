const express =require('express')
const multer = require('multer');
const { createUser, } = require('../Controllers/createuser');
const { loginUser } = require('../Controllers/loginuser');
const {validateToken, authjs}= require('../Services/authentication');
const { getAllUsers } = require('../Controllers/getuser');
const { createProduct, upload } = require('../Controllers/addproduct');
const { getProduct } = require('../Controllers/getproduct');
const { getProfile } = require('../Controllers/getpersonaldata');
const { getProductdata } = require('../Controllers/getproductdata');
const { getProductTable } = require('../Controllers/getproducttable');
const router=express.Router()


router.post('/register', createUser);
router.get('/users', getAllUsers);
router.get('/getproduct', getProduct);
router.get('/getproducttable', getProductTable);
router.post('/login', loginUser);
router.get('/login', loginUser);
router.get('/checkauth',authjs)
router.get('/getprofile/:id',getProfile)
router.get('/getproductdata/:id',getProductdata)

router.post('/products',createProduct);


router.route('/').get((req,res)=>{
    res.status(200).send("Welcome")
})
module.exports=router 