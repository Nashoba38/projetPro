<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PaysRepository")
 */
class Pays
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Especes", mappedBy="pays", cascade={"persist","remove"})
     */
    private $pays;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    public function __construct()
    {
        $this->pays = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Especes[]
     */
    public function getPays(): Collection
    {
        return $this->pays;
    }

    public function addPays(Especes $espece): self
    {
        if (!$this->pays->contains($espece)) {
            $this->pays[] = $espece;
            $espece->addPays($this);
        }

        return $this;
    }

    public function removePays(Especes $espece): self
    {
        if ($this->pays->contains($espece)) {
            $this->pays->removeElement($espece);

            if ($espece->getPays() === $this) {
                $espece->addPays(null);
            }
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function __toString() {
        return $this->name;
    }
}
