const express =require('express')

const router= express.Router()

const r3 =require('../router_handler/question')

router.get('/getquestion',r3.getquestion)

router.get('/getanswer',r3.getanswer)

module.exports=router