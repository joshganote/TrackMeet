
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "street_address" VARCHAR (80) NOT NULL,
    "city" VARCHAR (20) NOT NULL,
    "state" VARCHAR (20) NOT NULL,
    "zipcode" VARCHAR (20) NOT NULL,
    "role_id" INT REFERENCES "user_roles" NOT NULL,   
    "lat"  VARCHAR (80),
    "long" VARCHAR (80),
    "bio" VARCHAR (500),
	"profile_img" VARCHAR (100) 
);

CREATE TABLE "user_roles" (
	"id" SERIAL PRIMARY KEY,
	"role_name" VARCHAR (20)
);

CREATE TABLE "profile" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"bio" VARCHAR (500),
	"profile_img" VARCHAR (100) 
);

CREATE TABLE "portfolio" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"media_path" VARCHAR (100) 
);
	
CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
	"artist_id" INT REFERENCES "user" NOT NULL, 
	"producer_id" INT REFERENCES "user" NOT NULL,
	"graphic_id" INT REFERENCES "user" NOT NULL,
	"videographer_id" INT REFERENCES "user" NOT NULL,
	"producer_hire" BOOLEAN,
	"graphic_hire" BOOLEAN,
	"video_hire" BOOLEAN
);
	
CREATE TABLE "calendar" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INT REFERENCES "project" NOT NULL,
	"start_date" DATE,
	"end_date" DATE
);
	
CREATE TABLE "communication" (
	"id" SERIAL PRIMARY KEY,
	"from_user_id" INT REFERENCES "user" NOT NULL,
	"to_user_id" INT REFERENCES "user" NOT NULL,
	"message" VARCHAR(500),
	"contact_message" VARCHAR(500)
);