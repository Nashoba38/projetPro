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
    private $Pays;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    public function __construct()
    {
        $this->Pays = new ArrayCollection();
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
        return $this->Pays;
    }

    public function addPays(Especes $espece): self
    {
        if (!$this->Pays->contains($espece)) {
            $this->Pays[] = $espece;
            $espece->addPays($this);
        }

        return $this;
    }

    public function removePays(Especes $espece): self
    {
        if ($this->Pays->contains($espece)) {
            $this->Pays->removeElement($espece);

            if ($espece->getPays() === $this) {
                $espece->addPays(null);
            }
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function __toString() {
        return $this->Name;
    }
}
