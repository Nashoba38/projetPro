<?php

// Ce controleur gère les espèces triées selon leur catégorie (famille) pour le Front.

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\SousCategory;
use App\Entity\Especes;

class SousCategoryController extends AbstractController
{
    /**
     * @Route("/api/EspecesBySousCat/{id}", name="especesBySousCat")
     */
    public function sousCategories(sousCategory $sousCategory)
    {
        $especesRepository = $this->getDoctrine()->getRepository(Especes::class);
        $especesEntities = $especesRepository->findBySousCategory($sousCategory);

        $especes = [];
        foreach($especesEntities as $espece)
        {
            $especes[] = [
                'id' => $espece->getId(),
                'nomFrancais' => $espece->getNomFrancais(),
                'nomLatin' => $espece->getNomLatin(),
                'Photo' => $espece->getImage(),
            ];   
        }
        return new JsonResponse($especes);
    }
}