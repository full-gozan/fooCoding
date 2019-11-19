# Lesson 2: SQL, group by, having and joins.

Objective: This class introduces SQL in more detail. MySQL joins (inner, self, left and right) are further discussed and are explained with demonstration (Employee table with
**reportsTo** field and Department table with its PK in Employee table is
suitable for this demonstration). Also, subqueries and programming objects stored in the database will be discussed.
We'll also have a look at SQL injection and other security considerations when designing the application.
Database rights (grants) will be explained.

A brief overview on NoSQL-databases will be given, including MongoDB.

Promise based JavaScript program with SQL prepared statements should be
understood by students. The program can be found in the Week2 folder (Credits:
@remarcmij)

This class invites students to discuss Entity Relationship Diagram (ERD).
Students should be able to explain their choices of entities, relationships, attributes etc.
SQL injection should be explained.

## Pre-Class Readings

Before arriving to class on Sunday, please watch all of the videos in [this video playlist](https://www.lynda.com/SharedPlaylist/0d62f3e4428e44ada89466cdbc296fc0) on Lynda.

Also, please read the following page that explains the ACID database model.
- [The ACID Database Model](https://www.thoughtco.com/the-acid-model-1019731)

## Topics to be covered

### NOT NULL and default values in CREATE table statement

Following links are worth reading.
- [Working with nulls] (https://dev.mysql.com/doc/refman/8.0/en/working-with-null.html)
- [TO DEFAULT or TO NULL] (https://blog.jooq.org/2014/11/11/have-you-ever-wondered-about-the-difference-between-not-null-and-default/)

### Foreign key

Creating foreign key while creating the table
```
CREATE TABLE Employee (
other fields,
dept_id int,
foreign key (dept_id)
references Department(id)
);
```

Creating the foreign key by explicitly adding the constraint
```
ALTER TABLE Employee ADD CONSTRAINT fk_dept foreign key (dept_id) references Department(id);
```


### Database dump

A database dump (aka SQL dump) contains a record of the table structure
and/or the data from a database and is usually in the form of a list of SQL statements.


- Collecting the dump of an existing database from terminal `mysqldump -uroot -p database > dump-file.sql`
- Applying the dump from mysql command prompt `source /path/to/the/dump/file`
- Applying the dump from the terminal `mysql -uroot -p [database] < /path/to/the/dump/file`  

Please refer to the MySQL manual to look at the possible options.  
 ( I usually recommend adding `--routines` (to include stored procedures/functions) and `--hex-blob` (to export/import binary data correctly) )

### Group by and Having clauses

- *Group by* clause is used to group rows with same values.
- It can be used in conjunction with aggregate functions (E.g. min, max).
- The queries that contain the *group by* clause only return a single row for every grouped item.
- *Having* clause restricts the query results, mostly used together with *group by* clause.

### INSERT INTO table SET syntax

```
INSERT INTO Department SET dept_id=101, dept_name='fun', dept_head='unmesh';
```

### Complicated values to store in MySQL
- Storing prices (floating point errors)
- Storing dates (datetime vs. timestamp)
- datetime : fixed value (joining date of employee): has a calendar date and a wall clock time
- timestamp : unix timestamp, seconds elapsed from 1 Jan 1970 00:00 in UTC (takes timezone into consideration)
- enumeration

### Promise based program demo

The program is called `async-create-insert.js` and can be found in Week2 folder.
- async : to create asynchronous function and ensure they return promise without having to worry
about building those promises
- await : to call a function returning promise without having to call .then() over that promise
- promisify() : to convert a callback based function to a promise based one.

### Relationships between tables : 1-M, M-M

- One to One (one user has one profile)
- One to Many (one department has many employees)
- Many to Many (book(s) and author(s))

### Adding a column to the table
```
alter table Employee add column dept_id int
```

### Update table (add a department head for a department)

```
update Department set dept_head = 'Lucas' where dept_id = 3;
```

### JOINs : CROSS, left, right, self, inner

- A comma (,) after **FROM** is equivalent to the CROSS join.
- Implicit inner join (when the keyword **JOIN** is not used), **WHERE** clause has conditions.
- self join use case : Employee table with (*eid* field and *reports_to* field)
- left and right join : reverse of each other
- [Join manual](https://dev.mysql.com/doc/refman/8.0/en/join.html)

### Subqueries :
* Subqueries are when query results are used in an "outer" query, for instance in a where- or join clause.

### Procedures

* Procedures in SQL (aka Stored procedures) are similar to functions in other programming languages.
i.e. You can define them once and call them multiple times. However, it should be noted that
MySQL has two different concepts : functions and procedures.
This stack overflow post has an excellent answer that describes the
[difference between MySQL functions vs procedures](https://stackoverflow.com/questions/3744209/mysql-stored-procedure-vs-function-which-would-i-use-when)

* There are two scenarios in which procedures are particularly useful:
(credits to [this stack overflow post](https://stackoverflow.com/questions/12631845/when-should-i-use-stored-procedures-in-mysql))
1. When we want to entirely encapsulate access to the database by forcing apps to use
the stored procedures. This can be good for an organization with a strong/large database group
and a small/weak programming team.
It's also helpful when you have multiple code bases accessing the database,
because they all get one interface, rather than each writing their own queries, etc.
2. When you're repetitively doing something that should be done in the database.

* To create a procedure, use the following syntax:
```
Example:
delimiter //
create procedure countCountries (OUT param1 int)
BEGIN
    select count(*) into param1 from country;
END
//

delimiter ;
```
* To see existing procedures, use the following command:
```
mysql> show procedure status where db = 'dbname';
```

* To call the procedure, use the following command:
```
mysql> call countCountries(@result);

mysql> select @result;
```
 
### Triggers
* Triggers are a mechanism in SQL to prevent seemingly impossible data in the tables.
* Triggers are fired before/after insertion or updation of the database tables.
* Following is an example trigger which fires before any row is inserted into employee table.
Let the insert command be `insert into project values (104, "ironman", 1, "2007-01-01")`.
Then the variable `new` contains (104, "ironman", 1, "2007-01-01").
i.e. `new` automatically gets all the column names of the project table.
```
mysql> delimiter $$
mysql> CREATE TRIGGER date_trigger
    BEFORE INSERT
        ON project
            FOR EACH ROW
            BEGIN
                DECLARE message VARCHAR(100);
                DECLARE sd datetime ;
                SET sd= (select starting_date from employee where eno=new.manager_id);
                IF new.start_date < sd
                THEN
                    set message= 'Project date cannot be earlier than manager starting date';
                    SET lc_messages=message; SIGNAL SQLSTATE '45000';
                END IF;
            END $$

mysql> delimiter ;
```
This trigger gives error if the start date of the project is earlier than the starting date
of the manager of the project.

## Reference Material

- [OWASP on SQL Injection](https://www.owasp.org/index.php/SQL_injection)
- [Parameter Validation on Wikipedia](https://en.wikipedia.org/wiki/Parameter_validation)
- [Node MySQL Escaping Query Values](https://github.com/mysqljs/mysql#escaping-query-values)
- [Node MySQL Preparing Queries (automatic escaping)](https://github.com/mysqljs/mysql#preparing-queries)
- [MySQL SHOW GRANTS](https://dev.mysql.com/doc/refman/5.7/en/show-grants.html)
- [Falsehoods Programmers Believe About Names](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
- [Rewatch the previously recorded session: part 1](https://www.youtube.com/watch?v=G6v1po3zvNk)
- [Rewatch the previously recorded session: part 2](https://www.youtube.com/watch?v=5fv1vV1TciM)
- [Rewatch the previously recorded session: part 3](https://www.youtube.com/watch?v=ZNLhHUDj6jo)
