import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewUserTable1745395688224 implements MigrationInterface {
    name = 'AddNewUserTable1745395688224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
    }

}
