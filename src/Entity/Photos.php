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
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomLatin;

     /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="Category")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Pays", inversedBy="Pays", cascade={"persist","remove"})
     */
    private $pays;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\Especes", inversedBy="photos")
     */
    private $espece;

    public function __construct()
    {
        $this->pays = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
    
    public function getNomLatin(): ?string
    {
        return $this->nomLatin;
    }

    public function setNomLatin(string $nomLatin): self
    {
        $this->nomLatin = $nomLatin;

        return $this;
    }


    public function getCategory(): ?Category
    {
        return $this->category;
    }
    
    public function setCategory(?Category $category): self
    {
        $this->category = $category;
        
        return $this;
    }

    public function getPhoto()
    {
        return $this->photo;
    }

    public function setPhoto($photo)
    {
        $this->photo = $photo;
    }

    public function getPhotoFile()
    {
        return $this->photoFile;
    }

    public function setPhotoFile(File $photo)
    {
        $this->photoFile = $photo;
    }

    public function getEspece(): ?Especes
    {
        return $this->espece;
    }

    public function setEspece(?Especes $espece): self
    {
        $this->espece = $espece;

        return $this;
    }

    /**
     * @return Collection|Pays[]
     */

    public function getPays(): Collection
    {
        return $this->pays;
    }

    public function addPays(Pays $pays): self
    {
        if (!$this->pays->contains($pays)) {
            $this->pays[] = $pays;
            $pays->addPays($this);
        }

        return $this;
    }

    public function removePays(Pays $pays): self
    {
        if ($this->pays->contains($pays)) {
            $this->pays->removeElement($pays);
            $pays->removePays($this);
        }

        return $this;
    }

    public function __toString() {
        return $this->nom;
    }
}
