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
    private $nomFrancais;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomLatin;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $repartition;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="text")
     */
    private $reproduction;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $alimentation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $longevite;

    /**
     * @ORM\Column(type="text")
     */
    private $moeurs;

    /**
     * @ORM\Column(type="text")
     */
    private $habitat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="category")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SousCategory", inversedBy="sousCategory")
     */
    private $sousCategory;
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Pays", inversedBy="pays", cascade={"persist","remove"})
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
    private $regne;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $embranchement;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $classeTaxo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ordre;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $famille;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $statutConservation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Photos", mappedBy="espece")
     */
    private $photos;



    public function __construct()
    {
        $this->pays = new ArrayCollection();
        $this->photos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomFrancais(): ?string
    {
        return $this->nomFrancais;
    }

    public function setNomFrancais(string $nomFrancais): self
    {
        $this->nomFrancais = $nomFrancais;

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

    public function getRepartition(): ?string
    {
        return $this->repartition;
    }

    public function setRepartition(?string $repartition): self
    {
        $this->repartition = $repartition;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

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
        return $this->reproduction;
    }

    public function setReproduction(string $reproduction): self
    {
        $this->reproduction = $reproduction;

        return $this;
    }

    public function getAlimentation(): ?string
    {
        return $this->alimentation;
    }

    public function setAlimentation(string $alimentation): self
    {
        $this->alimentation = $alimentation;

        return $this;
    }

    public function getLongevite(): ?string
    {
        return $this->longevite;
    }

    public function setLongevite(?string $longevite): self
    {
        $this->longevite = $longevite;

        return $this;
    }

    public function getMoeurs(): ?string
    {
        return $this->moeurs;
    }

    public function setMoeurs(string $moeurs): self
    {
        $this->moeurs = $moeurs;

        return $this;
    }

    public function getHabitat(): ?string
    {
        return $this->habitat;
    }

    public function setHabitat(string $habitat): self
    {
        $this->habitat = $habitat;

        return $this;
    }
    
    public function getCategory(): ?category
    {
        return $this->category;
    }
    
    public function setCategory(?category $category): self
    {
        $this->category = $category;
        
        return $this;
    }

    public function getSousCategory(): ?sousCategory
    {
        return $this->sousCategory;
    }
    
    public function setSousCategory(?sousCategory $sousCategory): self
    {
        $this->sousCategory = $sousCategory;
        
        return $this;
    }

    public function getRegne(): ?string
    {
        return $this->regne;
    }

    public function setRegne(string $regne): self
    {
        $this->regne = $regne;

        return $this;
    }

    public function getEmbranchement(): ?string
    {
        return $this->embranchement;
    }

    public function setEmbranchement(string $embranchement): self
    {
        $this->embranchement = $embranchement;

        return $this;
    }


    public function getClasseTaxo(): ?string
    {
        return $this->classeTaxo;
    }

    public function setClasseTaxo(string $classeTaxo): self
    {
        $this->classeTaxo = $classeTaxo;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->ordre;
    }

    public function setOrdre(string $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getFamille(): ?string
    {
        return $this->famille;
    }

    public function setFamille(string $famille): self
    {
        $this->famille = $famille;

        return $this;
    }
    
    public function getStatutConservation(): ?string
    {
        return $this->statutConservation;
    }
    
    public function setStatutConservation(?string $statutConservation): self
    {
        $this->statutConservation = $statutConservation;
        
        return $this;
    }
    
   
    
    /**
     * @return Collection|pays[]
     */

    public function getPays(): Collection
    {
        return $this->pays;
    }

    public function addPays(pays $pays): self
    {
        if (!$this->pays->contains($pays)) {
            $this->pays[] = $pays;
            $pays->addPays($this);
        }

        return $this;
    }

    public function removePays(pays $pays): self
    {
        if ($this->pays->contains($pays)) {
            $this->pays->removeElement($pays);
            $pays->removePays($this);
        }

        return $this;
    }

    /**
     * @return Collection|Photos[]
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    public function addPhoto(Photos $photo): self
    {
        if (!$this->photos->contains($photo)) {
            $this->photos[] = $photo;
            $photo->setEspece($this);
        }

        return $this;
    }

    public function removePhoto(Photos $photo): self
    {
        if ($this->photos->contains($photo)) {
            $this->photos->removeElement($photo);
            // set the owning side to null (unless already changed)
            if ($photo->getEspece() === $this) {
                $photo->setEspece(null);
            }
        }

        return $this;
    }

    public function __toString() {
        return $this->nomLatin;
    }
}

