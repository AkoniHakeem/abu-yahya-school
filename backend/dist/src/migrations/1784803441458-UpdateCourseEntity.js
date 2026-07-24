"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseEntity1784803441458 = void 0;
class UpdateCourseEntity1784803441458 {
    constructor() {
        this.name = 'UpdateCourseEntity1784803441458';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_a401fb96f1afa0fcebacd3e8e78"`);
        await queryRunner.query(`CREATE TYPE "public"."course_media_type_enum" AS ENUM('video', 'audio', 'pdf')`);
        await queryRunner.query(`CREATE TABLE "course_media" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "type" "public"."course_media_type_enum" NOT NULL DEFAULT 'video', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" uuid, CONSTRAINT "PK_6b30e55915de5bb11a07460d8f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "tutorId"`);
        await queryRunner.query(`ALTER TABLE "course_media" ADD CONSTRAINT "FK_3cd3f3f3bd547746cfd5767c64e" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "course_media" DROP CONSTRAINT "FK_3cd3f3f3bd547746cfd5767c64e"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "tutorId" uuid`);
        await queryRunner.query(`DROP TABLE "course_media"`);
        await queryRunner.query(`DROP TYPE "public"."course_media_type_enum"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_a401fb96f1afa0fcebacd3e8e78" FOREIGN KEY ("tutorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
}
exports.UpdateCourseEntity1784803441458 = UpdateCourseEntity1784803441458;
//# sourceMappingURL=1784803441458-UpdateCourseEntity.js.map