import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1692092794048 implements MigrationInterface {
    name = 'NewMigration1692092794048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`user_role_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`user_role_ibfk_2\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`role_id\` ON \`user_role\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`user_role\``);
        await queryRunner.query(`CREATE TABLE \`bus\` (\`id\` int NOT NULL AUTO_INCREMENT, \`plateNumber\` varchar(255) NOT NULL, \`operator\` varchar(255) NOT NULL, \`typeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bus_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`chat_room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`userIds\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`chat_message\` (\`id\` int NOT NULL AUTO_INCREMENT, \`senderId\` int NOT NULL, \`content\` varchar(255) NOT NULL, \`timestamp\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`chatRoomId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`itinerary\` (\`id\` int NOT NULL AUTO_INCREMENT, \`originCity\` varchar(255) NOT NULL, \`destinationCity\` varchar(255) NOT NULL, \`departureTime\` time NOT NULL, \`arrivalTime\` time NOT NULL, \`price\` decimal(10,2) NOT NULL, \`assignedBusId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`itineraryId\` int NOT NULL, \`quantity\` int NOT NULL, \`cartId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reservation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`itineraryId\` int NOT NULL, \`seatNumber\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`role_id\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)`);
        await queryRunner.query(`ALTER TABLE \`bus\` ADD CONSTRAINT \`FK_08f2b52dd21917e08584da3d495\` FOREIGN KEY (\`typeId\`) REFERENCES \`bus_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_message\` ADD CONSTRAINT \`FK_14b26a0944a258f4035a55d5020\` FOREIGN KEY (\`chatRoomId\`) REFERENCES \`chat_room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart_item\` ADD CONSTRAINT \`FK_29e590514f9941296f3a2440d39\` FOREIGN KEY (\`cartId\`) REFERENCES \`cart\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_ab40a6f0cd7d3ebfcce082131fd\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_dba55ed826ef26b5b22bd39409b\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_dba55ed826ef26b5b22bd39409b\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_ab40a6f0cd7d3ebfcce082131fd\``);
        await queryRunner.query(`ALTER TABLE \`cart_item\` DROP FOREIGN KEY \`FK_29e590514f9941296f3a2440d39\``);
        await queryRunner.query(`ALTER TABLE \`chat_message\` DROP FOREIGN KEY \`FK_14b26a0944a258f4035a55d5020\``);
        await queryRunner.query(`ALTER TABLE \`bus\` DROP FOREIGN KEY \`FK_08f2b52dd21917e08584da3d495\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`roleId\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`role_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`reservation\``);
        await queryRunner.query(`DROP TABLE \`cart\``);
        await queryRunner.query(`DROP TABLE \`cart_item\``);
        await queryRunner.query(`DROP TABLE \`itinerary\``);
        await queryRunner.query(`DROP TABLE \`chat_message\``);
        await queryRunner.query(`DROP TABLE \`chat_room\``);
        await queryRunner.query(`DROP TABLE \`bus_type\``);
        await queryRunner.query(`DROP TABLE \`bus\``);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`user_role\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`role_id\` ON \`user_role\` (\`role_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`username\` ON \`user\` (\`username\`)`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`user_role_ibfk_2\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`user_role_ibfk_1\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
