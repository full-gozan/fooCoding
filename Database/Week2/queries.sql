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
 use new_world;
select c.name, l.language from country c
inner join countrylanguage l on c.code = l.countrycode
where l.isofficial = "T"
and c.region = 'Middle East'
and l.language = 'Arabic';