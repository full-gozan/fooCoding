  create database world;

   use world;
CREATE TABLE country
(
  phone_key  INT NOT NULL UNIQUE ,
 name VARCHAR (20) NOT NULL UNIQUE,
 capital VARCHAR(20) NOT NULL ,
 population INT NOT NULL,
 PRIMARY KEY(phone_key));

  CREATE TABLE city
  (
     city_key INT NOT NULL,
    name VARCHAR(30) NOT NULL UNIQUE,
    population INT NOT NULL,
    location VARCHAR(30) NOT NULL,
    PRIMARY KEY(name),
    FOREIGN KEY(city_key) REFERENCES country(phone_key)
  );
   
   
   INSERT INTO country
      (phone_key,name,capital,population)
    values
      (46, 'SWEDEN','Stockholm', 100000),
      (44,'Filand','Helsingfors ', 700000),
      (33,'England','london', 1800000),
      (34,'SPAIN','Madrid', 120000),
      (964,'Iraq','baghdad ', 15000000),
      (961,'Lebenon', 'beirut', 110000000),
      (49,'Germany', 'Berlin', 1900000),
       (212,'moroco', 'moroco ', 24000000),
      (86,'china','bejing', 1000000),
      (90,'turkey', 'istanbul', 100000);
      
      INSERT INTO country
      (phone_key,name,capital,population)
    values
      (46, 'SWEDEN','Stockholm', 10000),
      (44,'Filand','Helsingfors ', 7000),
      (33,'England','london', 18000),
      (34,'SPAIN','Madrid', 12000),
      (964,'Iraq','baghdad ', 15000),
      (961,'Lebenon', 'beirut', 11000),
      (49,'Germany', 'Berlin', 19000),
       (212,'moroco', 'moroco ', 24000),
      (86,'china','bejing', 1000),
      (90,'turkey', 'istanbul', 19000);