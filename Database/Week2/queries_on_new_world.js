const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CelineAhmed2018',
  database: 'new_world',
});

//connection to database
mysqlConnection.connect(function (err){
    if(err){
        console.log('failed to connect to the database', err);
        
    }
    else{
        console.log("connected to the database!");
        
    }
})
//run set of queries 
let index=0;
const queries=[
    'SELECT city.Name FROM city inner join country on country.Code = city.CountryCode AND country.Capital = city.ID where country.Name ="Iraq"',
    'SELECT Language FROM countrylanguage inner join country on country.Code = countrylanguage.CountryCode where country.Region = "Middle East"',
    'select count(city.id) from city inner join countrylanguage on city.countrycode = countrylanguage.countrycode where countrylanguage.language = "Arabic"',
    'select country.continent, count(distinct(countrylanguage.language))as languages_number from country inner join countrylanguage on country.code = countrylanguage.countrycode group by country.continent;',
    'select c.name, l.language from country c inner join countrylanguage l on c.code = l.countrycode where l.isofficial = "T" and c.region = "Middle East" and l.language = "Arabic"'

].map (query=>mysqlConnection.query(
    query,(mess)=>{
        index++;
                console.log('succeeded! the '+ index+'th query was added correctly');
            }
    )            
)

