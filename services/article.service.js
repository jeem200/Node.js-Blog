let Article=require("../model/article");


exports.getArticles= async function(){

    let articles=Article.find({},function(err,response){
        console.log(response);
    });
    return articles
}

exports.getArticle=async function( id){
    
    let article=Article.findById(id,function(error,response){
            console.log(response);
    })
    
    return article
}

exports.editArticle=async function(req,res){
    let article={}
    article.title=req.body.title;
    article.author=req.body.author;
    article.body=req.body.body;

    let query={_id:req.params.id}
    Article.update(query,article,function(err){
        if(!err)
        {
            res.redirect('/');
        }
    });
}

exports.addArticle=async function(req,res){
    let article=new Article();

    article.title=req.body.title;
    article.author=req.body.author;
    article.body=req.body.body;

    article.save(function(err){
        if(!err)
        {
            res.redirect('/');
        }
    });
}
