import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "education" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"institution_name" varchar,
  	"major" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "project" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_name" varchar,
  	"description" varchar,
  	"cover" varchar,
  	"url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "education_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "project_id" integer;
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "project_updated_at_idx" ON "project" USING btree ("updated_at");
  CREATE INDEX "project_created_at_idx" ON "project" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_project_id_idx" ON "payload_locked_documents_rels" USING btree ("project_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "education" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "project" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "education" CASCADE;
  DROP TABLE "project" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_education_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_project_fk";
  
  DROP INDEX "payload_locked_documents_rels_education_id_idx";
  DROP INDEX "payload_locked_documents_rels_project_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "education_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "project_id";`)
}
