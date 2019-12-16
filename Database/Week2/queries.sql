prepare get_capital from 
'
SELECT city.Name FROM city
inner join country on
country.Code = city.CountryCode AND country.Capital = city.ID

where country.Name = ?';
set @land = 'IRAQ';
execute get_capital using @land;


/* List all the languages spoken in the region Y (Accept Y from user)*/ 
use new_world;
prepare get_language from 
"SELECT Language FROM countrylanguage inner join country on country.Code = countrylanguage.CountryCode where country.Region = ?";
set @region = 'Middle East';
execute get_language using @region;

/* Find the number of cities in which language Z is spoken (Accept Z from user)*/
use new_world;
prepare get_cities_numbers from 
"select count(city.id) from city inner join countrylanguage on city.countrycode = countrylanguage.countrycode where countrylanguage.language = ?;";
set @lang = 'Arabic';
execute get_cities_numbers using @lang;

/* List all the continents with the number of languages spoken in each continent*/
 select country.continent, count(distinct(countrylanguage.language))as languages_number from country inner join countrylanguage on country.code = countrylanguage.countrycode group by country.continent;

/* Are there any countries that have

Same official language
Same region
If yes, display those countries.
If no, display TRUE or FALSE */
DELIMITER //
 CREATE PROCEDURE commen_languages(
in country1 VARCHAR(255),
in country2 VARCHAR(255)
)
BEGIN
(select l.language from countrylanguage l
inner join  country c  on c.code=  l.countrycode
where l.isofficial = "T"
and  c.Name = country1)
union
(select l.language from countrylanguage l
inner join  country c  on c.code=  l.countrycode
where l.isofficial = "T"
and c.Name = country2);

    
END //
DELIMITER;
call commen_languages('Arabic','Middle East');