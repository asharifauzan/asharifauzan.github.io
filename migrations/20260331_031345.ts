import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"skills_id" integer,
  	"skill_name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "skillsets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"skillset_name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "about_highlighted_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"skill" varchar NOT NULL
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"fullname" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "social_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "social" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "education" RENAME TO "educations";
  ALTER TABLE "project" RENAME TO "projects";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "education_id" TO "educations_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "project_id" TO "projects_id";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_education_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_project_fk";
  
  DROP INDEX "education_updated_at_idx";
  DROP INDEX "education_created_at_idx";
  DROP INDEX "project_updated_at_idx";
  DROP INDEX "project_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_education_id_idx";
  DROP INDEX "payload_locked_documents_rels_project_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "skills_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "skillsets_id" integer;
  ALTER TABLE "skills" ADD CONSTRAINT "skills_skills_id_skillsets_id_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skillsets"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_highlighted_skills" ADD CONSTRAINT "about_highlighted_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "social_social_links" ADD CONSTRAINT "social_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."social"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "skills_skills_idx" ON "skills" USING btree ("skills_id");
  CREATE INDEX "skills_updated_at_idx" ON "skills" USING btree ("updated_at");
  CREATE INDEX "skills_created_at_idx" ON "skills" USING btree ("created_at");
  CREATE INDEX "skillsets_updated_at_idx" ON "skillsets" USING btree ("updated_at");
  CREATE INDEX "skillsets_created_at_idx" ON "skillsets" USING btree ("created_at");
  CREATE INDEX "about_highlighted_skills_order_idx" ON "about_highlighted_skills" USING btree ("_order");
  CREATE INDEX "about_highlighted_skills_parent_id_idx" ON "about_highlighted_skills" USING btree ("_parent_id");
  CREATE INDEX "social_social_links_order_idx" ON "social_social_links" USING btree ("_order");
  CREATE INDEX "social_social_links_parent_id_idx" ON "social_social_links" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_educations_fk" FOREIGN KEY ("educations_id") REFERENCES "public"."educations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skillsets_fk" FOREIGN KEY ("skillsets_id") REFERENCES "public"."skillsets"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "educations_updated_at_idx" ON "educations" USING btree ("updated_at");
  CREATE INDEX "educations_created_at_idx" ON "educations" USING btree ("created_at");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_educations_id_idx" ON "payload_locked_documents_rels" USING btree ("educations_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_skills_id_idx" ON "payload_locked_documents_rels" USING btree ("skills_id");
  CREATE INDEX "payload_locked_documents_rels_skillsets_id_idx" ON "payload_locked_documents_rels" USING btree ("skillsets_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
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
  
  ALTER TABLE "educations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "skillsets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_highlighted_skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "social_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "social" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "educations" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "skillsets" CASCADE;
  DROP TABLE "about_highlighted_skills" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "social_social_links" CASCADE;
  DROP TABLE "social" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_educations_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_skills_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_skillsets_fk";
  
  DROP INDEX "payload_locked_documents_rels_educations_id_idx";
  DROP INDEX "payload_locked_documents_rels_projects_id_idx";
  DROP INDEX "payload_locked_documents_rels_skills_id_idx";
  DROP INDEX "payload_locked_documents_rels_skillsets_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "education_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "project_id" integer;
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "project_updated_at_idx" ON "project" USING btree ("updated_at");
  CREATE INDEX "project_created_at_idx" ON "project" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_project_id_idx" ON "payload_locked_documents_rels" USING btree ("project_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "educations_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "projects_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "skills_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "skillsets_id";`)
}
