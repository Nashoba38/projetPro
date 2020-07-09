<?php

namespace App\Repository;

use App\Entity\SousCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method sousCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method sousCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method sousCategory[]    findAll()
 * @method sousCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SousCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SousCategory::class);
    }

    // /**
    //  * @return sousCategory[] Returns an array of sousCategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?sousCategory
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
