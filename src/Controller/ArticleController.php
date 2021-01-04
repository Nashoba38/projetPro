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
            $presentation = $article->getPresentation();
            $paragraphe1 = $article->getParagraphe1();
            $paragraphe2 = $article->getParagraphe2();
            $paragraphe3 = $article->getParagraphe3();
            $paragraphe4 = $article->getParagraphe4();
            $paragraphe5 = $article->getParagraphe5();
            $sousTitre1 = $article->getSousTitre1();
            $sousTitre2 = $article->getSousTitre2();
            $sousTitre3 = $article->getSousTitre3();
            $sousTitre4 = $article->getSousTitre4();
            $sousTitre5 = $article->getSousTitre5();
            $nomenclature = $article->getNomenclature();
            $image1 = $article->getImage1();
            $image2 = $article->getImage2();
            $image3 = $article->getImage3();
            $image4 = $article->getImage4();
            $image5 = $article->getImage5();
            $legende1 = $article->getLegende1();
            $legende2 = $article->getLegende2();
            $legende3 = $article->getLegende3();
            $legende4 = $article->getLegende4();
            $legende5 = $article->getLegende5();
            


            $articleArray = [
                "id" => $id,
                "titre" => $titre,
                "date" => $date,
                "presentation" => $presentation,
                "paragraphe1" => $paragraphe1,
                "paragraphe2" => $paragraphe2,
                "paragraphe3" => $paragraphe3,
                "paragraphe4" => $paragraphe4,
                "paragraphe5" => $paragraphe5,
                "sousTitre1" => $sousTitre1,
                "sousTitre2" => $sousTitre2,
                "sousTitre3"=> $sousTitre3,
                "sousTitre4" => $sousTitre4,
                "sousTitre5" => $sousTitre5,
                "nomenclature" => $nomenclature,
                "image1" => $image1,
                "image2" => $image2,
                "image3" => $image3,
                "image4" => $image4,
                "image5" => $image5,
                "legende1" => $legende1,
                "legende2" => $legende2,
                "legende3" => $legende3,
                "legende4" => $legende4,
                "legende5" => $legende5,
                
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
        $presentation = $article->getPresentation();
        $paragraphe1 = $article->getParagraphe1();
        $paragraphe2 = $article->getParagraphe2();
        $paragraphe3 = $article->getParagraphe3();
        $paragraphe4 = $article->getParagraphe4();
        $paragraphe5 = $article->getParagraphe5();
        $sousTitre1 = $article->getSousTitre1();
        $sousTitre2 = $article->getSousTitre2();
        $sousTitre3 = $article->getSousTitre3();
        $sousTitre4 = $article->getSousTitre4();
        $sousTitre5 = $article->getSousTitre5();
        $nomenclature = $article->getNomenclature();
        $image1 = $article->getImage1();
        $image2 = $article->getImage2();
        $image3 = $article->getImage3();
        $image4 = $article->getImage4();
        $image5 = $article->getImage5();
        $legende1 = $article->getLegende1();
        $legende2 = $article->getLegende2();
        $legende3 = $article->getLegende3();
        $legende4 = $article->getLegende4();
        $legende5 = $article->getLegende5();
            
        $articleId = [
            "id" => $id,
            "date" => $date,
            "titre" => $titre,
            "presentation" => $presentation,
            "paragraphe1" => $paragraphe1,
            "paragraphe2" => $paragraphe2,
            "paragraphe3" => $paragraphe3,
            "paragraphe4" => $paragraphe4,
            "paragraphe5" => $paragraphe5,
            "sousTitre1" => $sousTitre1,
            "sousTitre2" => $sousTitre2,
            "sousTitre3"=> $sousTitre3,
            "sousTitre4" => $sousTitre4,
            "sousTitre5" => $sousTitre5,
            "nomenclature" => $nomenclature,
            "image1" => $image1,
            "image2" => $image2,
            "image3" => $image3,
            "image4" => $image4,
            "image5" => $image5,
            "legende1" => $legende1,
            "legende2" => $legende2,
            "legende3" => $legende3,
            "legende4" => $legende4,
            "legende5" => $legende5,
        ];
        return new JsonResponse($articleId);
    }
}
