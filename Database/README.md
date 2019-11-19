# Databases

## Relational Database Systems

### About

This three-week program aims to introduce the fundamental concepts of databases using MySQL, and are split into two parts.
First part consists of the theory of databases, and the second part is designing a todo-application. 

### Key Objectives

By the end of this module, students should have a familiarity with and basic understanding of the following:

- Entities
- The relational model
- The Structured Query Language (SQL)
- The construction of a database system
- MySQL as an example of a relational database system
- SQL vs NoSQL

### Preparations

As the base for this module, we'll use MySQL 5.7, since there's currently some issues with the js-module or 8.0.
See Week1-preparations for instructions on how to install.

## Lesson Plan

### Lesson 1: SQL ! Create, Insert and Select & Joins !

Objective: This class aims to introduce the students to operate the MySQL database.
MySQL client can be used control the database instance and to demonstrate SQL queries.
The class will look at working with data, doing inserts, updates and deletes.
Normalisation and selects using joins will be discussed.
Concepts of database transaction, ACID properties, normal forms should be introduced with
examples / live coding (creating a transaction, committing and rollback-ing).

### Lesson 2: Group by, Having and Joins. Promisification of JS client with prepared statements

Objective: This class introduces more clauses (group by, having) in the
select statement. MySQL joins (inner, self, left and right) should be explained
with demonstration (Employee table with **reportsTo** field and Department
table with its PK in Employee table is suitable for this demonstration).

Promise based JavaScript program with SQL prepared statements should be
understood by students. The program can be found in the Week2 folder (Credits:
@remarcmij)

This class invites students to discuss Entity Relationship Diagram (ERD).
Students should be able to explain their choices of entities, relationships, attributes etc.
SQL injection should be explained. 

### Homework 3: Application development

The goal is that the students should be able to design a web-based todo-application, using MySQL as a backend. 
The application should handle authenthication, task-creation, tagging tasks etc. More information is found in [Week3/MAKEME.md](https://github.com/foocoding/databases/blob/master/Week3/MAKEME.md)


## Handing in homework
Take a look at [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan, he explains how your homework needs to be handed in.

Also review the Git [workflow material](https://github.com/FooCoding/Git/blob/master/Lecture-3.md) from the JavaScript3 module, use this as a reference.

---
Credit goes to [HackYourFuture](https://github.com/HackYourFuture) which this is based upon.
