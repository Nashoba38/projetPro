<?php

namespace App\Repository;

use App\Entity\CatOfSpecie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CatOfSpecie|null find($id, $lockMode = null, $lockVersion = null)
 * @method CatOfSpecie|null findOneBy(array $criteria, array $orderBy = null)
 * @method CatOfSpecie[]    findAll()
 * @method CatOfSpecie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CatOfSpecieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CatOfSpecie::class);
    }

    // /**
    //  * @return CatOfSpecie[] Returns an array of CatOfSpecie objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CatOfSpecie
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
