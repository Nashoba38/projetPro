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
    private $sousCategory;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    public function __construct()
    {
        $this->sousCategory = new ArrayCollection();
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
        return $this->sousCategory;
    }

    public function addSousCategory(Especes $sousCategory): self
    {
        if (!$this->sousCategory->contains($sousCategory)) {
            $this->sousCategory[] = $sousCategory;
            $sousCategory->setSousCategory($this);
        }

        return $this;
    }

    public function removeSousCategory(Especes $sousCategory): self
    {
        if ($this->sousCategory->contains($sousCategory)) {
            $this->sousCategory->removeElement($sousCategory);
            // set the owning side to null (unless already changed)
            if ($sousCategory->getSousCategory() === $this) {
                $sousCategory->setSousCategory(null);
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
