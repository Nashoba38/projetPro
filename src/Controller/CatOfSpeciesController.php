<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\CatOfSpecie;

class CatOfSpeciesController extends AbstractController
{
    /**
     * @Route("/api/catSpecies", name="cat_of_species")
     */
    public function categories()
    {
        $especes = $this->getDoctrine()->getRepository(CatOfSpecie::class);
        $especesEntities = $especes->findAll();
        

        for ($i=0; $i < count($especesEntities); $i++) { 
            $espece = $especesEntities[$i];
            $idCat = $espece->getIdCat();
            $idEspece = $espece->getIdEspece();

            $especeArray = [
                "idcat" => $idCat,
                "idEspece" => $idEspece,
                
            ];
            $especesArray[] = $especeArray; //équivaut push en JS
        }
        
        return new JsonResponse($especesArray);
    }
}
