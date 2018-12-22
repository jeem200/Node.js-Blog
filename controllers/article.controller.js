var ArticleService = require('../services/article.service')

exports.getArticles= async function(){
    //let articles=await ArticleService.getArticles()
    return await ArticleService.getArticles();
}

exports.getArticle=async function(id){
    return await ArticleService.getArticle(id);
}

exports.editArticle=async function(req,res){
        ArticleService.editArticle(req,res)
}

exports.addArticle=async function(req,res){
    ArticleService.addArticle(req,res)
}