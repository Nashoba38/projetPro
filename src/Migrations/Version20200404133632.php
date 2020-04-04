<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200404133632 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE sous_category CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE name name VARCHAR(255) NOT NULL, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE especes ADD sous_category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE especes ADD CONSTRAINT FK_A769EEB0527FEED1 FOREIGN KEY (sous_category_id) REFERENCES sous_category (id)');
        $this->addSql('CREATE INDEX IDX_A769EEB0527FEED1 ON especes (sous_category_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE especes DROP FOREIGN KEY FK_A769EEB0527FEED1');
        $this->addSql('DROP INDEX IDX_A769EEB0527FEED1 ON especes');
        $this->addSql('ALTER TABLE especes DROP sous_category_id');
        $this->addSql('ALTER TABLE sous_category MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE sous_category DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE sous_category CHANGE id id INT NOT NULL, CHANGE name name INT NOT NULL');
    }
}
