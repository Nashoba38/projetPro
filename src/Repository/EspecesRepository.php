<?php

namespace App\Repository;

use App\Entity\Especes;
use App\Entity\Category;
use App\Entity\SousCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;


/**
 * @method Especes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Especes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Especes[]    findAll()
 * @method Especes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EspecesRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Especes::class);
    }

    public function findByCategory(category $category) 
    {
        return $this->createQueryBuilder('espece')
           ->where('espece.category = :mycategory')
           ->setParameter('mycategory', $category)
           ->orderBy('espece.nomFrancais', 'ASC')
           ->getQuery()
           ->getResult()
        ;
    }

    public function findByLatinNameCategory(category $category) 
    {
        return $this->createQueryBuilder('especeLatin')
           ->where('especeLatin.category = :mycategory')
           ->setParameter('mycategory', $category)
           ->orderBy('especeLatin.nomLatin', 'ASC')
           ->getQuery()
           ->getResult()
        ;
    }

    public function findBySousCategory(sousCategory $sousCategory) 
    {
        return $this->createQueryBuilder('e')
           ->where('e.sousCategory = :mysouscategory')
           ->setParameter('mysouscategory', $sousCategory)
           ->orderBy('e.nomFrancais', 'ASC')
           ->getQuery()
           ->getResult()
        ;
    }

    public function findAllOrderedByName()
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT e FROM especes e ORDER BY e.nomFrancais ASC'
            )
            ->getResult();
            }


   public function makeList() {
       $especes = $this->getDoctrine()
        ->getRepository(Especes::class)
        ->findAllOrderedByName();
   }

//    public function EspeceMaroc() {
//        return $this->egetEntityManager()
//             ->createQuery(
//                 'SELECT nomLatin nomFrancais FROM especes e JOIN especes_pays ep ON ep.especes_id = e.especes_id WHERE ep.pays_id = 2 '
//             )
//             ->getResult();
//    }

//    public function reptilesList(){
//     return $this->getEntityManager()
//             ->createQuery("SELECT nomLatin nomFrancais FROM especes e  WHERE e.category_id = 2 ORDER BY NomFrançais DESC")
//             ->getResult();

//     }

    // public function especeByCategory(){
    //     return $this->getEntityManager()
    //             ->createQuery("SELECT e.nomLatin e.nomFrancais e.category_id 
    //             c.id
    //             FROM especes e, category c
    //             where e.category_id = c.id")
    //             ->getResult();
    
    //     }
}
