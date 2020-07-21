const express= require('express')
const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/blog2', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
const app=express()
const articleRouter=require('./routes/articles')


 
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false})) 


const articles=[{
    title:'test',
    createdAt:new Date(),
    description:'test description'
}]
app.get('/',(request,response)=>{
    response.render('articles/index',{articles:articles})

})
app.use('/articles',articleRouter)
app.listen(5001)
