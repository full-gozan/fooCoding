# Homework week 1

Using MySQL-client 
1. create a database **world**
2. create a table country
3. create a table city 
4. Insert 10-20 rows in each table with relevant fields. 

Choose the fields/columns such that you should be able to answer the following queries:
(Queries 6-10 are bonus queries and require the knowledge of joins, group by and having clauses)

Import the database **new_world** (using the new_world.sql-file), 
then query (using select statements) the **new_world** database to answer following questions
1. What are the names of countries with population greater than 8 million
2. What are the names of countries that have “land” in their names ?
3. What are the names of the cities with population in between 500,000 and 1 million ?
4. What's the name of all the countries on the continent ‘Europe’ ?
5. List all the countries in the descending order of their surface areas.
6. What are the names of all the cities in the Netherlands?
7. What is the population of Rotterdam ?
8. What's the top 10 countries by Surface Area ?
9. What's the top 10 most populated cities?
10. What is the population of the world ?


# Importing a MySQL-dump into an instance:
- in a console, change directory to the Week1 directory. Then type 
    mysql < new_world.sql
- in MySQL Workbench, do
    click "Server" -> "Data Import"
    choose "Import from self-contained file", and browse to the Week1/new_world.sql-file
    click "Start import"

Homework should be handed in by writing a node-JS program, that creates the database (step 1) and run the queries (step 2)
( or at least as a text-file with the sql-queries and results (either in one big file, or as separate files) )
