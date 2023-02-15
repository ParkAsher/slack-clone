import { MigrationInterface, QueryRunner } from 'typeorm';

export class categoryToType1676439591101 implements MigrationInterface {
    name = 'categoryToType1676439591101';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "mentions" RENAME COLUMN "category" to "type"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "mentions" RENAME COLUMN "type" to "category"`,
        );
    }
}
