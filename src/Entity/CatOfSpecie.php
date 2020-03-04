<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CatOfSpecieRepository")
 */
class CatOfSpecie
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Category", cascade={"persist", "remove"})
     */
    private $idCat;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Especes", cascade={"persist", "remove"})
     */
    private $idEspece;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdCat(): ?Category
    {
        return $this->idCat;
    }

    public function setIdCat(?Category $idCat): self
    {
        $this->idCat = $idCat;

        return $this;
    }

    public function getIdEspece(): ?Especes
    {
        return $this->idEspece;
    }

    public function setIdEspece(?Especes $idEspece): self
    {
        $this->idEspece = $idEspece;

        return $this;
    }
}
