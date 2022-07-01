const express =require('express')

const router= express.Router()

const rl =require('../router_handler/user')

router.get('/getcourse',rl.getcourse)

router.get('/getvideo',rl.getvideo)

router.get('/tuijiancourse',rl.tuijiancourse)

module.exports=router