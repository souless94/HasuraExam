
CREATE TABLE "public"."AppUsers"("id" bigserial NOT NULL, "username" text NOT NULL, "displayName" text NOT NULL, "email" text NOT NULL, "hashed_password" text NOT NULL, "role" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("username"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_AppUsers_updated_at"
BEFORE UPDATE ON "public"."AppUsers"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_AppUsers_updated_at" ON "public"."AppUsers" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."AppUsers" rename column "hashed_password" to "hashedPassword";

ALTER TABLE "public"."AppUsers" ALTER COLUMN "id" TYPE Text;


CREATE TABLE "public"."Courses"("id" bigserial NOT NULL, "title" text NOT NULL, "url" text NOT NULL, "description" text, "uploadedby" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("uploadedby") REFERENCES "public"."AppUsers"("id") ON UPDATE cascade ON DELETE no action);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_Courses_updated_at"
BEFORE UPDATE ON "public"."Courses"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_Courses_updated_at" ON "public"."Courses" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
