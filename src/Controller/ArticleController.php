<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Article;

class ArticleController extends AbstractController
{
    /**
     * @Route("/api/Articles", name="listeArticles")
     */
    public function index()
    {
        $articlesArray = [];
        $articles = $this->getDoctrine()->getRepository(Article::class);
        $articlesEntities = $articles->findAll();
        

        for ($i=0; $i < count($articlesEntities); $i++) { 
            $article = $articlesEntities[$i];
            $id = $article->getId();
            $titre = $article->getTitre();
            $date = $article->getDate();
            $paragraphe1 = $article->getParagraphe1();
            $paragraphe2 = $article->getParagraphe2();
            $paragraphe3 = $article->getParagraphe3();
            $paragraphe4 = $article->getParagraphe4();
            $paragraphe5 = $article->getParagraphe5();
            $image1 = $article->getImage1();
            $image2 = $article->getImage2();
            $image3 = $article->getImage3();
            $image4 = $article->getImage4();
            $image5 = $article->getImage5();
            


            $articleArray = [
                "id" => $id,
                "titre" => $titre,
                "date" => $date,
                "paragraphe1" => $paragraphe1,
                "paragraphe2" => $paragraphe2,
                "paragraphe3" => $paragraphe3,
                "paragraphe4" => $paragraphe4,
                "paragraphe5" => $paragraphe5,
                "image1" => $image1,
                "image2" => $image2,
                "image3" => $image3,
                "image4" => $image4,
                "image5" => $image5,
            ];
            $articlesArray[] = $articleArray; //équivaut push en JS
        }
        return new JsonResponse($articlesArray);
    }


    /** 
     * @Route("/api/Articles/{id}", name="article")
    */
    public function getArticleById($id) {
       
        $article = $this ->getDoctrine()                      
                        ->getRepository(Article::class)             
                        ->find($id);
        $id = $article->getId();
        $titre = $article->getTitre();
        $date = $article->getdate();
        $paragraphe1 = $article->getParagraphe1();
        $paragraphe2 = $article->getParagraphe2();
        $paragraphe3 = $article->getParagraphe3();
        $paragraphe4 = $article->getParagraphe4();
        $paragraphe5 = $article->getParagraphe5();
        $image1 = $article->getImage1();
        $image2 = $article->getImage2();
        $image3 = $article->getImage3();
        $image4 = $article->getImage4();
        $image5 = $article->getImage5();
        
        $articleId = [
            "id" => $id,
            "date" => $date,
            "paragraphe1" => $paragraphe1,
            "paragraphe2" => $paragraphe2,
            "paragraphe3" => $paragraphe3,
            "paragraphe4" => $paragraphe4,
            "paragraphe5" => $paragraphe5,
            "image1" => $image1,
            "image2" => $image2,
            "image3" => $image3,
            "image4" => $image4,
            "image5" => $image5,
        ];
        return new JsonResponse($articleId);
    }
}
