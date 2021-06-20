

DROP TABLE "public"."Courses";

ALTER TABLE "public"."AppUsers" ALTER COLUMN "id" TYPE bigint;

alter table "public"."AppUsers" rename column "hashedPassword" to "hashed_password";

DROP TABLE "public"."AppUsers";
