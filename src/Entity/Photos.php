<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PhotosRepository")
 * @Vich\Uploadable
 */
class Photos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    
    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $photo;

    /**
     * @Vich\UploadableField(mapping="photo", fileNameProperty="photo")
     * @var File
     */
    private $photoFile;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $LatinName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $FrenchName;

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setPhoto($photo)
    {
        $this->photo = $photo;
    }

    public function getPhoto()
    {
        return $this->photo;
    }

    public function getPhotoFile()
    {
        return $this->photoFile;
    }

    public function setPhotoFile(file $photo)
    {
        $this->photoFile = $photo;

        if ($photo) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getLatinName(): ?string
    {
        return $this->LatinName;
    }

    public function setLatinName(string $LatinName): self
    {
        $this->LatinName = $LatinName;

        return $this;
    }

    public function getFrenchName(): ?string
    {
        return $this->FrenchName;
    }

    public function setFrenchName(string $FrenchName): self
    {
        $this->FrenchName = $FrenchName;

        return $this;
    }
    public function __toString() {
        return $this->FrenchName;
    }
}
