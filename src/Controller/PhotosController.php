<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Photos;

class PhotosController extends AbstractController
{
    /**
     * @Route("/api/photos", name="photos")
     */
    public function index()
    {
        $photosArray = [];
        $photos = $this->getDoctrine()->getRepository(Photos::Class);
        $photosEntities = $photos->findAll();

        for ($i=0; $i < count($photosEntities); $i++) {
            $photoSample = $photosEntities[$i];
            $id = $photoSample->getId();
            $photo = $photoSample->getPhoto();
            $latinName = $photoSample->getLatinName();
            $frenchName = $photoSample->getFrenchName();

            $photosArray = [
                "id" => $id,
                "photo" => $photo,
                "LatinName" => $latinName,
                "FrenchName" => $frenchName,
            ];
            $photosArray[] = $photoArray;
        }
        return new JsonResponse($photosArray);
    }
}
