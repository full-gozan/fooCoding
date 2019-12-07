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
    name VARCHAR(30) NOT NULL
    city_symbol VARCHAR(30) NOT NULL UNIQUE,
    population INT NOT NULL,
    country VARCHAR(30) NOT NULL,
    PRIMARY KEY(city_symbol),
    FOREIGN KEY(city_key) REFERENCES country(phone_key)
  );
   
   
   INSERT INTO city
      (city_key,country,name,city_symbol,population)
    values
      (46, 'SWEDEN',malmö,'MLM', 10000),
      (44,'Filand',lahti,'LHT ', 70000),
      (33,'England',lister,'LST', 1800000),
      (34,'SPAIN',barcelona,'BAR', 120000),
      (964,'Iraq',basrah,'BAS ', 15000),
      (961,'Lebenon', trablis,'TRA', 1100000),
      (49,'Germany', dortmond,'DRT', 190000),
       (212,'moroco', moroco,'MOR ', 24000000),
      (86,'china',shanghanj,'HNG', 1000000),
      (90,'turkey', anqra,'ANQ', 100000);
      
      INSERT INTO country
      (phone_key,name,location,population)
    values
      (46, 'SWEDEN','Stockholm', 100000000),
      (44,'Filand','Helsingfors ', 700000040),
      (33,'England','london', 1800204000),
      (34,'SPAIN','Madrid', 1200023400),
      (964,'Iraq','baghdad ', 150002320),
      (961,'Lebenon', 'beirut', 1102302000),
      (49,'Germany', 'Berlin', 190023000),
       (212,'moroco', 'moroco ', 24023023000),
      (86,'china','bejing', 1000230020),
      (90,'turkey', 'istanbul', 1900230200);