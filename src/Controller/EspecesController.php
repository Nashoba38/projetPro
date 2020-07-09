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
            $category = $espece->getCategory()->getId();
            $nomFrancais = $espece->getNomFrancais();
            $nomLatin = $espece->getNomLatin();
            $Image = $espece->getImage();
            $moeurs = $espece->getMoeurs();
            $description = $espece->getDescription();
            $alimentation = $espece->getAlimentation();
            $repartition = $espece->getRepartition();
            $habitat = $espece->getHabitat();
            $longevite = $espece->getLongevite();
            $reproduction = $espece->getReproduction();
            $regne = $espece->getRegne();
            $embranchement = $espece->getEmbranchement();
            $classeTaxo=$espece->getClasseTaxo();
            $ordre=$espece->getOrdre();
            $famille=$espece->getFamille();
            $statutConservation=$espece->getStatutConservation();


            $especeArray = [
                "id" => $id,
                "category" => $category,
                "nomFrancais" => $nomFrancais,
                "nomLatin" => $nomLatin,
                "Image" => $Image,
                "moeurs" => $moeurs,
                "description" => $description,
                "alimentation" => $alimentation,
                "repartition" => $repartition,
                "habitat" => $habitat,
                "longevite" => $longevite,
                "reproduction" => $reproduction,
                "regne" => $regne,
                "embranchement" => $embranchement,
                "Classe" => $classeTaxo,
                "ordre" => $ordre,
                "famille" => $famille,
                "statutConservation" => $statutConservation,

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
        $nomFrancais = $espece->getNomFrancais();
        $nomLatin = $espece->getNomLatin();
        $Image = $espece->getImage();
        $description = $espece->getDescription();
        $alimentation = $espece->getAlimentation();
        $repartition = $espece->getRepartition();
        $habitat = $espece->getHabitat();
        $moeurs = $espece->getMoeurs();
        $longevite = $espece->getLongevite();
        $reproduction = $espece->getReproduction();
        $regne = $espece->getRegne();
        $embranchement = $espece->getEmbranchement();
        $classeTaxo = $espece->getClasseTaxo();
        $ordre = $espece->getOrdre();
        $famille = $espece->getFamille();
        $statutConservation = $espece->getStatutConservation();
        $especeId = [
            "id" => $id,
            "nomFrancais" => $nomFrancais,
            "nomLatin" => $nomLatin,
            "Image" => $Image,
            "moeurs" => $moeurs,
            "description" => $description,
            "alimentation" => $alimentation,
            "repartition" => $repartition,
            "habitat" => $habitat,
            "longevite" => $longevite,
            "reproduction" => $reproduction,
            "regne" => $regne,
            "embranchement" => $embranchement,
            "Classe" => $classeTaxo,
            "ordre" => $ordre,
            "famille" => $famille,
            "statutConservation" => $statutConservation,

        ];
        return new JsonResponse($especeId);
    }
}