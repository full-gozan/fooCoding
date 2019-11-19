# Lesson 1: MySQL and Node setup! Create, Insert and Select !

Objective: This class aims to introduce the students to the MySQL database, and the structure of a relational database. We'll also discuss the object and object classes.
The class will look at some of the things to consider when designing a database. <br>
MySQL client can be used control the database instance and working with data, doing inserts, updates and deletes. <br>
Normalisation and selects using joins will be discussed.
Concepts of database transaction, ACID properties, normal forms should be introduced with
examples / live coding (creating a transaction, committing and rollback-ing).

## Pre-Class Preparation
- Install MySQL using the following [official docs](https://dev.mysql.com/downloads/mysql/)
-- **5.7**, there's currently some issues with 8.0
- Install MySQL Workbench (graphical client, optional) <br>
*Make a note of the root password either given to you or set by you during the installation*

Before arriving to class on Sunday, please watch all of the videos in [this video playlist](https://www.lynda.com/SharedPlaylist/0299ced540444d7197460e7f1f74ddab) on Lynda.
If you actually manage to watch them all and understand everything,
then you are a database expert.

## Setup

### MySQL setup
This setup assumes MySQL version 5.7.
- Windows users should use **Microsoft MySQL Command Line** client.
- Linux and MAC users should use **gnome-terminal** and **Terminal** respectively.

**Microsoft MySQL Command Line** client gives you a **mysql>** prompt after typing in your root password.
Note that this password is the one you used for root user of the mysql.
Linux and MAC users can execute <br>
`/usr/local/mysql/bin/mysql -uroot -p` <br>
and then type the password.

   For this go more smoothly, you can add the path to your mysql-binary to your 'PATH' environment variable,
   i.e. the line <br>
   export PATH=$PATH:/usr/local/mysql/bin/ <br>
   in your profile. Note that how to do this depends on your operating system.

Following commands should be run under the **mysql>** prompt:
```
mysql> create user ‘hyfuser’@‘localhost’ identified with mysql_native_password by ‘hyfpassword’;
# This command creates a user 'hyfuser' with password 'hyfpassword' for
# the database server at 'localhost'

mysql> grant all privileges on *.* to ‘hyfuser’@‘localhost’;
# This command gives all permissions to user 'hyfuser'.
(*.*) means every table of every database.

mysql> create database userdb;
This command creates a database 'userdb'
```

### Node setup
This setup assumes that you have Node.js 0.6 or higher.
We use **mysqljs** driver which can be installed using <br>
`npm install mysql`

### Verification of the correct setup
Run `node connection-test.js` from VScode(Windows) or the terminal(Linux or MAC).
The output should be `The solution is:  2`. <br>
connection-test.js can be found in the Week1 folder.

In this class, students will be introduced to

* Basics of relational databases: Concepts of tables, rows, columns, primary key, foreign key.
* Creation of a database table and insertion of values.
* Retrieving data from a MySQL database using SELECT queries.

Objective: Students should be able to create tables,
insert values in tables and
retrieve data from tables using SELECT statements that include FROM, WHERE clauses.


## Topics to be covered

### What is a Database ?
* Definition : Organized collection of data and rules about its manipulation
  * Client-server architecture : e.g. (Relational) DBMS - database server
  * Files as database
  * Data structure/object as database
  ```js
  const capitals = [
    "Amsterdam",
    "Delhi",
    "Damascus",
    "Madrid"];
  ```

### Relations = Table

* What is a relation (in the following sentences)?
  * Delhi is the capital of India
  * Amsterdam is the capital of Netherlands
  * Damascus is the capital of Syria

  Dan, 29, works at Amazon and lives in Seattle. His friend Ben who just celebrated
  his 24th birthday works at Facebook and lives in Redmond.

### DBMS implementations

* **MySQL**
* PostgreSQL
* Oracle RDBMS
* MongoDB (NoSQL)
* Cassandra (NoSQL)
* ClickHouse (SQL - column store)

### MySQL components

* MySQL server (runs as a service, default port: 3306)
* mysql: monitor / terminal / client (to connect to the server and execute stuff)
* mysqladmin: Administering a MySQL Server

### Create a table in MySQL

##### Collection of rows and columns
##### SYNTAX
```
CREATE TABLE table_name (column_name, column_type [, column2_name, column2_type]);
```

##### Column types
Recall what a datatype is. js vs mysql types

* INT(N) type
* DATE, DATETIME and TIMESTAMP, (set time_zone = '+03:00')
* BLOB (LOAD_FILE(filename))

### Fill up a table in MySQL: INSERT rows
A row (aka record or tuple) represents a single, implicitly structured data item in the table.

### Database transactions
- A transaction is a set of commands that you want to treat as "one command." It has to either happen in full or not at all.

- A classical example is transferring money from one bank account to another. To do that you have first to withdraw the amount from the source account, and then deposit it to the destination account. The operation has to succeed in full. If you stop halfway, the money will be lost, and that is Very Bad.

* To start transaction:
```
mysql> start;
OR
mysql> begin transaction;
```
* To commit, use `commit;` and to abort, use `rollback;`
* Note that `autocommit` variable should be set to false for rollback to work.
```
mysql> set autocommit = 0;
```

### ACID properties

- **Atomicity** : states that database modifications must follow an “all or nothing” rule.
Each transaction is said to be “atomic.”
If one part of the transaction fails, the entire transaction fails.
- **Consistency** : states that only valid data will be written to the database. If, for some reason, a transaction is executed that violates the database’s consistency rules, the entire transaction will be rolled back, and the database will be restored to a state consistent with those rules.
- **Isolation** : requires that multiple transactions occurring at the same time not impact each other’s execution.
- **Durability** : ensures that any transaction committed to the database will not be lost. Durability is ensured through the use of database backups and transaction logs that facilitate the restoration of committed transactions in spite of any subsequent software or hardware failures.

##### SYNTAX
```
INSERT INTO table_name VALUES(value1, value2 [,value3,...]);
```
* INSERT INTO table_name VALUES(...values...)
* INSERT INTO table_name (column names) VALUES(..values...)
* INSERT INTO table_name SET column_name = {expr | DEFAULT}

### See the content of a table in MySQL: SELECT

##### SYNTAX
```
SELECT */column_1,column_2...
FROM table_1
[INNER | LEFT |RIGHT] JOIN table_2 ON conditions
WHERE conditions
GROUP BY group 
HAVING group_conditions
ORDER BY column_1 [ASC | DESC]
LIMIT offset, row_count
 
The SELECT statement is composed of several clauses:
 
  -  SELECT chooses which columns of  the table you want to get the data.
  -  FROM specifies the table from which you get the data.
  -  JOIN gets data from multiple table based on certain join conditions.
  -  WHERE filters rows to select.
  -  GROUP BY group rows to apply aggregate functions on each group.
  -  HAVING filters group based on groups defined by GROUP BY clause.
  -  ORDER BY specifies the order of the returned result set.
  -  LIMIT constrains number of returned rows.
```

### INSERT and SELECT together

```
Example:

INSERT INTO 'employees' ('shop_id', 'gender', 'name', 'salary')
SELECT 3,
       LEFT(gender, 1),
       CONCAT_WS(' ', first_name, last_name),
       salary
FROM   transferred_ employees
WHERE  transfer_date > '2008-01-01';
```

### Uniqueness and Keys

* Primary key : unique identifier on the data row. Cannot be null, and cannot have any duplicates. Can be created using one or more columns. Should be chosen by the database designer, otherwise chosen automatically by the database, all rows must be uniquely identified
* Composite key : key spanning multiple columns
* Foreign key (parent / child keys) : key referencing column(s) in another table

### Normalization
Database Design following normal forms as a convention.
These normal forms build incrementally.
E.g. The database is in 3NF if it is already in 2NF and satisfied the
rules for 3rd normal form. Read [here] (https://www.studytonight.com/dbms/database-normalization.php) for more details.

#### 1NF (4 rules)
* Rule 1 : Single valued attributes (each column should have atomic value, no multiple values)
* Rule 2 : Attribute domain should not change
* Rule 3 : Unique names for attributes / columns
* Rule 4 : Order does not matter

#### 4NF
No multi-value dependency.

## Reference Material

- [TutorialsPoint MySQL Introduction](http://www.tutorialspoint.com/mysql/mysql-introduction.htm)
- [Official MySQL Documentation](https://dev.mysql.com/doc/refman/5.7/en/)
- [Official MySQL Tutorial (pretty dense)](https://dev.mysql.com/doc/refman/5.7/en/tutorial.html)
- [Node MySQL Documentation on Github](https://github.com/mysqljs/mysql)
- [Joel Spolsky - Character Sets and Unicode](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
- [SQL Fundamentals - SoloLearn](https://www.sololearn.com/Course/SQL/)
