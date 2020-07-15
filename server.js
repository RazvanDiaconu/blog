const express= require('express')
const app=express()
const articleRouter=require('./routes/articles')
app.set('view engine','ejs')
app.use('/articles',articleRouter)
const articles=[{
    title:'test',
    createdAt:Date.now(),
    description:'test description'
}]
app.get('/',(request,response)=>{
    response.render('index',{articles:articles})

})
app.listen(5000)
