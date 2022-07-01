const db =require('../db/index')

const getvertical ='select * from vertical'
exports.getvertical=function(req,res){
    db.query(getvertical,function(err,results){
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
const getcontent ='select * from vertical where id=?'
exports.getcontent=function(req,res){
    db.query(getcontent,req.query.id,function(err,results){
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
const changefalse ='update vertical set islike="true" where id=?'
exports.changefalse=function(req,res){
    db.query(changefalse,req.query.id,function(err,results){
        if(err){
            return res.send({
                message:'修改文章信息失败'
            })
        }
        res.send({
            
            
            message:'修改文章信息成功'
        })
    })
}
const changetrue ='update vertical set islike="false" where id=?'
exports.changetrue=function(req,res){
    db.query(changetrue,req.query.id,function(err,results){
        if(err){
            return res.send({
                message:'修改文章信息失败'
            })
        }
        res.send({
            
            
            message:'修改文章信息成功'
        })
    })
}
const getlike ='select * from vertical where islike="true"'
exports.getlike=function(req,res){
    db.query(getlike,function(err,results){
        if(err){
            return res.send({
                message:'获取收藏列表失败'
            })
        }
        res.send({
            
            
            data:results
        })
    })
}
