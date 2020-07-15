const express=require('express')
const { response } = require('express')
const router=express.Router()


router.get('/new',(request,response)=>{
    response.render('articles/new')
})
module.exports=router
router.post('/',(request,response)=>{
    
})