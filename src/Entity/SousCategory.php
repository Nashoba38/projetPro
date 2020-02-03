<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SousCategoryRepository")
 */
class SousCategory
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Especes", mappedBy="sousCategory")
     */
    private $SousCategory;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    public function __construct()
    {
        $this->SousCategory = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Especes[]
     */
    public function getSousCategory(): Collection
    {
        return $this->SousCategory;
    }

    public function addSousCategory(Especes $sousCategory): self
    {
        if (!$this->SousCategory->contains($sousCategory)) {
            $this->SousCategory[] = $sousCategory;
            $sousCategory->setSousCategory($this);
        }

        return $this;
    }

    public function removeSousCategory(Especes $sousCategory): self
    {
        if ($this->SousCategory->contains($sousCategory)) {
            $this->SousCategory->removeElement($sousCategory);
            // set the owning side to null (unless already changed)
            if ($sousCategory->getSousCategory() === $this) {
                $sousCategory->setSousCategory(null);
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
