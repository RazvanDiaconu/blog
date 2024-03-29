const express=require('express')
const Article=require('./../models/article')
const router=express.Router()



router.get('/new',(request,response)=>{
    response.render('articles/new',{article: new Article()
    })
}) 

router.get('/:id',async(request,response)=>{
    const article= await Article.findById(request.params.id)
    if(article==null) response.redirect('/')
response.render('articles/show',{article:article})
})
 
router.post('/',async (request,response)=>{
    let article=new Article({
        title:request.body.title,
        description:request.body.description,
        markdown:request.body.markdown

    })  
    try{ 
     article =await article.save()
     response.redirect(`/articles/${article.id}`)
    }catch(e){ 
        console.log(e)
        response.render('articles/new',{article:article})
    }
   })
module.exports=router 