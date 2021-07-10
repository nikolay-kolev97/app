
import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import {isAuth, isAdmin} from '../utils.js';

const productRouter = express.Router();

//api for sending list of products to front end
productRouter.get('/',expressAsyncHandler(async(req,res)=>{
    
    const products = await Product.find({});
    res.send(products);
}));


productRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
);

// api for product:id
productRouter.get('/:id', expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(400).send({message: 'Product Not Found'});
    }
}));

productRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async(req,res)=>{
    const product = new Product({
        name: 'sample name'+ Date.now(),
        image: '/images/p1.jpg',
        pharmacy: 'sample pharmacy',
        price: 0,
        category: 'sample category',
        brand: 'sample brand',
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        description: 'sample description'
    });
    const createdProduct = await product.save();
    res.send({message: 'Product Created', product: createdProduct});
}));

// update product api
productRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async(req,res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(product){
        product.name=req.body.name;
        product.price=req.body.price;
        product.image=req.body.image;
        product.category=req.body.category;
        product.pharmacy=req.body.pharmacy;
        product.brand=req.body.brand;
        product.countInStock=req.body.countInStock;
        product.description=req.body.description;
        const updatedProduct = await product.save();
        res.send({message: 'Product Updated', product: updatedProduct});
    }else{
        res.status.apply(404).send({message:'Product Not Found'});
    }
})
);

//api delete product
productRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        const deleteProduct = await product.remove();
        res.send({message:'Product deleted', product: deleteProduct});
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
}));

export default productRouter;