Active: 1669013533009@@127.0.0.1@5432@cinephile@public
CREATE Table
    "users" (
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

INSERT INTO users (
"firstName",
"lastName",
"avatar",
"phoneNumber",
"email",
"password",
"statusUser")
VALUES (
        'faisal',
        'chakiki',
        'faisal.jpg',
        '084477588755',
        'faisal@gmail.com',
        'faisal123',
        'Development'
);

CREATE TABLE
    "movies"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title" VARCHAR(255) NOT NULL,
        "poster" VARCHAR(255),
        "dateRelease" DATE,
        "director" VARCHAR(255),
        "duration" VARCHAR(255),
        "synopsis" TEXT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );


INSERT INTO
    movies (
        "title",
        "poster",
        "dateRelease",
        "director",
        "duration",
        "synopsis"
    )
VALUES (
        'Black Adam',
        '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
        '2022-10-19',
        'Anonim',
        '120',
        'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.'
    ), (
        'Paradise City',
        '/xdmmd437QdjcCls8yCQxrH5YYM4.jpg',
        '2022-11-11',
        'Anonim',
        '120',
        'Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.'
    ), (
        'Emily the Criminal',
        '/iZvzMpREGiqDQ5eYbx8z70qPgst.jpg',
        '2022-08-12',
        'Anonim',
        '115',
        'Emily, who is saddled with student debt and locked out of the job market due to a minor criminal record, gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.'
    ), (
        'Medieval',
        '/4njdAkiBdC5LnFApeXSkFQ78GdT.jpg',
        '2022-09-08',
        'Anonim',
        '115',
        'The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.'
    ), (
        'Smile',
        '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
        '2022-09-23',
        'Anonim',
        '115',
        'After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she cant explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.'
    ), (
        'Black Panther: Wakanda Forever',
        '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
        '2022-11-09',
        'Anonim',
        '115',
        'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.'
    ), (
        'On the Line',
        '/a14BbSHvLgzCdbDD6tAL8OBVKL1.jpg',
        '2022-10-31',
        'Anonim',
        '115',
        'A provocative and edgy radio host must play a dangerous game of cat and mouse with a mysterious caller who`s kidnapped his family and is threatening to blow up the whole station.'
    ), (
        'The Woman King',
        '/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
        '2022-09-15',
        'Anonim',
        '115',
        'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.'
    ), (
        'The Soccer Football Movie',
        '/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg',
        '2022-11-09',
        'Anonim',
        '115',
        'When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist " Weird Al " Yankovic from stealing their talent.'
    ), (
        'Terrifier 2',
        '/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg',
        '2022-10-06',
        'Anonim',
        '115',
        'After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art`s evil intent.'
    );

CREATE Table
    "forgot_accounts"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "idUser" INT,
        "email" VARCHAR(255),
        "code" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "genres"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO genres ("name") VALUES (' Action ');

INSERT INTO genres ("name") VALUES (' Adventure ');

INSERT INTO genres ("name") VALUES (' Animation ');

INSERT INTO genres ("name") VALUES (' Comedy ');

INSERT INTO genres ("name") VALUES (' Crime ');

INSERT INTO genres ("name") VALUES (' Documentary ');

INSERT INTO genres ("name") VALUES (' Drama ');

INSERT INTO genres ("name") VALUES (' Family ');

INSERT INTO genres ("name") VALUES (' Fantasy ');

INSERT INTO genres ("name") VALUES (' History ');

INSERT INTO genres ("name") VALUES (' Horror ');

INSERT INTO genres ("name") VALUES (' Music ');

INSERT INTO genres ("name") VALUES (' Mystery ');

INSERT INTO genres ("name") VALUES (' Romance ');

INSERT INTO genres ("name") VALUES (' Sci - Fi ');

INSERT INTO genres ("name") VALUES (' Thriller ');

INSERT INTO genres ("name") VALUES (' War ');

INSERT INTO genres ("name") VALUES (' Western ');

CREATE Table
    "movie_genre"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "idMovie" INT,
        "idGenre" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO movie_genre ("idMovie" , "idGenre") VALUES (1 , 4);

CREATE Table
    "casts"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) UNIQUE,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO casts (name) VALUES (' Chris Evans ');

CREATE Table
    "casts_movie"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "idMovie" INT,
        "idCast" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO casts_movie ("idMovie" , "idCast") VALUES (1 , 2);

CREATE Table
    "cinemas"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255),
        "logo" VARCHAR(255),
        "address" VARCHAR(255),
        "city" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO
    cinemas (
        "name",
        "logo",
        "address",
        "city"
    )
VALUES (
        'cineone21',
        'cineone.jpg',
        'Jalan Ahmad Yani,Tegal Barat',
        'Kota Tegal'
    );

CREATE Table
    "schedule_movie"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "idMovies" INT,
        "idCinema" INT,
        "price" BIGINT,
        "dateStart" DATE,
        "dateEnd" DATE,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "times"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "time" TIME,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "schedule_time"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "idTime" INT,
        "idSchedule" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "bookings"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "dateBooking" DATE,
        "idUsers" INT,
        "idMovie" INT,
        "idCinema" INT,
        "idStatus" INT,
        "idPayMethod" INT,
        "fullName" VARCHAR(255),
        "email" VARCHAR(255),
        "phoneNumber" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );


CREATE Table
    "status_booking"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) unique,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

INSERT INTO status_booking (name) VALUES ('active');

INSERT INTO status_booking (name) VALUES ('used');

INSERT INTO status_booking (name) VALUES ('expired');

CREATE Table
    "reserved_seats"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "seatNum" INT,
        "idBooking" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "subscriber"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE Table
    "payment_method"(
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) NOT NULL UNIQUE,
        "logo" VARCHAR(255),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );


INSERT INTO payment_method (name) VALUES ('BRI');

INSERT INTO payment_method (name) VALUES ('BCA');

INSERT INTO payment_method (name) VALUES ('DANA');

-- RELASI

ALTER Table "bookings"
ADD
    Constraint fk_paymethod_booking FOREIGN KEY ("idPayMethod") REFERENCES payment_method(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_time"
ADD
    Constraint fk_schedule_time FOREIGN KEY ("idTime") REFERENCES times(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_time"
ADD
    Constraint fk_time_movie FOREIGN KEY ("idSchedule") REFERENCES schedule_movie(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_movie"
ADD
    Constraint fk_schedule_movie FOREIGN KEY ("idMovies") REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "schedule_movie"
ADD
    Constraint fk_schedule_cinema FOREIGN KEY ("idCinema") REFERENCES cinemas(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "reserved_seats"
ADD
    Constraint fk_reserved_booking FOREIGN KEY ("id") REFERENCES bookings(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "movie_genre"
ADD
    Constraint fk_movie_genre FOREIGN KEY ("idMovie") REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "movie_genre"
ADD
    Constraint fk_genre_movie FOREIGN KEY ("idGenre") REFERENCES genres(id) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER Table "casts_movie"
ADD
    Constraint fk_movies_cm FOREIGN KEY ("idMovie") REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD
    Constraint fk_booking_users FOREIGN KEY ("idUsers") REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD
    Constraint fk_booking_movie FOREIGN KEY ("idMovie") REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD
    Constraint fk_booking_cinema FOREIGN KEY ("idCinema") REFERENCES cinemas(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "bookings"
ADD
    Constraint fk_booking_status FOREIGN KEY ("idStatus") REFERENCES status_booking(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER Table "casts_movie"
ADD Constraint fk_casts_movie FOREIGN KEY ("idCast") REFERENCES casts(id) ON DELETE CASCADE ON UPDATE CASCADE;

Mengambil Bulan di movie (Upcoming Movie)

SELECT
    m.*,
    string_agg(g.name, ',') AS genre
FROM movies m
    LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
    LEFT JOIN genres g ON g.id = mg."idGenre"
WHERE
    date_part('month', "dateRelease") :: TEXT = COALESCE(
        NULLIF('', ''),
        date_part('month', current_date) :: TEXT
    )
    AND date_part('year', "dateRelease") :: TEXT = COALESCE(
        NULLIF('', ''),
        date_part('year', current_date) :: TEXT
    )
GROUP BY m."id";

SELECT
    m.*,
    string_agg(g.name, ', ') as genres,
    string_agg(c.name, ', ') as casts
FROM movies m
    JOIN movie_genre mg ON mg."idMovie" = m."id"
    JOIN genres g ON g.id = mg."idGenre"
    JOIN casts_movie cm ON cm."idMovie" = m."id"
    JOIN casts c ON c.id = cm."idCast"
WHERE m.id =
GROUP BY m.id


Schedule Movie is Join Full
SELECT
  sm.*,
  c."name",
  c."city",
  c."logo",
  c."address",
  array_agg(st.time) as times
FROM schedule_movie sm
  LEFT JOIN schedule_time st ON st."idSchedule" = sm."id"
  LEFT JOIN cinemas c ON c."id" = sm."idCinema"
WHERE sm."idMovies" = 1 group by sm."idMovies", c."id", sm."id"

SELECT DISTINCT
  m.*,
  string_agg(g.name, ',') AS "genresMovie",
  sm."dateStart",
  sm."dateEnd"
FROM schedule_movie sm
  JOIN movies m ON sm."idMovies" = m."id"
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON g.id = mg."idGenre"
WHERE
  current_date BETWEEN sm."dateStart"
  AND sm."dateEnd"
GROUP BY m."id", m."title", sm."idMovies", sm."dateStart", sm."dateEnd",sm."id"


SELECT  FROM payment_method

INSERT INTO "reserved_seats" ("seatNum","idBooking") VALUES ('E4' ,7) RETURNING *;

SELECT 
b.id,
b."dateBooking",
b."timeBooking",
c.logo,
m.title
FROM bookings b 
JOIN movies m ON b."idMovie" = m."id"
JOIN cinemas c ON c."id" = b."idCinema"
WHERE "idUsers" = 1;

SELECT DISTINCT
b.id,
b."dateBooking",
b."timeBooking",
b."idStatus",
b.total,
string_agg(g.name,',') AS "genresMovie",
m.title
FROM bookings b 
JOIN movies m ON b."idMovie" = m."id"
LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
LEFT JOIN genres g ON mg."idGenre" = g."id"
WHERE b."id" = 13 GROUP BY b.id,m.title;

SELECT DISTINCT
b.id,
array_agg(rs."seatNum") AS "seatBooking"
FROM bookings b 
JOIN reserved_seats rs ON rs."idBooking" = b.id
WHERE b."id" = 13 GROUP BY b.id;