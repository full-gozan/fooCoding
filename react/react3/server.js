const mysql = require('mysql');
const express = require('express');
const app =express();
const parser =require('body-parser')
app.use(parser.json());

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


app.get('/country',(req,res)=>{
    mysqlConnection.query('SELECT country.Name FROM new_world.country where country.Region="Middle East"',(err,rows,fields)=>{
if(!err)
res.send( rows);
else
console.log('err');


    })
});

const PORT =  5000;

app.listen(PORT, () => `Server running on port ${PORT}`);