import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductsTableCreate1668185077702 implements MigrationInterface {
    name = 'ProductsTableCreate1668185077702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(100) NOT NULL, \`Price\` float(2) NOT NULL, \`UpdateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
