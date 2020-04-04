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

    public function findByCategory(Category $category) 
    {
        return $this->createQueryBuilder('espece')
           ->where('espece.category = :mycategory')
           ->setParameter('mycategory', $category)
           ->getQuery()
           ->getResult()
        ;
    }

    public function findBySousCategory(SousCategory $sousCategory) 
    {
        return $this->createQueryBuilder('e')
           ->where('e.sousCategory = :mysouscategory')
           ->setParameter('mysouscategory', $sousCategory)
           ->getQuery()
           ->getResult()
        ;
    }

    public function findAllOrderedByName()
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT e FROM especes e ORDER BY e.name ASC'
            )
            ->getResult();
            }

    public function mammiferes() {
        return $this->createQueryBuilder('m')
                    ->join('m.category_id', 'c')
                    ->andWhere('c = category')
                    ->andWhere('c.id = :id')
                    ->setParameter('id', 1)
                    ->getQuery()
                    ->getResult();
    }

    // public function ophidiens() {
    //     return $this->createQueryBuilder('o')
    //                 ->join('o.sous_category_id', 'sc')
    //                 ->andWhere('sc = sousCategory')
    //                 ->andWhere('sc.id = :id')
    //                 ->setParameter('id', 1)
    //                 ->getQuery()
    //                 ->getResult();
    // }

   public function makeList() {
       $especes = $this->getDoctrine()
        ->getRepository(Especes::class)
        ->findAllOrderedByName();
   }

//    public function EspeceMaroc() {
//        return $this->egetEntityManager()
//             ->createQuery(
//                 'SELECT NomLatin NomFrancais FROM especes e JOIN especes_pays ep ON ep.especes_id = e.especes_id WHERE ep.pays_id = 2 '
//             )
//             ->getResult();
//    }

//    public function reptilesList(){
//     return $this->getEntityManager()
//             ->createQuery("SELECT NomLatin NomFrancais FROM especes e  WHERE e.category_id = 2 ORDER BY NomFrançais DESC")
//             ->getResult();

//     }

    // public function especeByCategory(){
    //     return $this->getEntityManager()
    //             ->createQuery("SELECT e.NomLatin e.NomFrancais e.category_id 
    //             c.id
    //             FROM especes e, category c
    //             where e.category_id = c.id")
    //             ->getResult();
    
    //     }
}
