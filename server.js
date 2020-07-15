const express= require('express')
const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
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
app.listen(5000)
