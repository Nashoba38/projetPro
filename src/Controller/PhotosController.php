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

    /** 
     * @Route("/api/photo/{id}", name="photo")
    */
    public function getPhotoId($id) {
       
        $image = $this ->getDoctrine()                      
                        ->getRepository(Photos::class)             
                        ->find($id);
        $id = $image->getId();
        $nom = $image->getNom();
        $nomLatin = $image->getNomLatin();
        $photo = $image->getPhoto();
        
        $photoById = [
            "id" => $id,
            "nom" => $nom,
            "nomLatin" => $nomLatin,
            "photo" => $photo

        ];
        return new JsonResponse($photoById);
    }
    
}