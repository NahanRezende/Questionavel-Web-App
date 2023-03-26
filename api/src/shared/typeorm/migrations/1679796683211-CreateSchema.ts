import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1679796683211 implements MigrationInterface {
    name = 'CreateSchema1679796683211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Survey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0397473818bf2dcd5ad3f961eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "answer" character varying NOT NULL, "answer_count" integer NOT NULL DEFAULT '0', "survey_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4d437db1a849fc5c36e25c55daf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Answer" ADD CONSTRAINT "FK_bf83068fcd47f6bb300823a1f3c" FOREIGN KEY ("survey_id") REFERENCES "Survey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Answer" DROP CONSTRAINT "FK_bf83068fcd47f6bb300823a1f3c"`);
        await queryRunner.query(`DROP TABLE "Answer"`);
        await queryRunner.query(`DROP TABLE "Survey"`);
    }

}
