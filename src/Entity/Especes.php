<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EspecesRepository")
 * @Vich\Uploadable
 */
class Especes
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
    private $NomFrancais;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $NomLatin;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Repartition;

    /**
     * @ORM\Column(type="text")
     */
    private $Description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Reproduction;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Alimentation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Longevite;

    /**
     * @ORM\Column(type="text")
     */
    private $Moeurs;

    /**
     * @ORM\Column(type="text")
     */
    private $Habitat;

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
    private $image;

    /**
     * @Vich\UploadableField(mapping="image", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Regne;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Embranchement;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ClasseTaxo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Ordre;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Famille;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $StatutConservation;



    public function __construct()
    {
        $this->pays = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomFrancais(): ?string
    {
        return $this->NomFrancais;
    }

    public function setNomFrancais(string $NomFrancais): self
    {
        $this->NomFrancais = $NomFrancais;

        return $this;
    }

    public function getNomLatin(): ?string
    {
        return $this->NomLatin;
    }

    public function setNomLatin(string $NomLatin): self
    {
        $this->NomLatin = $NomLatin;

        return $this;
    }

    public function getRepartition(): ?string
    {
        return $this->Repartition;
    }

    public function setRepartition(?string $Repartition): self
    {
        $this->Repartition = $Repartition;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }
    public function getImage()
    {
        return $this->image;
    }
    
    public function setImage($image)
    {
        $this->image = $image;
    }


    public function getImageFile()
    {
        return $this->imageFile;
    }

    public function setImageFile(File $image)
    {
        $this->imageFile = $image;

        if ($image) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }


    public function getReproduction(): ?string
    {
        return $this->Reproduction;
    }

    public function setReproduction(string $Reproduction): self
    {
        $this->Reproduction = $Reproduction;

        return $this;
    }

    public function getAlimentation(): ?string
    {
        return $this->Alimentation;
    }

    public function setAlimentation(string $Alimentation): self
    {
        $this->Alimentation = $Alimentation;

        return $this;
    }

    public function getLongevite(): ?string
    {
        return $this->Longevite;
    }

    public function setLongevite(?string $Longevite): self
    {
        $this->Longevite = $Longevite;

        return $this;
    }

    public function getMoeurs(): ?string
    {
        return $this->Moeurs;
    }

    public function setMoeurs(string $Moeurs): self
    {
        $this->Moeurs = $Moeurs;

        return $this;
    }

    public function getHabitat(): ?string
    {
        return $this->Habitat;
    }

    public function setHabitat(string $Habitat): self
    {
        $this->Habitat = $Habitat;

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

    public function getRegne(): ?string
    {
        return $this->Regne;
    }

    public function setRegne(string $Regne): self
    {
        $this->Regne = $Regne;

        return $this;
    }

    public function getEmbranchement(): ?string
    {
        return $this->Embranchement;
    }

    public function setEmbranchement(string $Embranchement): self
    {
        $this->Embranchement = $Embranchement;

        return $this;
    }


    public function getClasseTaxo(): ?string
    {
        return $this->ClasseTaxo;
    }

    public function setClasseTaxo(string $ClasseTaxo): self
    {
        $this->ClasseTaxo = $ClasseTaxo;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->Ordre;
    }

    public function setOrdre(string $Ordre): self
    {
        $this->Ordre = $Ordre;

        return $this;
    }

    public function getFamille(): ?string
    {
        return $this->Famille;
    }

    public function setFamille(string $Famille): self
    {
        $this->Famille = $Famille;

        return $this;
    }
    
    public function getStatutConservation(): ?string
    {
        return $this->StatutConservation;
    }
    
    public function setStatutConservation(?string $StatutConservation): self
    {
        $this->StatutConservation = $StatutConservation;
        
        return $this;
    }
    
    public function _toString() {
        return $this->NomLatin;
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

    
}

