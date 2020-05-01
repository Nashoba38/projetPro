<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 * @Vich\Uploadable
 */
class Article
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
    private $titre;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\Column(type="text")
     */
    private $paragraphe1;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $paragraphe2;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $paragraphe3;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $paragraphe4;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $paragraphe5;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $image1;

    /**
     * @Vich\UploadableField(mapping="artImg1", fileNameProperty="image1")
     * @var File
     */
    private $artImg1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image2;

    /**
     * @Vich\UploadableField(mapping="artImg2", fileNameProperty="image2")
     * @var File
     */
    private $artImg2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image3;

    /**
     * @Vich\UploadableField(mapping="artImg3", fileNameProperty="image3")
     * @var File
     */
    private $artImg3;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image4;

    /**
     * @Vich\UploadableField(mapping="artImg4", fileNameProperty="image4")
     * @var File
     */
    private $artImg4;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image5;

    /**
     * @Vich\UploadableField(mapping="artImg5", fileNameProperty="image5")
     * @var File
     */
    private $artImg5;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getParagraphe1(): ?string
    {
        return $this->paragraphe1;
    }

    public function setParagraphe1(string $paragraphe1): self
    {
        $this->paragraphe1 = $paragraphe1;

        return $this;
    }

    public function getParagraphe2(): ?string
    {
        return $this->paragraphe2;
    }

    public function setParagraphe2(?string $paragraphe2): self
    {
        $this->paragraphe2 = $paragraphe2;

        return $this;
    }

    public function getParagraphe3(): ?string
    {
        return $this->paragraphe3;
    }

    public function setParagraphe3(?string $paragraphe3): self
    {
        $this->paragraphe3 = $paragraphe3;

        return $this;
    }

    public function getParagraphe4(): ?string
    {
        return $this->paragraphe4;
    }

    public function setParagraphe4(?string $paragraphe4): self
    {
        $this->paragraphe4 = $paragraphe4;

        return $this;
    }

    public function getParagraphe5(): ?string
    {
        return $this->paragraphe5;
    }

    public function setParagraphe5(?string $paragraphe5): self
    {
        $this->paragraphe5 = $paragraphe5;

        return $this;
    }

    public function getImage1()
    {
        return $this->image1;
    }

    public function setImage1($image1)
    {
        $this->image1 = $image1;
        return $this;
    }

    public function getImage2()
    {
        return $this->image2;
    }

    public function setImage2($image2)
    {
        $this->image2 = $image2;
    }

    public function getImage3()
    {
        return $this->image3;
    }

    public function setImage3($image3)
    {
        $this->image3 = $image3;
    }

    public function getImage4()
    {
        return $this->image4;
    }

    public function setImage4($image4)
    {
        $this->image4 = $image4;
    }

    public function getImage5()
    {
        return $this->image5;
    }

    public function setImage5($image5)
    {
        $this->image5 = $image5;
    }

    public function getArtImg1()
    {
        return $this->artImg1;
    }

    public function setArtImg1(File $image1)
    {
        $this->artImg1 = $image1;

        if ($image1) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getArtImg2()
    {
        return $this->artImg2;
    }

    public function setArtImg2(File $image2)
    {
        $this->artImg2 = $image2;

        if ($image2) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getArtImg3()
    {
        return $this->artImg3;
    }

    public function setArtImg3(File $image3)
    {
        $this->artImg3 = $image3;

        if ($image3) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getArtImg4()
    {
        return $this->artImg4;
    }

    public function setArtImg4(File $image4)
    {
        $this->artImg4 = $image4;

        if ($image4) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getArtImg5()
    {
        return $this->artImg5;
    }

    public function setArtImg5(File $image5)
    {
        $this->artImg5 = $image5;

        if ($image5) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function __toString() {
        return $this->titre;
    }

}
