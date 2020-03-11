<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Especes;

class EspecesController extends AbstractController
{
    /**
     * @Route("/api/EspecesDetails", name="especesDetails")
     */
    public function index()
    {
        $especesArray = [];
        $especes = $this->getDoctrine()->getRepository(Especes::class);
        $especesEntities = $especes->findAll();
        

        for ($i=0; $i < count($especesEntities); $i++) { 
            $espece = $especesEntities[$i];
            $id = $espece->getId();
            $category = $espece->getCategory();
            $NomFrancais = $espece->getNomFrancais();
            $NomLatin = $espece->getNomLatin();
            $Image = $espece->getImage();
            $Moeurs = $espece->getMoeurs();
            $Description = $espece->getDescription();
            $Alimentation = $espece->getAlimentation();
            $Repartition = $espece->getRepartition();
            $habitat = $espece->getHabitat();
            $Longevite = $espece->getLongevite();
            $reproduction = $espece->getReproduction();
            $regne = $espece->getRegne();
            $embranchement = $espece->getEmbranchement();
            $classe->$espece->getClasse();
            $ordre->$espece->getOrdre();
            $famille->$espece->getFamille();
            $statutConservation->$espece->getStatutConservation();


            $especeArray = [
                "id" => $id,
                "category" => $category,
                "NomFrancais" => $NomFrancais,
                "NomLatin" => $NomLatin,
                "Image" => $Image,
                "Moeurs" => $Moeurs,
                "Description" => $Description,
                "Alimentation" => $Alimentation,
                "Repartition" => $Repartition,
                "Habitat" => $habitat,
                "Longevite" => $Longevite,
                "Reproduction" => $reproduction,
                "Regne" => $regne,
                "Embranchement" => $embranchement,
                "Classe" => $classe,
                "Ordre" => $ordre,
                "Famille" => $famille,
                "StatutConservation" => $statutConservation,

            ];
            $especesArray[] = $especeArray; //équivaut push en JS
        }
        return new JsonResponse($especesArray);
    }


    /** 
     * @Route("/api/EspecesDetails/{id}", name="OneespeceDetail")
    */
    public function getEspeceById($id) {
       
        $espece = $this ->getDoctrine()                      
                        ->getRepository(Especes::class)             
                        ->find($id);
        $id = $espece->getId();
        $NomFrancais = $espece->getNomFrancais();
        $NomLatin = $espece->getNomLatin();
        $Image = $espece->getImage();
        $Description = $espece->getDescription();
        $Alimentation = $espece->getAlimentation();
        $Repartition = $espece->getRepartition();
        $Habitat = $espece->getHabitat();
        $Moeurs = $espece->getMoeurs();
        $Longevite = $espece->getLongevite();
        $Reproduction = $espece->getReproduction();
        $regne = $espece->getRegne();
        $embranchement = $espece->getEmbranchement();
        $classe = $espece->getClasse();
        $ordre = $espece->getOrdre();
        $famille = $espece->getFamille();
        $statutConservation = $espece->getStatutConservation();
        $especeId = [
            "id" => $id,
            "NomFrancais" => $NomFrancais,
            "NomLatin" => $NomLatin,
            "Image" => $Image,
            "Moeurs" => $Moeurs,
            "Description" => $Description,
            "Alimentation" => $Alimentation,
            "Repartition" => $Repartition,
            "Habitat" => $Habitat,
            "Longevite" => $Longevite,
            "Reproduction" => $Reproduction,
            "Regne" => $regne,
            "Embranchement" => $embranchement,
            "Classe" => $classe,
            "Ordre" => $ordre,
            "Famille" => $famille,
            "StatutConservation" => $statutConservation,

        ];
        return new JsonResponse($especeId);
    }
}