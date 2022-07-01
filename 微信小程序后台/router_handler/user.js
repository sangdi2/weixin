const db =require('../db/index')

const getcourse ='select * from information'
exports.getcourse=function(req,res){
    db.query(getcourse,function(err,results){
        if(err){
            return res.send({
                message:'获取课程信息失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}

exports.getvideo=function(req,res){
    const getvideo ='select * from information where id=?'
    console.log(req);
    db.query(getvideo,req.query.id,function(err,results){
        if(err){
            return res.send({
                message:'数据库访问失败'
            })
        }
        if(results.length!=1){
            return res.send({
                message:'获取课程信息失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}
exports.tuijiancourse=function(req,res){
    const tuijiancourse ='select * from information where id!=?'
    console.log(req);
    db.query(tuijiancourse,req.query.id,function(err,results){
        if(err){
            return res.send({
                message:'数据库访问失败'
            })
        }
        if(results.length==1){
            return res.send({
                message:'获取课程信息失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}