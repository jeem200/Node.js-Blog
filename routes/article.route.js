const express=require("express")
const router=express.Router()
let ArticleController=require("../controllers/article.controller");


//get the data model





//route add  get request
router.get('/add',function(req,res){
    res.render("addArticles");
});

//route add  post request
router.post('/add',function(req,res){
    ArticleController.addArticle(req,res)
});

//Route load edit form
router.get('/edit/:id',async function(req,res){
    
    res.render("editArticles",{
        title:"Edit Article",
        article:await ArticleController.getArticle(req.params.id)
    })
});

//Route Update
router.post('/edit/:id',function(req,res){
   ArticleController.editArticle(req,res)
});

//single article route
router.get('/:id',async function(req,res){
    
        res.render("article",{
            article:await ArticleController.getArticle(req.params.id)
        });
   
});

module.exports=router