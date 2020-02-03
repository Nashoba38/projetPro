<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191011095032 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE cat_of_specie (id INT AUTO_INCREMENT NOT NULL, id_cat_id INT DEFAULT NULL, id_espece_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_F277FA07C09A1CAE (id_cat_id), UNIQUE INDEX UNIQ_F277FA07AD2CA25D (id_espece_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cat_of_specie ADD CONSTRAINT FK_F277FA07C09A1CAE FOREIGN KEY (id_cat_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE cat_of_specie ADD CONSTRAINT FK_F277FA07AD2CA25D FOREIGN KEY (id_espece_id) REFERENCES especes (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE cat_of_specie');
    }
}
