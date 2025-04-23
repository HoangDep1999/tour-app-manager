import { MigrationInterface, QueryRunner } from "typeorm";

export class FileMigrateAllData1745396721271 implements MigrationInterface {
    name = 'FileMigrateAllData1745396721271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cruise_activity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`tourTicketId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`tourTicketId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ticket_transaction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`quantity\` int NOT NULL, \`soldAt\` datetime NOT NULL, \`ticketId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`location\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`location_tour\` (\`id\` int NOT NULL AUTO_INCREMENT, \`locationsId\` int NULL, \`toursId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tour\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`itinerary\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`image\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tourticketdetail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`departure_from\` varchar(255) NOT NULL, \`itinerary\` varchar(255) NOT NULL, \`media\` varchar(255) NOT NULL, \`userId\` int NULL, \`tourId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fullName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('super_admin', 'admin', 'staff', 'customer') NOT NULL DEFAULT 'customer', \`isActive\` tinyint NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cruise_activity\` ADD CONSTRAINT \`FK_a781759925db70db541e040b983\` FOREIGN KEY (\`tourTicketId\`) REFERENCES \`tourticketdetail\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD CONSTRAINT \`FK_9c837b58e0e5feb24e478719425\` FOREIGN KEY (\`tourTicketId\`) REFERENCES \`tourticketdetail\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket_transaction\` ADD CONSTRAINT \`FK_c8351432cd3b780646bebc5a142\` FOREIGN KEY (\`ticketId\`) REFERENCES \`tourticketdetail\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`location_tour\` ADD CONSTRAINT \`FK_cf4194c71214ff83a36d8ada2c4\` FOREIGN KEY (\`locationsId\`) REFERENCES \`location\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`location_tour\` ADD CONSTRAINT \`FK_a8658f474736e0c77984af9ac79\` FOREIGN KEY (\`toursId\`) REFERENCES \`tour\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tourticketdetail\` ADD CONSTRAINT \`FK_bda7cc0a4c645be9a89ad63d083\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tourticketdetail\` ADD CONSTRAINT \`FK_4b36c9ae2288a81632b6c769cde\` FOREIGN KEY (\`tourId\`) REFERENCES \`tour\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tourticketdetail\` DROP FOREIGN KEY \`FK_4b36c9ae2288a81632b6c769cde\``);
        await queryRunner.query(`ALTER TABLE \`tourticketdetail\` DROP FOREIGN KEY \`FK_bda7cc0a4c645be9a89ad63d083\``);
        await queryRunner.query(`ALTER TABLE \`location_tour\` DROP FOREIGN KEY \`FK_a8658f474736e0c77984af9ac79\``);
        await queryRunner.query(`ALTER TABLE \`location_tour\` DROP FOREIGN KEY \`FK_cf4194c71214ff83a36d8ada2c4\``);
        await queryRunner.query(`ALTER TABLE \`ticket_transaction\` DROP FOREIGN KEY \`FK_c8351432cd3b780646bebc5a142\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP FOREIGN KEY \`FK_9c837b58e0e5feb24e478719425\``);
        await queryRunner.query(`ALTER TABLE \`cruise_activity\` DROP FOREIGN KEY \`FK_a781759925db70db541e040b983\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`tourticketdetail\``);
        await queryRunner.query(`DROP TABLE \`tour\``);
        await queryRunner.query(`DROP TABLE \`location_tour\``);
        await queryRunner.query(`DROP TABLE \`location\``);
        await queryRunner.query(`DROP TABLE \`ticket_transaction\``);
        await queryRunner.query(`DROP TABLE \`schedule\``);
        await queryRunner.query(`DROP TABLE \`cruise_activity\``);
    }

}
