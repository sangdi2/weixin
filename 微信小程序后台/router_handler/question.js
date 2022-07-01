const db =require('../db/index')

const getquestion ='select * from timu'
exports.getquestion=function(req,res){
    db.query(getquestion,function(err,results){
        if(err){
            return res.send({
                message:'获取文章信息失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}
const getanswer ='select answer from timu where id=?'
exports.getanswer=function(req,res){
    db.query(getanswer,req.query.id,function(err,results){
        if(err){
            return res.send({
                message:'获取答案失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}