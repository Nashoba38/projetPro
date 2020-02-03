<?php

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
    public function categories(Category $category)
    {
        $especesRepository = $this->getDoctrine()->getRepository(Especes::class);
        $especesEntities = $especesRepository->findByCategory($category);

        $especes = [];
        foreach($especesEntities as $espece)
        {
            $especes[] = [
                'id' => $espece->getId(),
                'NomFrancais' => $espece->getNomFrancais(),
                'NomLatin' => $espece->getNomLatin(),
                'Photo' => $espece->getImage(),
            ];   
        }
        return new JsonResponse($especes);
    }
}