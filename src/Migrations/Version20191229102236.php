<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191229102236 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE article');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, paragraphe1 LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, paragraphe2 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe3 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe4 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe5 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe6 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe7 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe8 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe9 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, paragraphe10 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, titre LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, sous_titre1 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, sous_titre2 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, sous_titre3 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, sous_titre4 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, sous_titre5 LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
    }
}
