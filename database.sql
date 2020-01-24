
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Create this table table after the user_role table or you'll get an error saying there is no reference to to the user_role table
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
INSERT INTO "user" ("username", "password", "street_address", "city", "state", "zipcode", "role_id", "lat", "long", "bio", "profile_img")
VALUES	('Matty_B_Rapz', '$2b$10$7.okoSIygMrhYC2RbvDpP.NvbAyrABU3WUIAV1Wvrdwb.EJUpyUWC', '1007 W 24 St ', 'Kansas City', 'Missouri', '64108', '2', '', '', 'Yoo I make siiick EDM', 'https://trackmeet-solo.s3.amazonaws.com/d2e3d77c-2775-41db-bc90-0e9d40047f20_Matt.3.jpg'),
		('CallanS', '$2b$10$dMX2xwHsikouXGHmF.2eCedEQuf1iArA/6XrXMPNaGlmapNloXfhu', '12401 Grandview Rd', 'Grandview', 'Missouri', '64030', '2', '', '', `Hey I'm Callan. Dont call me Cal`, 'https://trackmeet-solo.s3.amazonaws.com/8924a4c4-58b4-483d-a7f7-0efe35b21943_Callan.JPG'),
		('Wyld_Kyl', '$2b$10$F3gvqGgfQyj8MGVc3JC0geAFGoR4Q26RG6kgxViLW7uUdCdCPhQKu', '3600 Main St', 'Kansas City', 'Missouri', '64111', '2', '', '', 'Eat. Prey. Sound', 'https://trackmeet-solo.s3.amazonaws.com/2a082b43-509a-4ab9-9687-5a46fd691a4b_Kyle.jpg'),
		('Tony Two-Tone', '$2b$10$kCsekapz0gK9YwhyrgP.s.f81nDZWQpIccy1F2YaHhNCzgnOmbX6C', '629 E Minor Dr Suite #2', 'Kansas City', 'Missouri', '64131', '3', '', '', `Can't escape the 80's`, 'https://trackmeet-solo.s3.amazonaws.com/bc8cb1c3-e851-4657-9607-58d5d0f574bd_Screenshot2020-01-2412.27.58.png')
		('Dane', '$2b$10$MogJ8Ks4QV6ucpRBuhUEg.PmMb4yJoaK2hi4qXaTJ/eeVK8/RA4MG', '5901 Grand Ave', 'Kansas City', 'Missouri', '64113', '3', '', '', 'I can talk fast and designer faster. Try and keep up', 'https://trackmeet-solo.s3.amazonaws.com/56a5bc4e-aeb1-4995-98da-2f3374453212_Screenshot2020-01-2412.01.03.png'),
		('Chuck', '$2b$10$U3OKUf9EDocg5jlPpfFpwerzM7MXtGEIViCBa7ASaiGMuEAGA9Bom', '602 Westport Rd', 'Kansas City', 'Missouri', '64111', '3', '', '', `I'll give it a shot`, 'https://trackmeet-solo.s3.amazonaws.com/3d01c14b-62e5-4972-a82e-dec044a598ac_Screenshot2020-01-2412.14.39.png'),
		('Lucas', '$2b$10$ZtbbZgS8xGelcOgbclixHujQS9G9ySAG614TumPpPYpwdS9pGyCrS', '8000 Perry St', 'Overland Park', 'Kansas', '66204', '4', '', '', `I Vlog so she doesn't have to.`, 'https://trackmeet-solo.s3.amazonaws.com/e71a646b-e77d-4f30-83dd-742b47490b53_IMG_1123.jpg'),
		('J Sudzy', '$2b$10$KFjS0qCkKBxDs0zZEy9uEOT5bnN7mYOC0OtP9EdprgUu5Ul8SIeuO', '15430 Andrews Rd', 'Kansas City', 'Missouri', '64147', '4', '', '', `Pictures so good, you'll wanna talk to it`, 'https://trackmeet-solo.s3.amazonaws.com/ec151b0b-5151-4373-a30d-11c7b436cc29_IMG_1125.jpg'),
		('Walter Media', '$2b$10$qOS8V5TsPuLCRzmjYVoaau2A9jupaVZ2UT76E1s30h4UthyTfdrWW', '20 NW Chipman Rd #200', `Lee's Summit`, 'Missouri', '64063', '4', '', '', `Your band sucks, but at least you'll look cool.`, 'https://trackmeet-solo.s3.amazonaws.com/584c0c64-a5ec-4e8c-a831-91a6c1b3d730_IMG_1124.jpg'),;

--You have to create this table first!
CREATE TABLE "user_roles" (
	"id" SERIAL PRIMARY KEY,
	"role_name" VARCHAR (20)
);
INSERT INTO "user_roles" ("role_name" )
VALUES 	('artist'),
		('producer'),
		('graphic designer'),
		('videographer');

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