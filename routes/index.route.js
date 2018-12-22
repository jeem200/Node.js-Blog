const express=require("express")
const router=express.Router()
let ArticleController=require("../controllers/article.controller");

router.get('/', async function(req,res){
    
    //console.log(articles)
    res.render("index",{
        title:"Articles",
        articles:await ArticleController.getArticles()
    });
})

/*Article.find({},function(err,response){
    console.log(response);
    

    res.render("index",{
        title:"Articles",
        articles:response
    });

});*/

module.exports = router;