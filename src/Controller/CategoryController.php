<?php

// Ce controleur gère les espèces triées selon leur catégorie (famille) pour le Front.

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Category;
use App\Entity\Especes;

class CategoryController extends AbstractController
{

    /**
     * @Route("/api/EspecesByCat/{id}", name="especesByCat")
     */
    public function categories(category $category)
    {
        $especesRepository = $this->getDoctrine()->getRepository(Especes::class);
        $especesEntities = $especesRepository->findByCategory($category);

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

    /**
     * @Route("/api/EspecesByLatinCat/{id}", name="especesByLatinCat")
     */
    public function latinCategories(category $category)
    {
        $especesLatinRepository = $this->getDoctrine()->getRepository(Especes::class);
        $especesLatinEntities = $especesLatinRepository->findByLatinNameCategory($category);

        $latinEspeces = [];
        foreach($especesLatinEntities as $especeLatin)
        {
            $latinEspeces[] = [
                'id' => $especeLatin->getId(),
                'nomFrancais' => $especeLatin->getNomFrancais(),
                'nomLatin' => $especeLatin->getNomLatin(),
                'Photo' => $especeLatin->getImage(),
            ];   
        }
        return new JsonResponse($latinEspeces);
    }
}