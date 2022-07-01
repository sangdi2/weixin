const express =require('express')

const router= express.Router()

const r2 =require('../router_handler/vertical')

router.get('/getvertical',r2.getvertical)

router.get('/getcontent',r2.getcontent)

router.get('/changefalse',r2.changefalse)

router.get('/changetrue',r2.changetrue)

router.get('/getlike',r2.getlike)

module.exports=router
