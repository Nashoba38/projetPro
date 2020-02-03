<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Especes", mappedBy="category")
     */
    private $Category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    public function __construct()
    {
        $this->Category = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Especes[]
     */
    public function getCategory(): Collection
    {
        return $this->Category;
    }

    public function addCategory(Especes $category): self
    {
        if (!$this->Category->contains($category)) {
            $this->Category[] = $category;
            $category->setCategory($this);
        }

        return $this;
    }

    public function removeCategory(Especes $category): self
    {
        if ($this->Category->contains($category)) {
            $this->Category->removeElement($category);
            // set the owning side to null (unless already changed)
            if ($category->getCategory() === $this) {
                $category->setCategory(null);
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
