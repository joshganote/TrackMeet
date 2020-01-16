
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
DROP TABLE "user";
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
    "long" VARCHAR (80)
);
INSERT INTO "user" ("username", "password", "street_address", "city", "state", "zipcode", "role_id", "lat", "long")
VALUES	('Josh', '1234', '123 E st', 'lees Summit', 'MO', '64081', '1', '39.099728', '-94.578568'),
		('Callan', '2345', '234 E st', 'grandview', 'MO', '64081', '2', '39.099728', '-94.578568'),
		('Matt', '3456', '345 E st', 'blue springs', 'MO', '64081', '3', '39.099728', '-94.578568'),
		('Toby', '4567', '456 E st', 'oak park', 'KS', '64081', '4', '39.099728', '-94.578568');
INSERT INTO "user" ("username", "password", "street_address", "city", "state", "zipcode", "role_id", "lat", "long")
VALUES	('Steve', '5678', '456 E st', 'oak park', 'KS', '64081', '1', '39.099728', '-94.578568');

DROP TABLE "user_roles";
CREATE TABLE "user_roles" (
	"id" SERIAL PRIMARY KEY,
	"role_name" VARCHAR (20)
);
INSERT INTO "user_roles" ("role_name" )
VALUES 	('artist'),
		('producer'),
		('graphic designer'),
		('videographer');

DROP TABLE "profile";
CREATE TABLE "profile" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"bio" VARCHAR (500),
	"profile_img" VARCHAR (100) 
);
INSERT INTO "profile" ("user_id", "bio", "profile_img" )
VALUES (1, 'Im an artist', 'fm84.jpg'),
		(2, 'Im a producer', 'guitar.png'),
		(3, 'Im a graphic designer', 'IMG_0996.PNG'),
		(4, 'Im a videographer', 'IMG_0998.jpg');

DROP TABLE "portfolio";
CREATE TABLE "portfolio" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"media_path" VARCHAR (100) 
);
INSERT INTO "portfolio" ("user_id", "media_path" )
VALUES  (1, 'artist portfolio'),
		(2, 'producer portfolio'),
		(3, 'graphic designer portfolio'),
		(4, 'videographer portfolio');
		
DROP TABLE "project";		
CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
	"artist_id" INT REFERENCES "user" NOT NULL, 
	"producer_id" INT REFERENCES "user" NOT NULL,
	"graphic_id" INT REFERENCES "user" NOT NULL,
	"videographer_id" INT REFERENCES "user" NOT NULL
);
INSERT INTO "project" ("artist_id", "producer_id", "graphic_id", "videographer_id")
VALUES  (1, 2, 3, 4);

DROP TABLE "calendar";		
CREATE TABLE "calendar" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INT REFERENCES "project" NOT NULL,
	"start_date" DATE,
	"end_date" DATE
);
INSERT INTO "calendar" ("project_id", "start_date", "end_date" )
VALUES (1, '01/24/20', '1/25/20');

DROP TABLE "communication";		
CREATE TABLE "communication" (
	"id" SERIAL PRIMARY KEY,
	"from_user_id" INT REFERENCES "user" NOT NULL,
	"to_user_id" INT REFERENCES "user" NOT NULL,
	"message" VARCHAR(500),
	"contact_message" VARCHAR(500)
);
INSERT INTO "communication" ("from_user_id", "to_user_id", "message", "contact_message" )
VALUES (1, 2, 'artist to producer', 'please contact'),
		(1, 3, 'artist to graphic designer', 'please contact'),
		(1, 4, 'artist to videographer', 'please contact');

SELECT * from "user";
JOIN "user_roles" ON "user"."role_id" = "user_roles"."id"
JOIN "portfolio" ON "user"."id" = "portfolio"."user_id"
JOIN "profile" ON "user"."id" = "profile"."user_id"
JOIN "project" ON "user"."id" = "project"."artist_id"
JOIN "communication" ON "user"."id" = "communication"."from_user_id";

SELECT * from "user"
JOIN "user_roles" ON "user"."role_id" = "user_roles"."id";

SELECT * from "project"
JOIN "calendar" ON "project_id" = "calendar"."id";