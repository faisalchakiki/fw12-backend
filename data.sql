-- Active: 1669013533009@@127.0.0.1@5432@cinephile@public
CREATE DATABASE cinephile;
CREATE Table "users" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "avatar" VARCHAR(255),
    "phoneNumber" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255),
    "statusUser" VARCHAR(255) DEFAULT 'Moviegoers',
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE users; 
SELECT * FROM users;
INSERT INTO users ("firstName","lastName","avatar","phoneNumber","email","password","statusUser") VALUES ('faisal', 'chakiki', 'faisal.jpg', '084477588755', 'faisal@gmail.com','faisal123','Development');

CREATE TABLE "movies"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255) NOT NULL,
    "poster" VARCHAR(255),
    "dateRelease" DATE,
    "director" VARCHAR(255),
    "duration" VARCHAR(255),
    "synopsis" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE movies; 
SELECT * FROM movies;
INSERT INTO movies ("title","poster","dateRelease","director","duration","synopsis") VALUES ('Sri Asih', 'sriasih.png', '2022-11-01', 'George', 115,'lorem ipsum');


CREATE Table "forgot_accounts"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255),
    "code" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE forgot_accounts; 
SELECT * FROM forgot_accounts;
INSERT INTO forgot_accounts ("email" , "code") VALUES ('sri@gmail.com','334423');


CREATE Table "genres"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE genres; 
SELECT * FROM genres;
INSERT INTO genres ("name") VALUES ('Fantasy');


CREATE Table "movie_genre"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "idMovie" INT,
    "idGenre" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE movie_genre; 
SELECT * FROM movie_genre;
INSERT INTO movie_genre ("idMovie" , "idGenre") VALUES (1 , 4);


CREATE Table "casts"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255) UNIQUE,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE casts; 
SELECT * FROM casts;
INSERT INTO casts (name) VALUES ('Chris Evans');


CREATE Table "casts_movie"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "idMovie" INT,
    "idCast" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE casts_movie; 
SELECT * FROM casts_movie;
INSERT INTO casts_movie ("idMovie" , "idCast") VALUES (1 , 2);


CREATE Table "cinemas"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "logo" VARCHAR(255),
    "address" VARCHAR(255),
    "city" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE cinemas; 
SELECT * FROM cinemas;
INSERT INTO cinemas ("name", "logo", "address", "city") VALUES ('cineone21','cineone.jpg','Jalan Ahmad Yani, Tegal Barat', 'Kota Tegal');


CREATE Table "schedule_movie"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "idMovies" INT,
    "idCinema" INT,
    "price" BIGINT,
    "dateStart" DATE,
    "dateEnd" DATE, 
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE schedule_movie; 
SELECT * FROM schedule_movie;
INSERT INTO schedule_movie ("idMovies" , "idCinema", "price","dateStart", "dateEnd") VALUES (1, 1, 30000, now(), '2022-11-28');


CREATE Table "times"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time" TIME,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE times; 
SELECT * FROM times;
INSERT INTO times (time) VALUES ('18:40');


CREATE Table "schedule_time"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "idTime" INT,
    "idSchedule" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE schedule_time; 
SELECT * FROM schedule_time;
INSERT INTO schedule_time ("idTime", "idSchedule") VALUES (1 , 1);

CREATE Table "bookings"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "dateBooking" DATE,
    "idUsers" INT,
    "idMovie" INT,
    "idCinema" INT,
    "idStatus" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE bookings; 
SELECT * FROM bookings;
INSERT INTO bookings ("dateBooking" , "idUsers", "idMovie", "idCinema", "idStatus") VALUES (now(), 1, 1, 1, 1);


CREATE Table "status_booking"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE status_booking; 
SELECT * FROM status_booking;
INSERT INTO status_booking (name) VALUES ('active');


CREATE Table "reserved_seats"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNum" INT,
    "idBooking" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE reserved_seats; 
SELECT * FROM reserved_seats;
INSERT INTO reserved_seats ("seatNum" , "idBooking") VALUES ( 13, 1);


CREATE Table "subscriber"(
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);
DROP TABLE subscriber; 
SELECT * FROM subscriber;
INSERT INTO subscriber (email) VALUES ('faisal@gmail.com');


-- RELASI

ALTER Table "schedule_time"
ADD Constraint fk_schedule_time
FOREIGN KEY ("idTime") REFERENCES times(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_time"
ADD Constraint fk_time_movie
FOREIGN KEY ("idSchedule") REFERENCES schedule_movie(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_movie"
ADD Constraint fk_schedule_movie
FOREIGN KEY ("idMovies") REFERENCES movies(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_movie"
ADD Constraint fk_schedule_cinema
FOREIGN KEY ("idCinema") REFERENCES cinemas(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "reserved_seats"
ADD Constraint fk_reserved_booking
FOREIGN KEY ("id") REFERENCES bookings(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "movie_genre"
ADD Constraint fk_movie_genre
FOREIGN KEY ("idMovie") REFERENCES movies(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "movie_genre"
ADD Constraint fk_genre_movie
FOREIGN KEY ("idGenre") REFERENCES genres(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "casts_movie"
ADD Constraint fk_cast_movie
FOREIGN KEY ("idCast") REFERENCES casts(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "casts_movie"
ADD Constraint fk_movies_cm
FOREIGN KEY ("idMovie") REFERENCES movies(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD Constraint fk_booking_users
FOREIGN KEY ("idUsers") REFERENCES users(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD Constraint fk_booking_movie
FOREIGN KEY ("idMovie") REFERENCES movies(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD Constraint fk_booking_cinema
FOREIGN KEY ("idCinema") REFERENCES cinemas(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD Constraint fk_booking_status
FOREIGN KEY ("idStatus") REFERENCES status_booking(id)
ON DELETE CASCADE ON UPDATE CASCADE;

