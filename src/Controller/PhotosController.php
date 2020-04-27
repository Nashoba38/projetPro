<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Photos;

class PhotosController extends AbstractController
{
    /**
     * @Route("/api/galerieAll", name="fullGalerie")
     */
    public function fullGalerie()
    {
        $photosRepository = $this->getDoctrine()->getRepository(Photos::class);
        $photosEntities = $photosRepository->findAllGalerie();

        
        $photos = [];
        foreach($photosEntities as $photo) {
            $arrayPays = [];
                foreach ($photo->getPays() as $pays) 
                {
                    $arrayPays[] = $pays->getId();
                } 
               
      
            $photos[] = [
                'id' => $photo->getId(),
                'nom' => $photo->getNom(),
                'nomLatin' => $photo->getNomLatin(),
                'photo' => $photo->getPhoto(),
                'pays' => $arrayPays,
                'category' => $photo->getCategory()->getId()
            ];
                
        }
        return new JsonResponse($photos);
    }
    
}