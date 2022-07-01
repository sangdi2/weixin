const express =require('express')

const app =express()

const cors =require('cors')



app.use(cors())

app.use(express.urlencoded({extended:false}))





const rt =require('./router/user')

app.use('/api',rt)

const rs =require('./router/vertical')

app.use('/app',rs)

const qu=require('./router/getquestion')

app.use('/apo',qu)
  

app.listen(8089,function(req,res){
    console.log('http://localhost:8089')
})