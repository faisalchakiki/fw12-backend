-- Active: 1669013533009@@127.0.0.1@5432@cinephile@public
CREATE DATABASE cinephile;

CREATE Table "users" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "avatar" VARCHAR(255),
    "phone_number" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255),
    "status_user" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM users;
INSERT INTO users (first_name,last_name,avatar,phone_number,email,password,status_user) VALUES ('Sri', 'Asih', 'sri.jpg', '084477588755', 'sri@gmail.com','sri123','Moviegoers');

CREATE TABLE "movies"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255) NOT NULL,
    "poster" VARCHAR(255),
    "date_release" DATE,
    "director" VARCHAR(255),
    "duration" VARCHAR(255),
    "synopsis" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
INSERT INTO movies (title,poster,date_release,director,duration,synopsis) VALUES ('Sri Asih', 'sriasih.png', now(), 'George', 115,'lorem ipsum');


CREATE Table "forgot_accounts"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255),
    "code" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM forgot_accounts;
INSERT INTO forgot_accounts (email , code) VALUES ('sri@gmail.com','334423');


CREATE Table "genres"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM genres;
INSERT INTO genres (name) VALUES ('Sci_Fi');


CREATE Table "movie_genre"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "id_movie" INT,
    "id_genre" INT,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM movie_genre;
INSERT INTO movie_genre (id_movie , id_genre) VALUES (1 , 4);


CREATE Table "casts"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM casts;
INSERT INTO casts (name) VALUES ('Chris Evans');


CREATE Table "casts_movie"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "id_movie" INT,
    "id_cast" INT,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM casts_movie;
INSERT INTO casts_movie (id_movie , id_cast) VALUES (1 , 2);


CREATE Table "cinemas"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "logo" VARCHAR(255),
    "address" VARCHAR(255),
    "city" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM cinemas;
INSERT INTO cinemas (name, logo, address, city) VALUES ('cineone21','cineone.jpg','Jalan Ahmad Yani, Tegal Barat', 'Kota Tegal');


CREATE Table "schedule_movie"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "id_movies" INT,
    "id_cinema" INT,
    "price" BIGINT,
    "date_start" DATE,
    "date_end" DATE, 
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM schedule_movie;
INSERT INTO schedule_movie (id_movies , id_cinema, price,date_start, date_end) VALUES (3, 2, 30000, now(), '2022-11-28');


CREATE Table "times"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time" TIME,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM times;
INSERT INTO times (time) VALUES ('12:30');


CREATE Table "schedule_time"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "id_time" INT,
    "id_schedule" INT,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM schedule_time;
INSERT INTO schedule_time (id_time, id_schedule) VALUES (1 , 1);

CREATE Table "bookings"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "date_booking" DATE,
    "id_users" INT,
    "id_movie" INT,
    "id_cinema" INT,
    "id_status" INT,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM bookings;
INSERT INTO bookings (date_booking , id_users, id_movie, id_cinema, id_status) VALUES (now(), 2, 3, 2, 1);


CREATE Table "status_booking"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM status_booking;
INSERT INTO status_booking (name) VALUES ('used');


CREATE Table "reserved_seats"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seat_num" INT,
    "id_booking" INT,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM reserved_seats;
INSERT INTO reserved_seats (seat_num , id_booking) VALUES ( 13, 2);


CREATE Table "subscriber"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255),
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);
SELECT * FROM subscriber;
INSERT INTO subscriber (email) VALUES ('sri@gmail.com');

