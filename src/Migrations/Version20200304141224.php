<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200304141224 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE sous_category');
        $this->addSql('DROP INDEX IDX_A769EEB0527FEED1 ON especes');
        $this->addSql('ALTER TABLE especes ADD regne VARCHAR(255) NOT NULL, ADD embranchement VARCHAR(255) NOT NULL, ADD sous_embranchement VARCHAR(255) NOT NULL, ADD classe VARCHAR(255) NOT NULL, ADD ordre VARCHAR(255) NOT NULL, ADD famille VARCHAR(255) NOT NULL, ADD statut_conservation VARCHAR(255) DEFAULT NULL, DROP sous_category_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE sous_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE especes ADD sous_category_id INT DEFAULT NULL, DROP regne, DROP embranchement, DROP sous_embranchement, DROP classe, DROP ordre, DROP famille, DROP statut_conservation');
        $this->addSql('CREATE INDEX IDX_A769EEB0527FEED1 ON especes (sous_category_id)');
    }
}
