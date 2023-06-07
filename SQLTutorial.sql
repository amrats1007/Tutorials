/*
Database & Database Management System [DBMS]

> Database is a collection of data, it also contains methods for accessing and manipulating that data.
  >> So going back to a phone book, we would want a way, some sort of program or code that would allow us to do things like find everybody with the first name 'Ned' or find all people who have a three letter first name, or even do things like add a new person into the phone book or change area codes or change phone numbers or get crazy and just delete people from our phone book or delete everybody. If we wanted to we would have some sort of program or code as part of our database that would help with that, that would allow us to interface with the data.

> A database is just a collection of data. A database management system is a program that allows us to interface with that data. And then SQL is the language that we use to talk to our databases.

> Database vs. Database Management System (DBMS): database versus database management system refers to the fact that what I just talked about. having data, a collection of data and having an interface for that data, are two different things.

> App -> DBMS -> Database - the database here is basically like our phone book. It's a gigantic collection of data, which is great for storing data, but it really doesn't let us do very much. You can almost think of it as if it was a gigantic file on your computer. So for our App to be able to do things like update somebody's username in the database or edit their profile photo or delete a user if they want to leave our application, whatever it is, there's a database management system that allows us to interface with that database. So it's just the code or the program that does the talking to our database for us. So we talk to our database management system and it talks to the database.

> Oftentimes when people talk about a database, you actually hear them referring to both of these things, the database and the database management system together just as a database. So we defined Database as a collection of data, it also contains methods for accessing and manipulating that data.

> PostgreSQL, MySQL, Microsoft SQL Server, Oracle SQL, and SQLite are all examples of database management systems. They're not technically databases, they're actually database management systems. But for the most part, people just call them databases. So when we say things like MySQL is one of the most commonly used databases, it's actually one of the most commonly used database management systems.

> Here's a little bit of a synthesized definition. What is the database? it's a structured set of computerized data with an accessible interface.
  >> So it's a structured set of data. It's not just a bunch of random data.

> Database Management System (DBMS) is software for creating and managing databases. It provides an interface between the database and the user. Popular DBMSs: MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle SQL. They all use SQL as their standard language. So they all use SQL to talk to the database. But they're all different in terms of features and how they work and how they're set up and how they're installed and all that stuff. So they're all different, but they all use SQL. So that's why we can use SQL to talk to all of them. So SQL is the language that we use to talk to our databases. And then we have these different database management systems that we can use to actually store our data and then talk to that data using SQL. So that's the difference between a database and a database management system.
*/

/*******************************************************************************************************************************************/

/*
SQL & MySQL

> SQL is the language that we use when we talk to our databases. It's the way that we interact and access the data, update data, delete things, and basically manipulate the data in our databases. and it stands for Structured Query Language.

> SQL is not unique to MySQL or to PostgreSQL that's why they all have this SQL in their name. They share this language. So structured Query language (SQL) is a standard basically that these relational database management systems like MySQL implement. the main takeaway is that when we use something like MySQL, we'll actually be writing SQL all the time. Working With MySQL Is Primarily Writing SQL.

> So the way that this whole thing works is that there is a standard for how SQL should work. It's actually written down. And all of these different database management systems basically are tasked with implementing that standard in their own database and making it work. And they deviate sometimes a little bit, but for the most part, they're very, very similar.

> SQL is a structured query language. It exists separately from MySQL. And MySQL is a database management system that implements SQL.

> What makes databases or database management systems to be specific? what makes them unique are the features that they offer. Not the SQL or the language itself. So if we go back to DBMS mentioned earlier, all of these use SQL, but that doesn't mean that they're identical. And yes, you might write the same line of code to do the same thing in all DBMSs. So what makes these different are the features that they implement, things like how secure is one versus the other or how fast is it. How big is the download? How do user permissions work? And on and on and on?. So there are a lot of different features that make these different. But the language that we use to talk to them is the same. So that's why we can use SQL to talk to all of them.
*/

/*******************************************************************************************************************************************/

/*
Database Server

> So we've got our database server that's already installed and set up and within the world of a database server, we can have a bunch of different databases. So these databases are self-contained sort of silos of information, silos of data, and tables. And they have nothing to do with one another. It's important to know that our data isn't all floating around together in one soup, but rather it's divided up into these discrete databases. So one more time we have multiple databases within a MySQL database server.
*/

/*******************************************************************************************************************************************/

/*
Syntax

> it is recommended to use all caps for SQL keywords and lowercase for everything else. This is not required, but it is a common convention. It makes it easier to read and understand SQL statements. It also helps to avoid errors, because SQL keywords are not case sensitive[SELECT is the same as select], but everything else is.

> SQL statements are terminated with a semicolon (;).

> SQL doesn't care about whitespace. So we can add as much whitespace as we want to make our code more readable. We can add line breaks, we can add spaces, we can add tabs, we can add whatever we want. It doesn't matter. SQL will ignore it. it only cares about terminating statements with a semicolon.

> Single-line comments in SQL are denoted with two dashes and a space (-- ). Everything after that on that line will be ignored by SQL.

> Multi-line comments in SQL are denoted with a slash and an asterisk (/* ) Everything between that and the next asterisk and slash will be ignored by SQL.

> It is preferred to use single quotes (') around strings, rather than double quotes ("). Because of the way that SQL works in other databases, it's not always the case that double quotes will work. So it's just a good habit to get into to always use single quotes around strings.
*/

/*******************************************************************************************************************************************/

/*
Database Tables

> A database is really just a bunch of tables, in relational databases at least. If we're talking about something like MongoDB, that's not a relational database. So it doesn't use tables, but all the SQL-flavored database variance, they all consist of a bunch of tables and tables are what hold our data. They describe the format and the shape of our data, and then they hold collections of data that follows that shape.

> A table is a collection of related data held in a structured format within a database. It consists of columns and rows. Each column contains a specific attribute of the data, and each row contains a value for each column.
  >> columns[headers/fields]: are the attributes of the data.
  >> rows[records/values]: are the actual data.
*/

/*******************************************************************************************************************************************/

/* Commands */

SOURCE file_name.sql; /* To run a SQL file from the command line. */
-- Example
H:\My Drive\Software Development\Learning\SQL\MySQL\Udemy.Colt.Steele.The.Ultimate.MySQL.Bootcamp.Go.from.SQL.Beginner.to.Expert\book_data.sql
/* Query OK, 0 rows affected (0.73 sec) */
/* Query OK, 16 rows affected (0.26 sec) */
/* Records: 16  Duplicates: 0  Warnings: 0 */

SHOW WARNINGS; /* To show any warnings after executing a query. */


SHOW DATABASES; /* To list available and existing databases in the database server. */
-- Example
SHOW DATABASES;
/*
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
6 rows in set (0.03 sec)
*/


CREATE DATABASE database_name_1; /* To create a new empty (shell) database. */
/*
  >> Database name should be unique and not already exist in the database server. should be obvious and descriptive/meaningful.
  >> Database name can technically have spaces but it is not recommended, because it can cause problems later on.
  >> Database name can be written as camelCase, snake_case, kebab-case or any other naming conventions.
*/
-- Example
CREATE DATABASE ibn_sinai;
/* Query OK, 1 row affected (0.08 sec) */


DROP DATABASE database_name_2; /* To delete an existing database. */
-- Example
DROP DATABASE ibn_sinai;
/* Query OK, 0 rows affected (0.10 sec) */


USE database_name_3; /* To switch to an existing database. like double-click. */
-- Example
USE sakila;
/* Database changed */


SELECT database(); /* To check which database is currently being used. */
-- Example
SELECT database();
/*
+------------+
| database() |
+------------+
| sakila     |
+------------+
1 row in set (0.00 sec)
*/


CREATE TABLE table_name_1; /* To create a new table. */
(
  column_nam data_type optional_constraint,
  column_nam data_type optional_constraint,
  column_nam data_type optional_constraint
);
/* Table name and column names naming conventions are the same as database names. */
-- Example
CREATE TABLE people (name VARCHAR(50), age INT);
/* Query OK, 0 rows affected (0.56 sec) */


SHOW TABLES; /* To list available and existing tables in the current database. */
-- Example
SHOW TABLES;
/*
+-----------------+
| Tables_in_world |
+-----------------+
| city            |
| country         |
| countrylanguage |
| people          |
+-----------------+
4 rows in set (0.00 sec)
*/


SHOW COLUMNS FROM table_name_2; /* Show table description/structure - To list available and existing columns in a table. long version. */
DESC/DESCRIBE table_name_3; /* Show table description/structure - To list available and existing columns in a table. short version. */
/*
+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+
| Field       | Type              | Null | Key | Default           | Extra                                         |
+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+
| actor_id    | smallint unsigned | NO   | PRI | NULL              | auto_increment                                |
| first_name  | varchar(45)       | YES  |     | NULL              |                                               |
| last_name   | varchar(45)       | YES  | MUL | unnamed           |                                               |
| last_update | timestamp         | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+
*/
-- Example
SHOW COLUMNS FROM people;
/*
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| name  | varchar(50) | YES  |     | NULL    |       |
| age   | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.03 sec)
*/
DESC people;
/*
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| name  | varchar(50) | YES  |     | NULL    |       |
| age   | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
*/
DESCRIBE people;
/*
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| name  | varchar(50) | YES  |     | NULL    |       |
| age   | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
*/


DROP TABLE table_name_4; /* To delete an existing table from the current database. */
-- Example
DROP TABLE people;
/* Query OK, 0 rows affected (0.20 sec) */


INSERT INTO table_name_5 (column_name, column_name, column_name) /* To insert a new record/row into a table in the current database. */
VALUES
  (value_11, value_12, value_13), 
  (value_21, value_22, value_23), /* To insert multiple records/rows at once. */
  (value_31, value_32, value_33);
/*
  >> The order of the columns and values must match.
  >> The data type of the values must match the data type of the columns.
*/
-- Example
INSERT INTO people (name, age)
VALUES
  ('amr', 35), ('ali', 29), ('sami', 48);
/* Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0 */
-- Example
INSERT INTO people (age, name)
VALUES (42, 'Bob');
/* Query OK, 1 row affected (0.01 sec) */
-- Example
INSERT INTO people (name, age)
VALUES (45, 'Linda');
/* ERROR 1366 (HY000): Incorrect integer value: 'Linda' for column 'age' at row 1 */
/* This example shows that 45 is inserted into the name column normally, whoever the column is a string, not a number, and stored as a string but Linda does not insert to a column that has number data type */

SELECT * FROM table_name_6; /* To select all columns and all rows from a table in the current database. */
-- Example
SELECT * FROM people;
/*
+------+------+
| name | age  |
+------+------+
| amr  |   35 |
| ali  |   29 |
| sami |   48 |
+------+------+
3 rows in set (0.00 sec)
*/

/*******************************************************************************************************************************************/

/* Exercise */

/*
Create a pastries table
  It should include 2 columns: name and quantity.  The name is 50 characters max.
Inspect your table/columns in the CLI
Delete your table!
*/
CREATE DATABASE exercise;
USE exercise;
CREATE TABLE pastries (name VARCHAR(50), quantity INT);
SHOW TABLES;
DESC pastries;
DROP TABLE pastries;

/*
Create a people table
  first_name - 20 char limit
  last_name - 20 char limit
  age
Insert Your 1st Person!
  first_name	last_name	age
  'Tina'	    'Belcher'	13
Insert Your 2nd Person!
  first_name	last_name	age
  'Bob'	      'Belcher'	42
Multiple Insert Time!
  first_name	last_name	    age
  'Linda'	    'Belcher'	    45
  'Phillip'	  'Frond'	      38
  'Calvin'	  'Fischoeder'	70
*/
CREATE TABLE people
(
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  age INT
);
INSERT INTO people(first_name, last_name, age) VALUES ('Tina', 'Belcher', 13);
INSERT INTO people(age, last_name, first_name) VALUES (42, 'Belcher', 'Bob');
INSERT INTO people(first_name, last_name, age)
VALUES
  ('Linda', 'Belcher', 45),
  ('Phillip', 'Frond', 38),
  ('Calvin', 'Fischoeder', 70);

/*******************************************************************************************************************************************/

/* Constraints */

/*
Not NULL

> NULL is a special value in SQL that represents missing or unknown data. It's not the same as zero or an empty string or anything like that. when we get the description of a table [DESC table_name;] there is a column called NULL, if it is YES that means that column can have null values, if it is NO that means that column can't have NULL values.

INSERT INTO table_name(last_name) VALUES('DAVIS'); => that makes all other columns data NULL except the last_name column.
INSERT INTO table_name(first_name) VALUES('JOHNNY'); => that makes all other columns data NULL except the first_name column.
INSERT INTO table_name() VALUES(); => that insert a new row with all columns data NULL.
+-------------+--------------+
| first_name  | last_name    |
+-------------+--------------+
| ED          | CHASE        |
| NULL        | DAVIS        |
| JOHNNY      | NULL         |
| NULL        | NULL         |
+-------------+--------------+

> NOT NULL: if we want to make sure that a column can't have NULL values, we can add the NOT NULL constraint to the column definition when we create the table.
  CREATE TABLE table_name
  (
    column_name data_type NOT NULL,
    column_name data_type,
    column_name data_type NOT NULL
  );
  >> That makes all columns’ data not null. so we can't insert a row without values for all columns.
    INSERT INTO table_name() VALUES(); => that will give us an error. ERROR 1364 (HY000): Field 'name' doesn't have a default value
  >> now table description [DESC table_name;] will show Null column as NO.
    +-------+-------------+------+-----+---------+-------+
    | Field | Type        | Null | Key | Default | Extra |
    +-------+-------------+------+-----+---------+-------+
    | name  | varchar(50) | NO   |     | NULL    |       |
    | age   | int         | YES  |     | NULL    |       |
    +-------+-------------+------+-----+---------+-------+
    2 rows in set (0.04 sec)
*/


/*
DEFAULT

> describes the default values present for a column.

CREATE TABLE table_name
(
  column_name data_type DEFAULT default_value,
  column_name data_type DEFAULT default_value,
  column_name data_type DEFAULT default_value
);

> We don't end up with NULL values because we have default values. However, that doesn't stop me from changing any default value to NULL. if we had default without NOT NULL, then I could easily set a value to be NULL manually. Because by providing a default value, doesn't that mean that there's no way for this value to be NULL? So if I want to make sure that a column can't have NULL values, I need to add the NOT NULL constraint to the column definition when I create the table.

> Just setting a default value is not the same as saying this can never be NULL, so they can work in tandem. NOT NULL, Just says this can never be empty. And the default is simply saying if there is no value specified, it should default to this value. But if we had default without NOT NULL, then I could easily set a value to be NULL manually.
  CREATE TABLE table_name (column_name data_type DEFAULT default_value);
  INSERT INTO table_name (column_name) VALUES(); => that will log default value as value.
  INSERT INTO table_name (column_name) VALUES(NULL); => that will log NULL for the column that has a default value.
*/
CREATE TABLE cats4
(
  name VARCHAR(20) NOT NULL DEFAULT 'unnamed',
  age INT NOT NULL DEFAULT 99
);
INSERT INTO cats4()
VALUES(); /* that will log default values for both columns. */
INSERT INTO cats4(name, age)
VALUES(NULL, NULL); /* error - ERROR 1048 (23000): Column 'name' cannot be null */
DESC cats4;
/*
+-------------+-------------------+------+-----+-------------------+---------------+
| Field       | Type              | Null | Key | Default           | Extra         |
+-------------+-------------------+------+-----+-------------------+---------------+
| name        | VARCHAR(20)       | NO   |     | unnamed           |               |
| age         | INT               | NO   |     | 99                |               |
+-------------+-------------------+------+-----+-------------------+---------------+
2 rows in set (0.00 sec)
*/


/*
Primary Key

> We add unique IDs to rows so that we can differentiate them even when all the other data looks the same.

> Primary Key uniquely identifies each individual row in a table.
  CREATE TABLE table_name
  (
    column_name_1 INT NOT NULL PRIMARY KEY,
    column_name_2 VARCHAR(20),
    column_name_3 INT
  );
  INSERT INTO table_name (column_name1, column_name2, column_name3) VALUES (1, 'amr', 45); => OK
  INSERT INTO table_name (column_name1, column_name2, column_name3) VALUES (1, 'Selim', 39); => ERROR, duplicate primary key value (1) for column 'column_name_1'.
  INSERT INTO table_name (column_name1, column_name2, column_name3) VALUES (2, 'Selim', 39); => OK
  INSERT INTO table_name (column_name1, column_name2, column_name3) VALUES (88, 'aliaa', 29); => OK - we can insert any value as long as it is unique.
  +--------------+-------------------+------+-----+-------------------+----------------------------+
  | Field        | Type              | Null | Key | Default           | Extra                      |
  +--------------+-------------------+------+-----+-------------------+----------------------------+
  | column_name_1| INT               | NO   | PRI | Null              |                            |
  | column_name_2| VARCHAR(20)       | YES  |     | Null              |                            |
  | column_name_3| INT               | YES  |     | Null              |                            |
  +--------------+-------------------+------+-----+-------------------+----------------------------+
  CREATE TABLE table_name
  (
    cat_id INT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (cat_id) => We can also add primary key constraint after column definitions.
  );

> It is technically redundant to specify a column as a primary key and as NOT NULL because primary keys can never be NULL. it is NULL: NO by default.
*/


/*
AUTO_INCREMENT

CREATE TABLE unique_cats_3
(
  cat_id INT AUTO_INCREMENT, => automatically assigns a unique value to the column whenever a new row is inserted into the table.
  name VARCHAR(100),
  age INT,
  PRIMARY KEY (cat_id)
);
+-------------+-------------------+------+-----+-------------------+----------------------------+
| Field       | Type              | Null | Key | Default           | Extra                      |
+-------------+-------------------+------+-----+-------------------+----------------------------+
| cat_id      | INT               | NO   | PRI | Null              | auto_increment             |
| name        | VARCHAR(20)       | YES  |     | Null              |                            |
| age         | INT               | YES  |     | Null              |                            |
+-------------+-------------------+------+-----+-------------------+----------------------------+

INSERT INTO unique_cats_3 (cat_id) VALUES (3); => If 3 already exists, it will give an error.
INSERT INTO unique_cats_3 (cat_id) VALUES (77); => can add to the column if it is unique and auto_increment.

> AUTO_INCREMENT columns must be number data types (tinyint, smallint, mediumint, int, bigint) and can't be NULL.

> There can be only one auto column and it must be defined as a key.
*/
create table people
(
  id int primary key auto_increment,
  f_name varchar(50),
  l_name varchar(50),
  age int);
/* Query OK, 0 rows affected (0.69 sec) */
insert into people (f_name,l_name,age) values('s','s',5), ('o','o',5),('u','u',5);
/* Query OK, 3 rows affected (0.14 sec) */
/* Records: 3  Duplicates: 0  Warnings: 0 */
select * from people;
/*
+----+--------+--------+------+
| id | f_name | l_name | age  |
+----+--------+--------+------+
|  1 | s      | s      |    5 |
|  2 | o      | o      |    5 |
|  3 | u      | u      |    5 |
+----+--------+--------+------+
3 rows in set (0.00 sec)
*/
insert into people (id,f_name,l_name,age) values(5,'t','t',5);
/* Query OK, 1 row affected (0.04 sec) */
select * from people;
/*
+----+--------+--------+------+
| id | f_name | l_name | age  |
+----+--------+--------+------+
|  1 | s      | s      |    5 |
|  2 | o      | o      |    5 |
|  3 | u      | u      |    5 |
|  5 | t      | t      |    5 |
+----+--------+--------+------+
4 rows in set (0.00 sec)
*/
insert into people (f_name,l_name,age) values('s','s',5), ('o','o',5),('u','u',5);
/* Query OK, 3 rows affected (0.02 sec) */
/* Records: 3  Duplicates: 0  Warnings: 0 */
select * from people;
/*
+----+--------+--------+------+
| id | f_name | l_name | age  |
+----+--------+--------+------+
|  1 | s      | s      |    5 |
|  2 | o      | o      |    5 |
|  3 | u      | u      |    5 |
|  5 | t      | t      |    5 |
|  6 | s      | s      |    5 |
|  7 | o      | o      |    5 |
|  8 | u      | u      |    5 |
+----+--------+--------+------+
7 rows in set (0.00 sec)
*/

/*******************************************************************************************************************************************/

/* Exercise */

/*
Define an Employees table, with the following fields:
  id - number(automatically increments) and  primary key
  last_name - text, mandatory
  first_name - text, mandatory
  middle_name - text, not mandatory
  age - number mandatory
  current_status - text, mandatory, defaults to 'employed'
*/
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255),
  age INT NOT NULL,
  current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);
INSERT INTO employees(first_name, last_name, age) VALUES
('Dora', 'Smith', 58);
SELECT * FROM employees;
/*
+----+------------+-----------+-------------+-----+-----------------+
| id | first_name | last_name | middle_name | age | current_status  |
+----+------------+-----------+-------------+-----+-----------------+
|  1 | Dora       | Smith     | NULL        |  58 | employed        |
+----+------------+-----------+-------------+-----+-----------------+
1 row in set (0.00 sec)
*/

/*******************************************************************************************************************************************/

/*
CRUD Operations

Create, Read, Update, and Delete. These are the four basic operations that can be performed on data.
*/

/*
WHERE Clause

> allows us to narrow down the rows that we're working with.
  SELECT column_name_1, column_name_2 FROM table_name WHERE column_name_1 = value; => retrieve specific column/s with its data that matches the condition.

> WHERE clause can be used with any of the comparison operators: =, !=, <, >, <=, >=.

> where is not limited to working with select, we will be using where to make updates or to delete rows as well. So it's kind of a jack of all trades.

> You don't have to actually select a column to work with it, SELECT and WHERE are two completely independent. So we can select a column that we don't actually want to output, but we want to use it to filter our results.
  SELECT name, age FROM cats WHERE age = 4;
  +-------+------+
  | name  | age  |
  +-------+------+
  | ED    |   35 |
  | DAVIS |   29 |
  | JOHNNY|   48 |
  +-------+------+
  SELECT name FROM cats WHERE age = 4;
  +----------+
  | name     |
  +----------+
  |ED        |
  |DAVIS     |
  |JOHNNY    |
  |NULL      |
  +----------+

> SQL performs the WHERE clause before the SELECT clause.
  SELECT name FROM cats WHERE age = 4; => SQL will first find the rows that match the condition, and then it will select the name column from those rows.

> If the condition is applied to a text, so it is case insensitive [DAVIS = davis = Davis = dAvIs = ...].
  SELECT name FROM cats WHERE name = 'DaviS';
  +-------+
  | name  |
  +-------+
  | DAVIS |
  +-------+
  1 row in set (0.00 sec)

SELECT * FROM cats WHERE cat_id = age; => You can use column names in the where clause.
*/


/*
CREATE

> Database
  CREATE DATABASE database_name; 

> Table
  CREATE TABLE table_name
  (
    column_name data_type constraints,
    column_name data_type constraints,
    column_name data_type constraints
  );

> Data
  INSERT INTO table_name (column_name, column_name, column_name)
  VALUES (value, value, value);
*/
CREATE DATABASE pet_shop;

CREATE TABLE cats
(
	cat_id INT AUTO_INCREMENT,
	name VARCHAR(100),
	breed VARCHAR(100),
	age INT,
	PRIMARY KEY (cat_id)
); 

INSERT INTO cats(name, breed, age) 
VALUES
	('Ringo', 'Tabby', 4),
	('Cindy', 'Maine Coon', 10),
	('Dumbledore', 'Maine Coon', 11),
	('Egg', 'Persian', 4),
	('Misty', 'Tabby', 13),
	('George Michael', 'Ragdoll', 9),
	('Jackson', 'Sphynx', 7)
;


/*
READ: SELECT-FROM

SELECT * FROM table_name; => retrieve all columns with its data.

SELECT column_name_1, column_name_2 FROM table_name; => retrieve specific column/s with its data.

SELECT * FROM cats WHERE name ='DAVIS'; => if there is no match, it will return an empty set.

> Table name is case insensitive when selecting. and it will appear as it is in the output.
  SELECT NAME, BReeD, AGe FROM cats;
  +----------------+------------+------+
  | NAME           | BReeD      | AGe  |
  +----------------+------------+------+
  | Ringo          | Tabby      |    4 |
  | Cindy          | Maine Coon |   10 |
  | Dumbledore     | Maine Coon |   11 |
  | Egg            | Persian    |    4 |
  | Misty          | Tabby      |   13 |
  | George Michael | Ragdoll    |    9 |
  | Jackson        | Sphynx     |    7 |
  +----------------+------------+------+
  7 rows in set (0.00 sec)

> AS => alias, temporarily rename the column name in the output result only.
  SELECT cat_id AS id, name FROM cats;
  +----+----------------+
  | id | name           |
  +----+----------------+
  |  1 | Ringo          |
  |  2 | Cindy          |
  |  3 | Dumbledore     |
  |  4 | Egg            |
  |  5 | Misty          |
  |  6 | George Michael |
  |  7 | Jackson        |
  +----+----------------+
  7 rows in set (0.00 sec)
  SELECT cat_id AS id, name AS 'cat name' FROM cats;
  +----+----------------+
  | id | cat name       |
  +----+----------------+
  |  1 | Ringo          |
  |  2 | Cindy          |
  |  3 | Dumbledore     |
  |  4 | Egg            |
  |  5 | Misty          |
  |  6 | George Michael |
  |  7 | Jackson        |
  +----+----------------+
  7 rows in set (0.02 sec)

> SELECT can be used to output data that doesn't actually exist in the table.
  SELECT 1 + 1;
  +-------+
  | 1 + 1 |
  +-------+
  |     2 |
  +-------+
  1 row in set (0.00 sec)
  SELECT 1 + 1 AS two;
  +-----+
  | two |
  +-----+
  |   2 |
  +-----+
  1 row in set (0.00 sec)
  SELECT 1 + 1 AS '1 + 1';
  +-------+
  | 1 + 1 |
  +-------+
  |     2 |
  +-------+
  1 row in set (0.02 sec)
*/
SELECT * FROM cats;
/*
+--------+----------------+------------+-----+
| cat_id | name           | breed      | age |
+--------+----------------+------------+-----+
|      1 | Ringo          | Tabby      |   4 |
|      2 | Cindy          | Maine Coon |  10 |
|      3 | Dumbledore     | Maine Coon |  11 |
|      4 | Egg            | Persian    |   4 |
|      5 | Misty          | Tabby      |  13 |
|      6 | George Michael | Ragdoll    |   9 |
|      7 | Jackson        | Sphynx     |   7 |
+--------+----------------+------------+-----+
7 rows in set (0.04 sec)
*/
SELECT breed FROM cats;
/*
+------------+
| breed      |
+------------+
| Tabby      |
| Maine Coon |
| Maine Coon |
| Persian    |
| Tabby      |
| Ragdoll    |
| Sphynx     |
+------------+
7 rows in set (0.06 sec)
*/
SELECT name, age FROM cats;
/*
+----------------+-----+
| name           | age |
+----------------+-----+
| Ringo          |   4 |
| Cindy          |  10 |
| Dumbledore     |  11 |
| Egg            |   4 |
| Misty          |  13 |
| George Michael |   9 |
| Jackson        |   7 |
+----------------+-----+
7 rows in set (0.07 sec)
*/
SELECT * FROM cats WHERE name ='DAVIS';
/* Empty set */


/*
UPDATE-SET

UPDATE cats SET age = 14; => update all cats’ ages.

UPDATE cats
SET breed='Shorthand'
WHERE breed='Tabby';

UPDATE cats
SET breed='Shorthand', name='kitty' 
WHERE breed='Tabby';

> it is preferred to SELECT(with WHERE) before UPDATE to make sure that you are updating the right rows.

> Exercise

  Change Jackson's name to "Jack"
    SELECT * FROM cats WHERE name='Jackson'; 
    UPDATE cats SET name='Jack' WHERE name='Jackson'; 
    SELECT * FROM cats WHERE name='Jackson'; 
    SELECT * FROM cats WHERE name='Jack'; 

  Change Ringo's breed to "British Shorthair"
    SELECT * FROM cats WHERE name='Ringo'; 
    UPDATE cats SET breed='British Shorthand' WHERE name='Ringo'; 
    SELECT * FROM cats WHERE name='Ringo'; 
    SELECT * FROM cats;

  Update both Maine Coons' ages to be 12
    SELECT * FROM cats WHERE breed='Maine Coon'; 
    UPDATE cats SET age=12 WHERE breed='Maine Coon'; 
    SELECT * FROM cats WHERE breed='Maine Coon';
*/


/*
Destroy: DELETE-FROM

DELETE FROM cats; => delete every row in the cat's table. it is now an empty table, but it still exists.

DELETE FROM cats WHERE age = 4; => delete specific rows.

> It is preferred to SELECT(with WHERE) before DELETE to make sure that you are deleting the right rows.

> Exercise

  DELETE all 4-year-old cats
    SELECT * FROM cats WHERE age=4;
    DELETE FROM cats WHERE age=4;
    SELECT * FROM cats WHERE age=4;

  DELETE cats whose age is the same as their cat_id
    SELECT * FROM cats WHERE cat_id=age;
    DELETE FROM cats WHERE cat_id=age;
    SELECT * FROM cats WHERE cat_id=age;

  DELETE all cats 🙀
    SELECT * FROM cats;
    DELETE FROM cats;
    SELECT * FROM cats;
*/

/*******************************************************************************************************************************************/

/* Exercise */

/*
1. Write the SQL that selects the following:
  +--------+
  | cat_id |
  +--------+
  |      1 |
  |      2 |
  |      3 |
  |      4 |
  |      5 |
  |      6 |
  |      7 |
  +--------+

2. Write the SQL that selects the following:
  +----------------+------------+
  | name           | breed      |
  +----------------+------------+
  | Ringo          | Tabby      |
  | Cindy          | Maine Coon |
  | Dumbledore     | Maine Coon |
  | Egg            | Persian    |
  | Misty          | Tabby      |
  | George Michael | Ragdoll    |
  | Jackson        | Sphynx     |
  +----------------+------------+

3. Write the SQL that selects the following: (Just the Tabby cats)
  +-------+------+
  | name  | age  |
  +-------+------+
  | Ringo |    4 |
  | Misty |   13 |
  +-------+------+

4. Write the SQL that selects the following: cat_id is the same as age
  +--------+------+
  | cat_id | age  |
  +--------+------+
  |      4 |    4 |
  |      7 |    7 |
  +--------+------+
*/
-- 1.
select cat_id from cats;
/*
+--------+
| cat_id |
+--------+
|      1 |
|      2 |
|      3 |
|      4 |
|      5 |
|      6 |
|      7 |
+--------+
7 rows in set (0.02 sec)
*/

-- 2.
select name, and breed from cats;
/*
+----------------+------------+
| name           | breed      |
+----------------+------------+
| Ringo          | Tabby      |
| Cindy          | Maine Coon |
| Dumbledore     | Maine Coon |
| Egg            | Persian    |
| Misty          | Tabby      |
| George Michael | Ragdoll    |
| Jackson        | Sphynx     |
+----------------+------------+
7 rows in set (0.00 sec)
*/

-- 3.
select name, age from cats where breed='tabby';
/*
+-------+------+
| name  | age  |
+-------+------+
| Ringo |    4 |
| Misty |   13 |
+-------+------+
2 rows in set (0.00 sec)
*/

-- 4.
select cat_id, age from cats where cat_id=age;
/*
+--------+------+
| cat_id | age  |
+--------+------+
|      4 |    4 |
|      7 |    7 |
+--------+------+
2 rows in set (0.00 sec)
*/


/* Super CRUD Exercise:- Spring Cleaning: The Annual Closet Inventory */

/*
1. Create a new database
  shirts_db

2. Create new table shirts
  columns: shirt_id, article, color, shirt_size and last_worn

3. Insert data
  ('t-shirt', 'white', 'S', 10),
  ('t-shirt', 'green', 'S', 200),
  ('polo shirt', 'black', 'M', 10),
  ('tank top', 'blue', 'S', 50),
  ('t-shirt', 'pink', 'S', 0),
  ('polo shirt', 'red', 'M', 5),
  ('tank top', 'white', 'S', 200),
  ('tank top', 'blue', 'M', 15)
  +----------+------------+-------+------------+-----------+
  | shirt_id | article    | color | shirt_size | last_worn |
  +----------+------------+-------+------------+-----------+
  |        1 | t-shirt    | white | S          |        10 |
  |        2 | t-shirt    | green | S          |       200 |
  |        3 | polo shirt | black | M          |        10 |
  |        4 | tank top   | blue  | S          |        50 |
  |        5 | t-shirt    | pink  | S          |         0 |
  |        6 | polo shirt | red   | M          |         5 |
  |        7 | tank top   | white | S          |       200 |
  |        8 | tank top   | blue  | M          |        15 |
  +----------+------------+-------+------------+-----------+

4. Add A New Shirt
  Purple polo shirt, size M last worn 50 days ago

5. SELECT all shirts
  But Only Print Out Articles and Color

6. SELECT all medium shirts
  Print Out Everything But shirt_id

7. Update all polo shirts
  Change their size to L

8. Update the shirt last worn 15 days ago
  Change last_worn to 0

9. Update all white shirts
  Change size to 'XS' and color to 'off white'

10. Delete all old shirts
  Last worn 200 days ago

11. Delete all tank tops
  Your tastes have changed...

12. Delete all shirts
  Catastrophe!

13. Drop the entire shirts table
  Catastrophe Again!
*/
CREATE DATABASE shirts_db;

USE shirts_db;

CREATE TABLE shirts
(
  shirt_id INT PRIMARY KEY AUTO_INCREMENT,
  article VARCHAR(50),
  color VARCHAR(50),
  shirt_size VARCHAR(5),
  last_worn INT
);

DESC shirts;

INSERT INTO shirts (article, color, shirt_size, last_worn)  
VALUES 
	('t-shirt', 'white', 'S', 10),
	('t-shirt', 'green', 'S', 200),
	('polo shirt', 'black', 'M', 10),
	('tank top', 'blue', 'S', 50),
	('t-shirt', 'pink', 'S', 0),
	('polo shirt', 'red', 'M', 5),
	('tank top', 'white', 'S', 200),
	('tank top', 'blue', 'M', 15);

INSERT INTO shirts (article, color, shirt_size, last_worn)
VALUES ('polo shirt','purple', 'M', 50);

SELECT article, color FROM shirts;

SELECT * FROM shirts WHERE shirt_size='M';

SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size='M';

UPDATE shirts SET shirt_size = 'L' WHERE article = 'polo shirt';
    
UPDATE shirts SET last_worn = 0 WHERE last_worn = 15;
    
UPDATE shirts SET color = 'off white', shirt_size = 'XS' WHERE color = 'white';

SELECT * FROM shirts WHERE last_worn=200;
DELETE FROM shirts WHERE last_worn=200;

SELECT * FROM shirts WHERE article='tank top';
DELETE FROM shirts WHERE article='tank top';

SELECT * FROM shirts;
DELETE FROM shirts;

DROP TABLE shirts;

show tables;
DESC shirts;

/*******************************************************************************************************************************************/

/* String Functions:  different built in operations that we can perform on text columns */

-- CONCAT: concatenate strings together.
SELECT CONCAT ('A', 'M', 'R');
/*
+------------------------+
| CONCAT ('A', 'M', 'R') |
+------------------------+
| AMR                    |
+------------------------+
1 row in set (0.03 sec)
*/
SELECT CONCAT(author_fname, ' ', author_lname) AS 'Author Full Name' FROM books;
/*
+----------------------+
| Author Full Name     |
+----------------------+
| Jhumpa Lahiri        |
| Neil Gaiman          |
| Neil Gaiman          |
| Jhumpa Lahiri        |
| Dave Eggers          |
| Dave Eggers          |
| Michael Chabon       |
| Patti Smith          |
| Dave Eggers          |
| Neil Gaiman          |
| Raymond Carver       |
| Raymond Carver       |
| Don DeLillo          |
| John Steinbeck       |
| David Foster Wallace |
| David Foster Wallace |
+----------------------+
16 rows in set (0.00 sec)
*/
SELECT CONCAT_WS(' - ', 'A', 'M', 'R'); /* WS: with separator */
/*
+-----------+
| Name      |
+-----------+
| A - M - R |
+-----------+
1 row in set (0.00 sec)
*/
SELECT CONCAT_WS('-', author_fname, author_lname) AS 'Author Full Name' FROM books;
/*
+------------------------+
| Author Full Name       |
+------------------------+
| Jhumpa-Lahiri        |
| Neil-Gaiman          |
| Neil-Gaiman          |
| Jhumpa-Lahiri        |
| Dave-Eggers          |
| Dave-Eggers          |
| Michael-Chabon       |
| Patti-Smith          |
| Dave-Eggers          |
| Neil-Gaiman          |
| Raymond-Carver       |
| Raymond-Carver       |
| Don-DeLillo          |
| John-Steinbeck       |
| David-Foster Wallace |
| David-Foster Wallace |
+------------------------+
16 rows in set (0.00 sec)
*/


-- SUBSTRING/SUBSTR: produce a substring from a string.
SELECT SUBSTRING('Hello World!', 7); /* start from the 7th character and go to the end of the string. */
/*
+------------------------------+
| SUBSTRING('Hello World!', 7) |
+------------------------------+
| World!                       |
+------------------------------+
1 row in set (0.00 sec)
*/
SELECT SUBSTRING('Hello World!', 7, 5); /* start from the 7th character and go to the next 5 characters. */
/*
+---------------------------------+
| SUBSTRING('Hello World!', 7, 5) |
+---------------------------------+
| World                           |
+---------------------------------+
1 row in set (0.00 sec)
*/
SELECT SUBSTRING('Hello World!', -1); /* negative number means start from the end of the string. */
/*
+-------------------------------+
| SUBSTRING('Hello World!', -1) |
+-------------------------------+
| !                             | -- last character
+-------------------------------+
1 row in set (0.03 sec)
*/
SELECT SUBSTRING('Hello World!', -2);
/*
+-------------------------------+
| SUBSTRING('Hello World!', -2) |
+-------------------------------+
| d!                            | -- last two characters
+-------------------------------+
1 row in set (0.00 sec)
*/
SELECT SUBSTRING('Hello World!', -2, 1);
/*
+----------------------------------+
| SUBSTRING('Hello World!', -2, 1) |
+----------------------------------+
| d                                | -- the second to last character
+----------------------------------+
1 row in set (0.00 sec)
*/
SELECT SUBSTRING(title, 1, 15) FROM books;
/*
+-------------------------+
| SUBSTRING(title, 1, 15) |
+-------------------------+
| The Namesake            |
| Norse Mythology         |
| American Gods           |
| Interpreter of          |
| A Hologram for          |
| The Circle              |
| The Amazing Adv         |
| Just Kids               |
| A Heartbreaking         |
| Coraline                |
| What We Talk Ab         |
| Where I'm Calli         |
| White Noise             |
| Cannery Row             |
| Oblivion: Stori         |
| Consider the Lo         |
+-------------------------+
16 rows in set (0.03 sec)
*/
SELECT SUBSTR(title, 1, 15) FROM books; /* SUBSTR is an alias for SUBSTRING. */
/*
+----------------------+
| SUBSTR(title, 1, 15) |
+----------------------+
| The Namesake         |
| Norse Mythology      |
| American Gods        |
| Interpreter of       |
| A Hologram for       |
| The Circle           |
| The Amazing Adv      |
| Just Kids            |
| A Heartbreaking      |
| Coraline             |
| What We Talk Ab      |
| Where I'm Calli      |
| White Noise          |
| Cannery Row          |
| Oblivion: Stori      |
| Consider the Lo      |
+----------------------+
16 rows in set (0.00 sec)
*/
SELECT SUBSTR(author_lname, 1, 1) AS Initial, author_lname FROM books;
/*
+---------+----------------+
| Initial | author_lname   |
+---------+----------------+
| L       | Lahiri         |
| G       | Gaiman         |
| G       | Gaiman         |
| L       | Lahiri         |
| E       | Eggers         |
| E       | Eggers         |
| C       | Chabon         |
| S       | Smith          |
| E       | Eggers         |
| G       | Gaiman         |
| C       | Carver         |
| C       | Carver         |
| D       | DeLillo        |
| S       | Steinbeck      |
| F       | Foster Wallace |
| F       | Foster Wallace |
+---------+----------------+
16 rows in set (0.02 sec)
*/
SELECT SUBSTR(author_fname, 1, 1) AS 'fname', SUBSTR(author_lname, 1, 1) AS 'lname'  FROM books;
/*
+-------+-------+
| fname | lname |
+-------+-------+
| L     | J     |
| G     | N     |
| G     | N     |
| L     | J     |
| E     | D     |
| E     | D     |
| C     | M     |
| S     | P     |
| E     | D     |
| G     | N     |
| C     | R     |
| C     | R     |
| D     | D     |
| S     | J     |
| F     | D     |
| F     | D     |
+-------+-------+
16 rows in set (0.00 sec)
*/
SELECT SUBSTR('foobarbar' FROM 4); /* start from the 4th character and go to the end of the string. */
SELECT SUBSTR('Sakila' FROM -4 FOR 2); /* start from the 4th character from the end of the string and go to the next 2 characters. */


-- CONCAT | SUBSTR
SELECT CONCAT(SUBSTR(title, 1, 10), ' ...') AS 'Short Title' FROM books;
/*
+---------------+
| Short Title   |
+---------------+
| The Namesa ... |
| Norse Myth ... |
| American G ... |
| Interprete ... |
| A Hologram ... |
| The Circle ... |
| The Amazin ... |
| Just Kids ...  |
| A Heartbre ... |
| Coraline ...   |
| What We Ta ... |
| Where I'm  ... |
| White Nois ... |
| Cannery Ro ... |
| Oblivion:  ... |
| Consider t ... |
+---------------+
16 rows in set (0.00 sec)
*/
SELECT CONCAT(SUBSTR(title FROM 1 FOR 10), '...') AS 'Short Title' FROM books;
/*
+---------------+
| Short Title   |
+---------------+
| The Namesa... |
| Norse Myth... |
| American G... |
| Interprete... |
| A Hologram... |
| The Circle... |
| The Amazin... |
| Just Kids...  |
| A Heartbre... |
| Coraline...   |
| What We Ta... |
| Where I'm ... |
| White Nois... |
| Cannery Ro... |
| Oblivion: ... |
| Consider t... |
+---------------+
16 rows in set (0.00 sec)
*/
SELECT CONCAT(SUBSTR(author_lname, 1, 1), '.', SUBSTR(author_fname, 1, 1), '.') AS 'Short Name' FROM books;
/*
+------------+
| Short Name |
+------------+
| L.J.       |
| G.N.       |
| G.N.       |
| L.J.       |
| E.D.       |
| E.D.       |
| C.M.       |
| S.P.       |
| E.D.       |
| G.N.       |
| C.R.       |
| C.R.       |
| D.D.       |
| S.J.       |
| F.D.       |
| F.D.       |
+------------+
16 rows in set (0.01 sec)
*/


-- REPLACE: allows us to replace portions of a string with some other replacement string. (str, from_str, to_str). case sensitive.
SELECT REPLACE('Hello World!', 'World', 'Planet') AS 'New String';
/*
+----------------+
| New String     |
+----------------+
| Hello Planet!  |
+----------------+
1 row in set (0.00 sec)
*/
SELECT REPLACE('cheese bread coffee milk', ' ', ' and ') AS 'New String';
/*
+--------------------------------------+
| New String                           |
+--------------------------------------+
| cheese and bread and coffee and milk |
+--------------------------------------+
1 row in set (0.00 sec)
*/
SELECT REPLACE('I am Mr. AMR', 'amr', 'ALI') AS 'New String';
/*
+----------------+
| New String     |
+----------------+
| I am Mr. AMR   | => it still as it is because it is case sensitive.
+----------------+
1 row in set (0.00 sec)
*/
SELECT REPLACE(UPPER('I am Mr. AMR'), 'AMR', 'ALI') AS 'New String';
/*
+----------------+
| New String     |
+----------------+
| I AM Mr. ALI   |
+----------------+
1 row in set (0.00 sec)
*/
SELECT REPLACE(title, ' ', '-') FROM books;
/*
+-----------------------------------------------------+
| REPLACE(title, ' ', '-')                            |
+-----------------------------------------------------+
| The-Namesake                                        |
| Norse-Mythology                                     |
| American-Gods                                       |
| Interpreter-of-Maladies                             |
| A-Hologram-for-the-King:-A-Novel                    |
| The-Circle                                          |
| The-Amazing-Adventures-of-Kavalier-&-Clay           |
| Just-Kids                                           |
| A-Heartbreaking-Work-of-Staggering-Genius           |
| Coraline                                            |
| What-We-Talk-About-When-We-Talk-About-Love:-Stories |
| Where-I'm-Calling-From:-Selected-Stories            |
| White-Noise                                         |
| Cannery-Row                                         |
| Oblivion:-Stories                                   |
| Consider-the-Lobster                                |
+-----------------------------------------------------+
16 rows in set (0.53 sec)
*/
SELECT REPLACE(CONCAT(author_fname, ' ', author_lname), ' ', '-') AS author FROM books;
/*
+----------------------+
| author               |
+----------------------+
| Jhumpa-Lahiri        |
| Neil-Gaiman          |
| Neil-Gaiman          |
| Jhumpa-Lahiri        |
| Dave-Eggers          |
| Dave-Eggers          |
| Michael-Chabon       |
| Patti-Smith          |
| Dave-Eggers          |
| Neil-Gaiman          |
| Raymond-Carver       |
| Raymond-Carver       |
| Don-DeLillo          |
| John-Steinbeck       |
| David-Foster-Wallace |
| David-Foster-Wallace |
+----------------------+
16 rows in set (0.03 sec)
*/
update books set title=REPLACE(title, ' ', '-'); /* treat function as a value */
/*
Query OK, 15 rows affected (0.69 sec)
Rows matched: 16  Changed: 15  Warnings: 0
*/


-- REVERSE: reverses a string.
SELECT REVERSE('Hello World!') AS 'Reversed String';
/*
+-----------------+
| Reversed String |
+-----------------+
| !dlroW olleH    |
+-----------------+
1 row in set (0.00 sec)
*/
SELECT REVERSE(NULL); /* NULL is not a string. it is the only exception. if we do this select reverse and then we pass through the explicit value null. Well, we get no back. We don't get LLUN. It's just if you pass it, nothing. The value of nothingness, we get back nothingness.
/*
+--------------+
| REVERSE(NULL)|
+--------------+
| NULL         |
+--------------+
1 row in set (0.00 sec)
*/
SELECT CONCAT_WS(' ', author_fname, REVERSE(author_fname)) AS 'CONCAT&REVERSE' FROM books;
/*
+-----------------+
| CONCAT&REVERSE  |
+-----------------+
| Jhumpa apmuhJ   |
| Neil lieN       |
| Neil lieN       |
| Jhumpa apmuhJ   |
| Dave evaD       |
| Dave evaD       |
| Michael leahciM |
| Patti ittaP     |
| Dave evaD       |
| Neil lieN       |
| Raymond dnomyaR |
| Raymond dnomyaR |
| Don noD         |
| John nhoJ       |
| David divaD     |
| David divaD     |
+-----------------+
16 rows in set (0.00 sec)
*/


-- CHAR_LENGTH: returns the length of a string in characters.
SELECT CHAR_LENGTH('Hello World');
/*
+----------------------------+
| CHAR_LENGTH('Hello World') |
+----------------------------+
|                         11 |
+----------------------------+
1 row in set (0.05 sec)
*/
SELECT author_lname, CHAR_LENGTH(author_lname) AS 'length' FROM books;
/*
+----------------+--------+
| author_lname   | length |
+----------------+--------+
| Lahiri         |      6 |
| Gaiman         |      6 |
| Gaiman         |      6 |
| Lahiri         |      6 |
| Eggers         |      6 |
| Eggers         |      6 |
| Chabon         |      6 |
| Smith          |      5 |
| Eggers         |      6 |
| Gaiman         |      6 |
| Carver         |      6 |
| Carver         |      6 |
| DeLillo        |      7 |
| Steinbeck      |      9 |
| Foster Wallace |     14 |
| Foster Wallace |     14 |
+----------------+--------+
16 rows in set (0.01 sec)
*/
SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') AS 'lname length' FROM books;
/*
+----------------------------------------------+
| lname length                                 |
+----------------------------------------------+
| Lahiri is 6 characters long                  |
| Gaiman is 6 characters long                  |
| Gaiman is 6 characters long                  |
| Lahiri is 6 characters long                  |
| Eggers is 6 characters long                  |
| Eggers is 6 characters long                  |
| Chabon is 6 characters long                  |
| Smith is 5 characters long                   |
| Eggers is 6 characters long                  |
| Gaiman is 6 characters long                  |
| Carver is 6 characters long                  |
| Carver is 6 characters long                  |
| DeLillo is 7 characters long                 |
| Steinbeck is 9 characters long               |
| Foster Wallace is 14 characters long         |
| Foster Wallace is 14 characters long         |
+----------------------------------------------+
16 rows in set (0.01 sec)
*/


-- LENGTH: returns the length of a string in bytes.
SELECT LENGTH('Hello World');
/*
+------------------+---+
| LENGTH('Hello World')|
+-------------------+--+
|                  11  |
+---------------------++
1 row in set (0.00 sec)
*/
SELECT LENGTH('×آلآ:؟');
/*
+------------------+
| LENGTH('×???:?') |
+------------------+
|                6 |
+------------------+
1 row in set (0.03 sec)
*/


-- UPPER/UCASE & LOWER/LCASE: convert a string to uppercase or lowercase.
SELECT UPPER('Hello World');
/*
+----------------------+
| UPPER('Hello World') |
+----------------------+
| HELLO WORLD          |
+----------------------+
1 row in set (0.00 sec)
*/
SELECT UCASE('Hello World');
/*
+----------------------+
| UCASE('Hello World') |
+----------------------+
| HELLO WORLD          |
+----------------------+
1 row in set (0.00 sec)
*/
SELECT LOWER('Hello World');
/*
+----------------------+
| LOWER('Hello World') |
+----------------------+
| hello world          |
+----------------------+
1 row in set (0.00 sec)
*/
SELECT LCASE('Hello World');
/*
+----------------------+
| LCASE('Hello World') |
+----------------------+
| hello world          |
+----------------------+
1 row in set (0.00 sec)
*/
SELECT CONCAT(LOWER('I LOVE '), UCASE(title), ' !!!') AS title FROM books;
/*
+----------------------------------------------------------------+
| title                                                          |
+----------------------------------------------------------------+
| i love THE-NAMESAKE !!!                                        |
| i love NORSE-MYTHOLOGY !!!                                     |
| i love AMERICAN-GODS !!!                                       |
| i love INTERPRETER-OF-MALADIES !!!                             |
| i love A-HOLOGRAM-FOR-THE-KING:-A-NOVEL !!!                    |
| i love THE-CIRCLE !!!                                          |
| i love THE-AMAZING-ADVENTURES-OF-KAVALIER-&-CLAY !!!           |
| i love JUST-KIDS !!!                                           |
| i love A-HEARTBREAKING-WORK-OF-STAGGERING-GENIUS !!!           |
| i love CORALINE !!!                                            |
| i love WHAT-WE-TALK-ABOUT-WHEN-WE-TALK-ABOUT-LOVE:-STORIES !!! |
| i love WHERE-I'M-CALLING-FROM:-SELECTED-STORIES !!!            |
| i love WHITE-NOISE !!!                                         |
| i love CANNERY-ROW !!!                                         |
| i love OBLIVION:-STORIES !!!                                   |
| i love CONSIDER-THE-LOBSTER !!!                                |
+----------------------------------------------------------------+
16 rows in set (0.04 sec)
*/


-- INSERT: insert a string into another string.
SELECT INSERT('Hello World', 7, 5, 'Universe'); /* (str, pos, replaced_char, newstr) */
/*
+-----------------------------------------+
| INSERT('Hello World', 7, 5, 'Universe') |
+-----------------------------------------+
| Hello Universe                          |
+-----------------------------------------+
1 row in set (0.00 sec)
*/


-- LEFT & RIGHT: return a certain number of characters from the left or right side of a string.
SELECT LEFT('Hello World', 5);
/*
+------------------------+
| LEFT('Hello World', 5) |
+------------------------+
| Hello                  |
+------------------------+
1 row in set (0.00 sec)
*/
SELECT RIGHT('Hello World', 5);
/*
+-------------------------+
| RIGHT('Hello World', 5) |
+-------------------------+
| World                   |
+-------------------------+
1 row in set (0.00 sec)
*/


-- REPEAT: repeat a string a certain number of times.
SELECT REPEAT('Hello', 5);
/*
+---------------------------+
| REPEAT('Hello', 5)        |
+---------------------------+
| HelloHelloHelloHelloHello |
+---------------------------+
1 row in set (0.00 sec)
*/


-- TRIM: remove leading or trailing spaces from a string.
SELECT TRIM('  pickle  ');
/*
+--------------------+
| TRIM('  pickle  ') |
+--------------------+
| pickle             |
+--------------------+
1 row in set (0.00 sec)
*/
SELECT TRIM('..pickle..');
/*
+--------------------+
| TRIM('..pickle..') |
+--------------------+
| ..pickle..         |
+--------------------+
1 row in set (0.00 sec)
*/
SELECT TRIM('.' FROM '  ....pickle pickle....  ');
/*
+--------------------------------------------+
| TRIM('.' FROM '  ....pickle pickle....  ') |
+--------------------------------------------+
|   ....pickle pickle....                    |
+--------------------------------------------+
1 row in set (0.03 sec)
*/
SELECT TRIM('.' FROM '....pickle pickle....');
/*
+----------------------------------------+
| TRIM('.' FROM '....pickle pickle....') |
+----------------------------------------+
| pickle pickle                          |
+----------------------------------------+
1 row in set (0.00 sec)
*/
SELECT TRIM(LEADING '.' FROM '....pickle pickle....') AS 'LEADING';
/*
+------------------------+
| LEADING                |
+------------------------+
| pickle pickle....      |
+------------------------+
1 row in set (0.00 sec)
*/
SELECT TRIM(TRAILING '.' FROM '....pickle pickle....') AS 'TRAILING';
/*
+------------------------+
| TRAILING               |
+------------------------+
| ....pickle pickle      |
+------------------------+
1 row in set (0.00 sec)
*/
SELECT TRIM(BOTH '.' FROM '....pickle pickle....') AS 'BOTH';
/*
+------------------------+
| BOTH                   |
+------------------------+
| pickle pickle          |
+------------------------+
1 row in set (0.00 sec)
*/


/* Exercise */

/*
1. Reverse and Uppercase the following sentence
  "Why does my cat look at me with such hatred?"

2. What Does This Print Out?
  SELECT
    REPLACE
    (
    CONCAT('I', ' ', 'like', ' ', 'cats'),
    ' ',
    '-'
    )
  ;

3. Replace spaces in titles with '->'
  +--------------------------------------------------------------+
  | title                                                        |
  +--------------------------------------------------------------+
  | The->Namesake                                                |
  | Norse->Mythology                                             |
  | American->Gods                                               |
  | Interpreter->of->Maladies                                    |
  | A->Hologram->for->the->King:->A->Novel                       |
  | The->Circle                                                  |
  | The->Amazing->Adventures->of->Kavalier->&->Clay              |
  | Just->Kids                                                   |
  | A->Heartbreaking->Work->of->Staggering->Genius:              |
  | Coraline                                                     |
  | What->We->Talk->About->When->We->Talk->About->Love:->Stories |
  | Where->I'm->Calling->From:->Selected->Stories                |
  | White->Noise                                                 |
  | Cannery->Row                                                 |
  | Oblivion:->Stories                                           |
  | Consider->the->Lobster                                       |
  +--------------------------------------------------------------+

4. Print This Out
  +----------------+----------------+
  | forwards       | backwards      |
  +----------------+----------------+
  | Lahiri         | irihaL         |
  | Gaiman         | namiaG         |
  | Gaiman         | namiaG         |
  | Lahiri         | irihaL         |
  | Eggers         | sreggE         |
  | Eggers         | sreggE         |
  | Chabon         | nobahC         |
  | Smith          | htimS          |
  | Eggers         | sreggE         |
  | Gaiman         | namiaG         |
  | Carver         | revraC         |
  | Carver         | revraC         |
  | DeLillo        | olliLeD        |
  | Steinbeck      | kcebnietS      |
  | Foster Wallace | ecallaW retsoF |
  | Foster Wallace | ecallaW retsoF |
  | Smith          | htimS          |
  +----------------+----------------+

5. You Know What To Do!
  +----------------------+
  | full name in caps    |
  +----------------------+
  | JHUMPA LAHIRI        |
  | NEIL GAIMAN          |
  | NEIL GAIMAN          |
  | JHUMPA LAHIRI        |
  | DAVE EGGERS          |
  | DAVE EGGERS          |
  | MICHAEL CHABON       |
  | PATTI SMITH          |
  | DAVE EGGERS          |
  | NEIL GAIMAN          |
  | RAYMOND CARVER       |
  | RAYMOND CARVER       |
  | DON DELILLO          |
  | JOHN STEINBECK       |
  | DAVID FOSTER WALLACE |
  | DAVID FOSTER WALLACE |
  | ADAM SMITH           |
  +----------------------+

6. Make This Happen!
  +--------------------------------------------------------------------------+
  | blurb                                                                    |
  +--------------------------------------------------------------------------+
  | The Namesake was released in 2003                                        |
  | Norse Mythology was released in 2016                                     |
  | American Gods was released in 2001                                       |
  | Interpreter of Maladies was released in 1996                             |
  | A Hologram for the King: A Novel was released in 2012                    |
  | The Circle was released in 2013                                          |
  | The Amazing Adventures of Kavalier & Clay was released in 2000           |
  | Just Kids was released in 2010                                           |
  | A Heartbreaking Work of Staggering Genius: was released in 2001          |
  | Coraline was released in 2003                                            |
  | What We Talk About When We Talk About Love: Stories was released in 1981 |
  | Where I'm Calling From: Selected Stories was released in 1989            |
  | White Noise was released in 1985                                         |
  | Cannery Row was released in 1945                                         |
  | Oblivion: Stories was released in 2004                                   |
  | Consider the Lobster was released in 2005                                |
  +--------------------------------------------------------------------------+

7. Print book titles and the length of each title
  +-----------------------------------------------------+-----------------+
  | title                                               | character count |
  +-----------------------------------------------------+-----------------+
  | The Namesake                                        |              12 |
  | Norse Mythology                                     |              15 |
  | American Gods                                       |              13 |
  | Interpreter of Maladies                             |              23 |
  | A Hologram for the King: A Novel                    |              32 |
  | The Circle                                          |              10 |
  | The Amazing Adventures of Kavalier & Clay           |              41 |
  | Just Kids                                           |               9 |
  | A Heartbreaking Work of Staggering Genius:          |              42 |
  | Coraline                                            |               8 |
  | What We Talk About When We Talk About Love: Stories |              51 |
  | Where I'm Calling From: Selected Stories            |              40 |
  | White Noise                                         |              11 |
  | Cannery Row                                         |              11 |
  | Oblivion: Stories                                   |              17 |
  | Consider the Lobster                                |              20 |
  +-----------------------------------------------------+-----------------+

8. Last One, I Promise!
  +---------------+-------------+--------------+
  | short title   | author      | quantity     |
  +---------------+-------------+--------------+
  | American G... | Gaiman,Neil | 12 in stock  |
  | A Heartbre... | Eggers,Dave | 104 in stock |
  +---------------+-------------+--------------+
*/
-- 1.
select upper(reverse("Why does my cat look at me with such hatred?")) AS '#1';
/*
+----------------------------------------------+
| #1                                           |
+----------------------------------------------+
| ?DERTAH HCUS HTIW EM TA KOOL TAC YM SEOD YHW |
+----------------------------------------------+
1 row in set (0.02 sec)
*/

-- 2.
/*
+-------------+
| #2          |
+-------------+
| I-like-cats |
+-------------+
1 row in set (0.00 sec)
*/

-- 3.
select replace(title, ' ', '->') AS title from books;
/*
+--------------------------------------------------------------+
| title                                                        |
+--------------------------------------------------------------+
| The->Namesake                                                |
| Norse->Mythology                                             |
| American->Gods                                               |
| Interpreter->of->Maladies                                    |
| A->Hologram->for->the->King:->A->Novel                       |
| The->Circle                                                  |
| The->Amazing->Adventures->of->Kavalier->&->Clay              |
| Just->Kids                                                   |
| A->Heartbreaking->Work->of->Staggering->Genius               |
| Coraline                                                     |
| What->We->Talk->About->When->We->Talk->About->Love:->Stories |
| Where->I'm->Calling->From:->Selected->Stories                |
| White->Noise                                                 |
| Cannery->Row                                                 |
| Oblivion:->Stories                                           |
| Consider->the->Lobster                                       |
+--------------------------------------------------------------+
16 rows in set (0.00 sec)
*/

-- 4.
select author_lname AS 'forwards', reverse(author_lname) AS 'backwards' from books;
/*
+----------------+----------------+
| forwards       | backwards      |
+----------------+----------------+
| Lahiri         | irihaL         |
| Gaiman         | namiaG         |
| Gaiman         | namiaG         |
| Lahiri         | irihaL         |
| Eggers         | sreggE         |
| Eggers         | sreggE         |
| Chabon         | nobahC         |
| Smith          | htimS          |
| Eggers         | sreggE         |
| Gaiman         | namiaG         |
| Carver         | revraC         |
| Carver         | revraC         |
| DeLillo        | olliLeD        |
| Steinbeck      | kcebnietS      |
| Foster Wallace | ecallaW retsoF |
| Foster Wallace | ecallaW retsoF |
+----------------+----------------+
16 rows in set (0.05 sec)
*/

-- 5.
select upper(CONCAT(author_fname, ' ', author_lname)) AS 'full name in caps' from books;
/*
+----------------------+
| full name in caps    |
+----------------------+
| JHUMPA LAHIRI        |
| NEIL GAIMAN          |
| NEIL GAIMAN          |
| JHUMPA LAHIRI        |
| DAVE EGGERS          |
| DAVE EGGERS          |
| MICHAEL CHABON       |
| PATTI SMITH          |
| DAVE EGGERS          |
| NEIL GAIMAN          |
| RAYMOND CARVER       |
| RAYMOND CARVER       |
| DON DELILLO          |
| JOHN STEINBECK       |
| DAVID FOSTER WALLACE |
| DAVID FOSTER WALLACE |
+----------------------+
16 rows in set (0.03 sec)
*/

-- 6.
select concat(title, ' was released in ', released_year) AS 'blurb' from books;
/*
+--------------------------------------------------------------------------+
| blurb                                                                    |
+--------------------------------------------------------------------------+
| The Namesake was released in 2003                                        |
| Norse Mythology was released in 2016                                     |
| American Gods was released in 2001                                       |
| Interpreter of Maladies was released in 1996                             |
| A Hologram for the King: A Novel was released in 2012                    |
| The Circle was released in 2013                                          |
| The Amazing Adventures of Kavalier & Clay was released in 2000           |
| Just Kids was released in 2010                                           |
| A Heartbreaking Work of Staggering Genius was released in 2001           |
| Coraline was released in 2003                                            |
| What We Talk About When We Talk About Love: Stories was released in 1981 |
| Where I'm Calling From: Selected Stories was released in 1989            |
| White Noise was released in 1985                                         |
| Cannery Row was released in 1945                                         |
| Oblivion: Stories was released in 2004                                   |
| Consider the Lobster was released in 2005                                |
+--------------------------------------------------------------------------+
16 rows in set (0.05 sec)
*/

-- 7.
select title, char_length(title) AS 'character count' from books;
/*
+-----------------------------------------------------+-----------------+
| title                                               | character count |
+-----------------------------------------------------+-----------------+
| The Namesake                                        |              12 |
| Norse Mythology                                     |              15 |
| American Gods                                       |              13 |
| Interpreter of Maladies                             |              23 |
| A Hologram for the King: A Novel                    |              32 |
| The Circle                                          |              10 |
| The Amazing Adventures of Kavalier & Clay           |              41 |
| Just Kids                                           |               9 |
| A Heartbreaking Work of Staggering Genius           |              41 |
| Coraline                                            |               8 |
| What We Talk About When We Talk About Love: Stories |              51 |
| Where I'm Calling From: Selected Stories            |              40 |
| White Noise                                         |              11 |
| Cannery Row                                         |              11 |
| Oblivion: Stories                                   |              17 |
| Consider the Lobster                                |              20 |
+-----------------------------------------------------+-----------------+
16 rows in set (0.00 sec)
*/

-- 8.
select 
  concat(left(title, 10), '...') AS 'short title', 
  concat(author_lname, ',', author_fname) AS 'author', 
  concat(stock_quantity, ' in stock') AS quantity 
from 
  books 
where 
  released_year = 2001;
/*
+---------------+-------------+--------------+
| short title   | author      | quantity     |
+---------------+-------------+--------------+
| American G... | Gaiman,Neil | 12 in stock  |
| A Heartbre... | Eggers,Dave | 104 in stock |
+---------------+-------------+--------------+
2 rows in set (0.10 sec)
*/

/*******************************************************************************************************************************************/

/* Refining Selections */

-- DISTINCT: returns only unique values in the output
SELECT DISTINCT author_lname FROM books;
/*
+----------------+
| author_lname   |
+----------------+
| Lahiri         |
| Gaiman         |
| Eggers         |
| Chabon         |
| Smith          |
| Carver         |
| DeLillo        |
| Steinbeck      |
| Foster Wallace |
| Harris         |
| Saunders       |
+----------------+
11 rows in set (0.03 sec)
*/
SELECT DISTINCT CONCAT(author_fname,' ', author_lname) AS 'Full Name' FROM books;
/*
+----------------------------------------+
| Full Name                              |
+----------------------------------------+
| Jhumpa Lahiri                          |
| Neil Gaiman                            |
| Dave Eggers                            |
| Michael Chabon                         |
| Patti Smith                            |
| Raymond Carver                         |
| Don DeLillo                            |
| John Steinbeck                         |
| David Foster Wallace                   |
| Dan Harris                             |
| Freida Harris                          |
| George Saunders                        |
+----------------------------------------+
12 rows in set (0.04 sec)
*/
SELECT DISTINCT author_fname, author_lname FROM books;
/*
+--------------+----------------+
| author_fname | author_lname   |
+--------------+----------------+
| Jhumpa       | Lahiri         |
| Neil         | Gaiman         |
| Dave         | Eggers         |
| Michael      | Chabon         |
| Patti        | Smith          |
| Raymond      | Carver         |
| Don          | DeLillo        |
| John         | Steinbeck      |
| David        | Foster Wallace |
| Dan          | Harris         |
| Freida       | Harris         |
| George       | Saunders       |
+--------------+----------------+
12 rows in set (0.00 sec)
*/
SELECT DISTINCT author_fname, author_lname, released_year FROM books;
/*
we lost distinct because of adding released_year to query
+--------------+----------------+---------------+
| author_fname | author_lname   | released_year |
+--------------+----------------+---------------+
| Jhumpa       | Lahiri         |          2003 |
| Neil         | Gaiman         |          2016 |
| Neil         | Gaiman         |          2001 | => 2 books with same author but different year
| Jhumpa       | Lahiri         |          1996 |
| Dave         | Eggers         |          2012 |
| Dave         | Eggers         |          2013 | => 2 books with same author but different year
| Michael      | Chabon         |          2000 |
| Patti        | Smith          |          2010 |
| Dave         | Eggers         |          2001 |
| Neil         | Gaiman         |          2003 |
| Raymond      | Carver         |          1981 |
| Raymond      | Carver         |          1989 | => 2 books with same author but different year
| Don          | DeLillo        |          1985 |
| John         | Steinbeck      |          1945 |
| David        | Foster Wallace |          2004 |
| David        | Foster Wallace |          2005 | => 2 books with same author but different year
| Dan          | Harris         |          2014 |
| Freida       | Harris         |          2001 |
| George       | Saunders       |          2017 |
+--------------+----------------+---------------+
19 rows in set (0.01 sec)
*/


-- ORDER BY: sorts the result set by a specified column either alphabetically or numerically. ASC is default
SELECT author_lname, author_fname FROM books ORDER BY author_lname;
/*
+----------------+--------------+
| author_lname   | author_fname |
+----------------+--------------+
| NULL           | Freida       |
| Carver         | Raymond      |
| Carver         | Raymond      |
| Chabon         | Michael      |
| DeLillo        | Don          |
| Eggers         | Dave         |
| Eggers         | Dave         |
| Eggers         | Dave         |
| Foster Wallace | David        |
| Foster Wallace | David        |
| Gaiman         | Neil         |
| Gaiman         | Neil         |
| Gaiman         | Neil         |
| Harris         | Dan          |
| Harris         | Freida       |
| Lahiri         | Jhumpa       |
| Lahiri         | Jhumpa       |
| Saunders       | George       |
| Smith          | Patti        |
| Steinbeck      | John         |
+----------------+--------------+
19 rows in set (0.01 sec)
*/
SELECT author_lname, author_fname FROM books ORDER BY author_lname DESC;
/*
+----------------+--------------+
| author_lname   | author_fname |
+----------------+--------------+
| Steinbeck      | John         |
| Smith          | Patti        |
| Saunders       | George       |
| Lahiri         | Jhumpa       |
| Lahiri         | Jhumpa       |
| Harris         | Dan          |
| Harris         | Freida       |
| Gaiman         | Neil         |
| Gaiman         | Neil         |
| Gaiman         | Neil         |
| Foster Wallace | David        |
| Foster Wallace | David        |
| Eggers         | Dave         |
| Eggers         | Dave         |
| Eggers         | Dave         |
| DeLillo        | Don          |
| Chabon         | Michael      |
| Carver         | Raymond      |
| Carver         | Raymond      |
| NULL           | Freida       |
+----------------+--------------+
19 rows in set (0.00 sec)
*/
SELECT author_lname, author_fname FROM books ORDER BY released_year; /* order by data not selected - You don't have to actually select a column to work with it */
/*
+----------------+--------------+
| author_lname   | author_fname |
+----------------+--------------+
| Steinbeck      | John         |
| Carver         | Raymond      |
| DeLillo        | Don          |
| Carver         | Raymond      |
| Lahiri         | Jhumpa       |
| Chabon         | Michael      |
| Gaiman         | Neil         |
| Eggers         | Dave         |
| Harris         | Freida       |
| Lahiri         | Jhumpa       |
| Gaiman         | Neil         |
| Foster Wallace | David        |
| Foster Wallace | David        |
| Smith          | Patti        |
| Eggers         | Dave         |
| Eggers         | Dave         |
| Harris         | Dan          |
| Gaiman         | Neil         |
| Saunders       | George       |
+----------------+--------------+
19 rows in set (0.00 sec)
*/
SELECT author_lname, author_fname FROM books ORDER BY 2 DESC; /* order by second column:author_fname - shorthand syntax for order by column name */
SELECT author_lname, author_fname FROM books ORDER BY author_fname DESC, author_lname ASC; /* order by author_fname DESC then author_lname ASC */
SELECT CONCAT(author_lname, ' ', author_fname) AS 'author', released_year FROM books ORDER BY author DESC; /* order by alias: author */
/*
+----------------------+---------------+
| author               | released_year |
+----------------------+---------------+
| Steinbeck John       |          1945 |
| Smith Patti          |          2010 |
| Saunders George      |          2017 |
| Lahiri Jhumpa        |          2003 |
| Lahiri Jhumpa        |          1996 |
| Harris Freida        |          2001 |
| Harris Dan           |          2014 |
| Gaiman Neil          |          2016 |
| Gaiman Neil          |          2001 |
| Gaiman Neil          |          2003 |
| Foster Wallace David |          2004 |
| Foster Wallace David |          2005 |
| Eggers Dave          |          2012 |
| Eggers Dave          |          2013 |
| Eggers Dave          |          2001 |
| DeLillo Don          |          1985 |
| Chabon Michael       |          2000 |
| Carver Raymond       |          1981 |
| Carver Raymond       |          1989 |
+----------------------+---------------+
19 rows in set (0.00 sec)
*/


-- LIMIT: limits the number of rows returned in a result set.
SELECT author_lname, author_fname FROM books ORDER BY author_lname DESC LIMIT 3;
/*
+--------------+--------------+
| author_lname | author_fname |
+--------------+--------------+
| Steinbeck    | John         |
| Smith        | Patti        |
| Saunders     | George       |
+--------------+--------------+
3 rows in set (0.00 sec)
*/
SELECT author_lname, author_fname FROM books ORDER BY author_lname DESC LIMIT 1, 3; /* skip first row, return next 3 */
SELECT author_lname, author_fname FROM books ORDER BY author_lname DESC LIMIT 0, 3; /* do not skip, return first 3 */
SELECT author_lname, author_fname FROM books ORDER BY author_lname DESC LIMIT 3, 7; /* skip first 3 rows, return next 7 */
/*
+--------------+--------------+
| author_lname | author_fname |
+--------------+--------------+
| Lahiri       | Jhumpa       |
| Lahiri       | Jhumpa       |
| Harris       | Dan          |
| Harris       | Freida       |
| Gaiman       | Neil         |
| Gaiman       | Neil         |
| Gaiman       | Neil         |
+--------------+--------------+
7 rows in set (0.01 sec)
*/
SELECT * FROM books LIMIT 950; /* return all rows */
/*
+---------+-----------------------------------------------------+--------------+----------------+---------------+----------------+-------+
| book_id | title                                               | author_fname | author_lname   | released_year | stock_quantity | pages |
+---------+-----------------------------------------------------+--------------+----------------+---------------+----------------+-------+
|       1 | The Namesake                                        | Jhumpa       | Lahiri         |          2003 |             32 |   291 |
|       2 | Norse Mythology                                     | Neil         | Gaiman         |          2016 |             43 |   304 |
|       3 | American Gods                                       | Neil         | Gaiman         |          2001 |             12 |   465 |
|       4 | Interpreter of Maladies                             | Jhumpa       | Lahiri         |          1996 |             97 |   198 |
|       5 | A Hologram for the King: A Novel                    | Dave         | Eggers         |          2012 |            154 |   352 |
|       6 | The Circle                                          | Dave         | Eggers         |          2013 |             26 |   504 |
|       7 | The Amazing Adventures of Kavalier & Clay           | Michael      | Chabon         |          2000 |             68 |   634 |
|       8 | Just Kids                                           | Patti        | Smith          |          2010 |             55 |   304 |
|       9 | A Heartbreaking Work of Staggering Genius           | Dave         | Eggers         |          2001 |            104 |   437 |
|      10 | Coraline                                            | Neil         | Gaiman         |          2003 |            100 |   208 |
|      11 | What We Talk About When We Talk About Love: Stories | Raymond      | Carver         |          1981 |             23 |   176 |
|      12 | Where I'm Calling From: Selected Stories            | Raymond      | Carver         |          1989 |             12 |   526 |
|      13 | White Noise                                         | Don          | DeLillo        |          1985 |             49 |   320 |
|      14 | Cannery Row                                         | John         | Steinbeck      |          1945 |             95 |   181 |
|      15 | Oblivion: Stories                                   | David        | Foster Wallace |          2004 |            172 |   329 |
|      16 | Consider the Lobster                                | David        | Foster Wallace |          2005 |             92 |   343 |
|      17 | 10% Happier                                         | Dan          | Harris         |          2014 |             29 |   256 |
|      18 | fake_book                                           | Freida       | Harris         |          2001 |            287 |   428 |
|      19 | Lincoln In The Bardo                                | George       | Saunders       |          2017 |           1000 |   367 |
+---------+-----------------------------------------------------+--------------+----------------+---------------+----------------+-------+
19 rows in set (0.00 sec)
*/
SELECT * FROM books LIMIT 17, 950; /* skip first 17 rows, return next 950 which is actually all rest of rows */
/*
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
| book_id | title                | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
|      18 | fake_book            | Freida       | Harris       |          2001 |            287 |   428 |
|      19 | Lincoln In The Bardo | George       | Saunders     |          2017 |           1000 |   367 |
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
2 rows in set (0.00 sec)
*/


-- LIKE: used in a WHERE clause to search for a specified pattern in a column. [%] is wildcard for 0 or more characters. [_] is wildcard for exactly 1 character.
SELECT * FROM books WHERE title LIKE '%stories%'; /* searching for word stories anywhere in title */
SELECT * FROM books WHERE title LIKE '_stories%'; /* searching for word stories at beginning of title and exactly 1 character before it */
SELECT * FROM books WHERE title LIKE '______'; /* searching for word exactly 6 characters long */
SELECT * FROM books WHERE title LIKE '%_n_%'; /* searching for word with n in middle of it */
SELECT * FROM books WHERE title LIKE '%o'; /* searching for word ending with o */
/*
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
| book_id | title                | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
|      19 | Lincoln In The Bardo | George       | Saunders     |          2017 |           1000 |   367 |
+---------+----------------------+--------------+--------------+---------------+----------------+-------+
1 row in set (0.00 sec)
*/
SELECT * FROM books WHERE title LIKE '%\%%'; /* To select books with '%' in their title. it is not meant to be a wildcard here */
/*
+---------+-------------+--------------+--------------+---------------+----------------+-------+
| book_id | title       | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+-------------+--------------+--------------+---------------+----------------+-------+
|      17 | 10% Happier | Dan          | Harris       |          2014 |             29 |   256 |
+---------+-------------+--------------+--------------+---------------+----------------+-------+
1 row in set (0.00 sec)
*/
SELECT * FROM books WHERE title LIKE '%\_%'; /* To select books with an underscore '_' in title. it is not meant to be a wildcard here */
/*
+---------+-----------+--------------+--------------+---------------+----------------+-------+
| book_id | title     | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+-----------+--------------+--------------+---------------+----------------+-------+
|      18 | fake_book | Freida       | Harris       |          2001 |            287 |   428 |
+---------+-----------+--------------+--------------+---------------+----------------+-------+
1 row in set (0.00 sec)
*/
SELECT * FROM books WHERE title LIKE '\%'; /* serching for books with exactly 1 character (%) in title */
SELECT * FROM books WHERE title LIKE '\_'; /* serching for books with exactly 1 character (_) in title */


/* Exercise */

-- 1.
/*
Select All Story Collections
Titles  That contain 'stories'
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| Oblivion: Stories                                   |
+-----------------------------------------------------+
*/

-- 2.
/*
Find The Longest Book
Print Out the Title and Page Count
+-------------------------------------------+-------+
| title                                     | pages |
+-------------------------------------------+-------+
| The Amazing Adventures of Kavalier & Clay |   634 |
+-------------------------------------------+-------+
*/

-- 3.
/*
Print a summary containing the title and year, for the 3 most recent books
+-----------------------------+
| summary                     |
+-----------------------------+
| Lincoln In The Bardo - 2017 |
| Norse Mythology - 2016      |
| 10% Happier - 2014          |
+-----------------------------+
*/

-- 4.
/*
Find all books with an author_lname that contains a space(" ")
+----------------------+----------------+
| title                | author_lname   |
+----------------------+----------------+
| Oblivion: Stories    | Foster Wallace |
| Consider the Lobster | Foster Wallace |
+----------------------+----------------+
*/

-- 5.
/*
Find The 3 Books With The Lowest Stock
Select title, year, and stock
+-----------------------------------------------------+---------------+----------------+
| title                                               | released_year | stock_quantity |
+-----------------------------------------------------+---------------+----------------+
| American Gods                                       |          2001 |             12 |
| Where I'm Calling From: Selected Stories            |          1989 |             12 |
| What We Talk About When We Talk About Love: Stories |          1981 |             23 |
+-----------------------------------------------------+---------------+----------------+
*/

-- 6.
/*
Print title and author_lname, sorted first by author_lname and then by title
+-----------------------------------------------------+----------------+
| title                                               | author_lname   |
+-----------------------------------------------------+----------------+
| What We Talk About When We Talk About Love: Stories | Carver         |
| Where I'm Calling From: Selected Stories            | Carver         |
| The Amazing Adventures of Kavalier & Clay           | Chabon         |
| White Noise                                         | DeLillo        |
| A Heartbreaking Work of Staggering Genius           | Eggers         |
| A Hologram for the King: A Novel                    | Eggers         |
| The Circle                                          | Eggers         |
| Consider the Lobster                                | Foster Wallace |
| Oblivion: Stories                                   | Foster Wallace |
| American Gods                                       | Gaiman         |
| Coraline                                            | Gaiman         |
| Norse Mythology                                     | Gaiman         |
| 10% Happier                                         | Harris         |
| fake_book                                           | Harris         |
| Interpreter of Maladies                             | Lahiri         |
| The Namesake                                        | Lahiri         |
| Lincoln In The Bardo                                | Saunders       |
| Just Kids                                           | Smith          |
| Cannery Row                                         | Steinbeck      |
+-----------------------------------------------------+----------------+
*/

-- 7.
/*
Make This Happen...
Sorted Alphabetically By Last Name
+---------------------------------------------+
| yell                                        |
+---------------------------------------------+
| MY FAVORITE AUTHOR IS RAYMOND CARVER!       |
| MY FAVORITE AUTHOR IS RAYMOND CARVER!       |
| MY FAVORITE AUTHOR IS MICHAEL CHABON!       |
| MY FAVORITE AUTHOR IS DON DELILLO!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVID FOSTER WALLACE! |
| MY FAVORITE AUTHOR IS DAVID FOSTER WALLACE! |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS FREIDA HARRIS!        |
| MY FAVORITE AUTHOR IS DAN HARRIS!           |
| MY FAVORITE AUTHOR IS JHUMPA LAHIRI!        |
| MY FAVORITE AUTHOR IS JHUMPA LAHIRI!        |
| MY FAVORITE AUTHOR IS GEORGE SAUNDERS!      |
| MY FAVORITE AUTHOR IS PATTI SMITH!          |
| MY FAVORITE AUTHOR IS JOHN STEINBECK!       |
+---------------------------------------------+
*/
-- 1.
select title from books where title like '%stories%';
/*
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| Oblivion: Stories                                   |
+-----------------------------------------------------+
3 rows in set (0.00 sec)
*/

-- 2.
select title, pages from books order by pages DESC limit 1;
/*
+-------------------------------------------+-------+
| title                                     | pages |
+-------------------------------------------+-------+
| The Amazing Adventures of Kavalier & Clay |   634 |
+-------------------------------------------+-------+
1 row in set (0.00 sec)
*/

-- 3.
select concat(title, ' - ', released_year) AS 'summary' from books order by released_year DESC limit 3;
/*
+-----------------------------+
| summary                     |
+-----------------------------+
| Lincoln In The Bardo - 2017 |
| Norse Mythology - 2016      |
| 10% Happier - 2014          |
+-----------------------------+
3 rows in set (0.00 sec)
*/

-- 4.
select title, author_lname from books where author_lname like '% %';
/*
+----------------------+----------------+
| title                | author_lname   |
+----------------------+----------------+
| Oblivion: Stories    | Foster Wallace |
| Consider the Lobster | Foster Wallace |
+----------------------+----------------+
2 rows in set (0.00 sec)
*/

-- 5.
select title, released_year, stock_quantity from books order by stock_quantity, released_year DESC limit 3;
/*
+-----------------------------------------------------+---------------+----------------+
| title                                               | released_year | stock_quantity |
+-----------------------------------------------------+---------------+----------------+
| American Gods                                       |          2001 |             12 |
| Where I'm Calling From: Selected Stories            |          1989 |             12 |
| What We Talk About When We Talk About Love: Stories |          1981 |             23 |
+-----------------------------------------------------+---------------+----------------+
3 rows in set (0.00 sec)
*/

-- 6.
select title, author_lname from books order by author_lname, title;
/*
+-----------------------------------------------------+----------------+
| title                                               | author_lname   |
+-----------------------------------------------------+----------------+
| What We Talk About When We Talk About Love: Stories | Carver         |
| Where I'm Calling From: Selected Stories            | Carver         |
| The Amazing Adventures of Kavalier & Clay           | Chabon         |
| White Noise                                         | DeLillo        |
| A Heartbreaking Work of Staggering Genius           | Eggers         |
| A Hologram for the King: A Novel                    | Eggers         |
| The Circle                                          | Eggers         |
| Consider the Lobster                                | Foster Wallace |
| Oblivion: Stories                                   | Foster Wallace |
| American Gods                                       | Gaiman         |
| Coraline                                            | Gaiman         |
| Norse Mythology                                     | Gaiman         |
| 10% Happier                                         | Harris         |
| fake_book                                           | Harris         |
| Interpreter of Maladies                             | Lahiri         |
| The Namesake                                        | Lahiri         |
| Lincoln In The Bardo                                | Saunders       |
| Just Kids                                           | Smith          |
| Cannery Row                                         | Steinbeck      |
+-----------------------------------------------------+----------------+
19 rows in set (0.00 sec)
*/

-- 7.
select upper(concat('my favourite author is ', author_fname, ' ', author_lname)) AS 'yell' from books order by author_lname;
/*
+---------------------------------------------+
| yell                                        |
+---------------------------------------------+
| MY FAVOURITE AUTHOR IS RAYMOND CARVER       |
| MY FAVOURITE AUTHOR IS RAYMOND CARVER       |
| MY FAVOURITE AUTHOR IS MICHAEL CHABON       |
| MY FAVOURITE AUTHOR IS DON DELILLO          |
| MY FAVOURITE AUTHOR IS DAVE EGGERS          |
| MY FAVOURITE AUTHOR IS DAVE EGGERS          |
| MY FAVOURITE AUTHOR IS DAVE EGGERS          |
| MY FAVOURITE AUTHOR IS DAVID FOSTER WALLACE |
| MY FAVOURITE AUTHOR IS DAVID FOSTER WALLACE |
| MY FAVOURITE AUTHOR IS NEIL GAIMAN          |
| MY FAVOURITE AUTHOR IS NEIL GAIMAN          |
| MY FAVOURITE AUTHOR IS NEIL GAIMAN          |
| MY FAVOURITE AUTHOR IS DAN HARRIS           |
| MY FAVOURITE AUTHOR IS FREIDA HARRIS        |
| MY FAVOURITE AUTHOR IS JHUMPA LAHIRI        |
| MY FAVOURITE AUTHOR IS JHUMPA LAHIRI        |
| MY FAVOURITE AUTHOR IS GEORGE SAUNDERS      |
| MY FAVOURITE AUTHOR IS PATTI SMITH          |
| MY FAVOURITE AUTHOR IS JOHN STEINBECK       |
+---------------------------------------------+
19 rows in set (0.00 sec)
*/

/*******************************************************************************************************************************************/

/* AGGREGATE FUNCTIONS: functions that can operate on multiple rows or multiple pieces of data at once to tell us the min or the max or the average or the sum or the count - it is aggregate rows into 1 single values, so technically it is not allowed to select other columns along with an aggregate function. */

-- COUNT()
SELECT COUNT(*) FROM books; /* * = means all the rows in the table */
/*
+----------+
| COUNT(*) |
+----------+
|       21 | // 21 rows in the table. counting all the rows in the table even if there are null values in the table.
+----------+
1 row in set (0.46 sec)
*/
SELECT title, author_fname, COUNT(*) FROM books;
/*
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'book_shop.books.title'; this is incompatible with sql_mode=only_full_group_by
*/
/*
it's important to know that this count function doesn't really play nice with other things. because when we do select count from books, it's boiling the whole result down into a single value. But when we do select title and author_fname, that's asking for a bunch of rows. So we're asking for two things that don't work together, at least not easily. There is a setting we can change. It tells you about it here in this error message. It says in your aggregated query this expression number one called title right there is incompatible with SQL mode only_full_group_by
*/
SELECT COUNT(author_fname) FROM books;
/*
+---------------------+
| COUNT(author_fname) |
+---------------------+
|                  19 | // 19 because there are 21 rows in the table, and it's counting the number of rows where author_fname is not null.
+---------------------+
1 row in set (0.00 sec)
*/
SELECT COUNT(DISTINCT author_fname) FROM books;
/*
+------------------------------+
| COUNT(DISTINCT author_fname) |
+------------------------------+
|                           12 |
+------------------------------+
1 row in set (0.10 sec)
*/
SELECT COUNT(*) FROM books WHERE title LIKE '%the%';
/*
+--------------+
| COUNT(title) |
+--------------+
|            6 |
+--------------+
1 row in set (0.02 sec)
*/


-- GROUP BY Clause: GROUP BY is a clause in SQL that is only used with aggregate functions. It is used in collaboration with the SELECT statement to arrange identical data into groups. official definition: summarizes or aggregates identical data into single rows.
SELECT author_lname FROM books GROUP BY author_lname; /* same as distinct */
/*
+----------------+
| author_lname   |
+----------------+
| Lahiri         |
| Gaiman         |
| Eggers         |
| Chabon         |
| Smith          |
| Carver         |
| DeLillo        |
| Steinbeck      |
| Foster Wallace |
| Harris         |
| Saunders       |
+----------------+
11 rows in set (0.01 sec)
*/
SELECT author_lname, COUNT(*) AS 'books_written' FROM books GROUP BY author_lname ORDER BY books_written DESC; /* COUNT(*) to find out how many rows exist in each group. */
/*
+----------------+---------------+
| author_lname   | books_written |
+----------------+---------------+
| Gaiman         |             3 |
| Eggers         |             3 |
| Lahiri         |             2 |
| Carver         |             2 |
| Foster Wallace |             2 |
| Harris         |             2 |
| Chabon         |             1 |
| Smith          |             1 |
| DeLillo        |             1 |
| Steinbeck      |             1 |
| Saunders       |             1 |
+----------------+---------------+
11 rows in set (0.00 sec)
*/
/*
So this query here says, Let's start at the end, group all of our rows together by the author last name. and then we say we want to select the author last name from each of those groups and of course, each group that has the same author last name. They have to because that's how they're grouped. So we take that name like Lahiri and then Count (*). And as we just saw, Count (*) means count the rows. And in this case, it's going to count the rows of each group, not all the rows in the whole table, but the rows in each group. So let's see what that might end up with. We might see 2 for Lahiri, 3 for Gaiman, and 3 for Eggers.
*/
SELECT COUNT(*) AS 'books_written' FROM books GROUP BY author_lname ORDER BY books_written DESC;
/*
+---------------+
| books_written |
+---------------+
|             3 |
|             3 |
|             2 |
|             2 |
|             2 |
|             2 |
|             1 |
|             1 |
|             1 |
|             1 |
|             1 |
+---------------+
11 rows in set (0.00 sec)
*/
SELECT released_year, COUNT(*) AS 'books' FROM books GROUP BY released_year ORDER BY books DESC;
/*
+---------------+-------+
| released_year | books |
+---------------+-------+
|          2001 |     3 |
|          2003 |     2 |
|          2016 |     1 |
|          1996 |     1 |
|          2012 |     1 |
|          2013 |     1 |
|          2000 |     1 |
|          2010 |     1 |
|          1981 |     1 |
|          1989 |     1 |
|          1985 |     1 |
|          1945 |     1 |
|          2004 |     1 |
|          2005 |     1 |
|          2014 |     1 |
|          2017 |     1 |
+---------------+-------+
16 rows in set (0.01 sec)
*/
SELECT * FROM books GROUP BY author_fname;
/*
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'book_shop.books.book_id' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
*/
SELECT COUNT(*) ,CONCAT(author_fname,' ', author_lname) AS 'books' FROM books GROUP BY books;
/*
+----------+----------------------+
| count(*) | books                |
+----------+----------------------+
|        2 | Jhumpa Lahiri        |
|        3 | Neil Gaiman          |
|        3 | Dave Eggers          |
|        1 | Michael Chabon       |
|        1 | Patti Smith          |
|        2 | Raymond Carver       |
|        1 | Don DeLillo          |
|        1 | John Steinbeck       |
|        2 | David Foster Wallace |
|        1 | Dan Harris           |
|        1 | Freida Harris        |
|        1 | George Saunders      |
+----------+----------------------+
12 rows in set (0.09 sec)
*/


-- MIN()/MAX(): aggregate functions that allow us to find the minimum and maximum values in a column. MIN() and MAX() ignore values that are NULL.
SELECT MIN(author_fname), MAX(author_lname) FROM books;
/*
+-------------------+-------------------+
| MIN(author_fname) | MAX(author_lname) |
+-------------------+-------------------+
| Dan               | Steinbeck         |
+-------------------+-------------------+
1 row in set (0.14 sec)
*/
SELECT MIN(pages), title FROM books; /* to find the title of the book with the fewest pages. error */
/*
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #2 of SELECT list contains nonaggregated column 'book_shop.books.title'; this is incompatible with sql_mode=only_full_group_by
*/
/*
to fix this error, we can use 2 methods:
1. use ORDER BY and LIMIT
  select title, pages from books order by pages DESC limit 1;
  +-------------------------------------------+-------+
  | title                                     | pages |
  +-------------------------------------------+-------+
  | The Amazing Adventures of Kavalier & Clay |  634  | => there is another book with 634 pages but it is not shown. because we use limit 1
  +-------------------------------------------+-------+    if we use limit 2, it will show both books.
  1 row in set (0.00 sec)
2. sub-query
  select title, pages FROM books where pages = (SELECT MAX(pages) FROM books); => (SELECT MAX(pages) FROM books) is evaluated first to 634 and then replaced in the outer query.
  +-------------------------------------------+-------+
  | title                                     | pages |
  +-------------------------------------------+-------+
  | The Amazing Adventures of Kavalier & Clay |  634  |
  | The Lord of the Rings                     |  634  | => show all books with 634 pages automatically without using limit.
  +-------------------------------------------+-------+
  1 row in set (0.13 sec)
*/


-- GROUP BY Multiple Columns: we can group by multiple columns. This is useful when we want to count the number of rows that share two or more common attributes.
SELECT author_fname, author_lname, COUNT(*) FROM books GROUP BY author_lname, author_fname;
/*
+--------------+----------------+----------+
| author_fname | author_lname   | COUNT(*) |
+--------------+----------------+----------+
| Jhumpa       | Lahiri         |        2 |
| Neil         | Gaiman         |        3 |
| Dave         | Eggers         |        3 |
| Michael      | Chabon         |        1 |
| Patti        | Smith          |        1 |
| Raymond      | Carver         |        2 |
| Don          | DeLillo        |        1 |
| John         | Steinbeck      |        1 |
| David        | Foster Wallace |        2 |
| Dan          | Harris         |        1 |
| Freida       | Harris         |        1 |
| George       | Saunders       |        1 |
+--------------+----------------+----------+
12 rows in set (0.10 sec)
*/
SELECT CONCAT(author_fname, ' ', author_lname) AS author,  COUNT(*) FROM books GROUP BY author;
/*
+----------------------+----------+
| author               | COUNT(*) |
+----------------------+----------+
| Jhumpa Lahiri        |        2 |
| Neil Gaiman          |        3 |
| Dave Eggers          |        3 |
| Michael Chabon       |        1 |
| Patti Smith          |        1 |
| Raymond Carver       |        2 |
| Don DeLillo          |        1 |
| John Steinbeck       |        1 |
| David Foster Wallace |        2 |
| Dan Harris           |        1 |
| Freida Harris        |        1 |
| George Saunders      |        1 |
+----------------------+----------+
12 rows in set (0.07 sec)
*/
select author_fname, author_lname, MIN(released_year)
from books
group by author_fname, author_lname;
/*
+--------------+----------------+--------------------+
| author_fname | author_lname   | MIN(released_year) |
+--------------+----------------+--------------------+
| Jhumpa       | Lahiri         |               1996 |
| Neil         | Gaiman         |               2001 |
| Dave         | Eggers         |               2001 |
| Michael      | Chabon         |               2000 |
| Patti        | Smith          |               2010 |
| Raymond      | Carver         |               1981 |
| Don          | DeLillo        |               1985 |
| John         | Steinbeck      |               1945 |
| David        | Foster Wallace |               2004 |
| Dan          | Harris         |               2014 |
| Freida       | Harris         |               2001 |
| George       | Saunders       |               2017 |
+--------------+----------------+--------------------+
12 rows in set (0.02 sec)
*/
select author_fname, author_lname, MIN(released_year), MAX(released_year)
from books
group by author_fname, author_lname;
/*
+--------------+----------------+--------------------+--------------------+
| author_fname | author_lname   | MIN(released_year) | MAX(released_year) |
+--------------+----------------+--------------------+--------------------+
| Jhumpa       | Lahiri         |               1996 |               2003 |
| Neil         | Gaiman         |               2001 |               2016 |
| Dave         | Eggers         |               2001 |               2013 |
| Michael      | Chabon         |               2000 |               2000 |
| Patti        | Smith          |               2010 |               2010 |
| Raymond      | Carver         |               1981 |               1989 |
| Don          | DeLillo        |               1985 |               1985 |
| John         | Steinbeck      |               1945 |               1945 |
| David        | Foster Wallace |               2004 |               2005 |
| Dan          | Harris         |               2014 |               2014 |
| Freida       | Harris         |               2001 |               2001 |
| George       | Saunders       |               2017 |               2017 |
+--------------+----------------+--------------------+--------------------+
12 rows in set (0.00 sec)
*/
SELECT
  author_lname,
  COUNT(*) as books_written,
  MAX(released_year) AS latest_release,
  MIN(released_year)  AS earliest_release,
  MAX(pages) AS longest_page_count
FROM books
GROUP BY author_lname;
/*
+----------------+---------------+----------------+------------------+--------------------+
| author_lname   | books_written | latest_release | earliest_release | longest_page_count |
+----------------+---------------+----------------+------------------+--------------------+
| Lahiri         |             2 |           2003 |             1996 |                291 |
| Gaiman         |             3 |           2016 |             2001 |                465 |
| Eggers         |             3 |           2013 |             2001 |                504 |
| Chabon         |             1 |           2000 |             2000 |                634 |
| Smith          |             1 |           2010 |             2010 |                304 |
| Carver         |             2 |           1989 |             1981 |                526 |
| DeLillo        |             1 |           1985 |             1985 |                320 |
| Steinbeck      |             1 |           1945 |             1945 |                181 |
| Foster Wallace |             2 |           2005 |             2004 |                343 |
| Harris         |             2 |           2014 |             2001 |                428 |
| Saunders       |             1 |           2017 |             2017 |                367 |
+----------------+---------------+----------------+------------------+--------------------+
11 rows in set (0.01 sec)
*/
SELECT
  author_lname,
  author_fname,
  COUNT(*) as books_written,
  MAX(released_year) AS latest_release,
  MIN(released_year)  AS earliest_release
FROM books
GROUP BY author_lname, author_fname;
/*
+----------------+--------------+---------------+----------------+------------------+
| author_lname   | author_fname | books_written | latest_release | earliest_release |
+----------------+--------------+---------------+----------------+------------------+
| Lahiri         | Jhumpa       |             2 |           2003 |             1996 |
| Gaiman         | Neil         |             3 |           2016 |             2001 |
| Eggers         | Dave         |             3 |           2013 |             2001 |
| Chabon         | Michael      |             1 |           2000 |             2000 |
| Smith          | Patti        |             1 |           2010 |             2010 |
| Carver         | Raymond      |             2 |           1989 |             1981 |
| DeLillo        | Don          |             1 |           1985 |             1985 |
| Steinbeck      | John         |             1 |           1945 |             1945 |
| Foster Wallace | David        |             2 |           2005 |             2004 |
| Harris         | Dan          |             1 |           2014 |             2014 |
| Harris         | Freida       |             1 |           2001 |             2001 |
| Saunders       | George       |             1 |           2017 |             2017 |
+----------------+--------------+---------------+----------------+------------------+
12 rows in set (0.00 sec)
*/


-- SUM(): returns the sum of all values in a column
SELECT SUM(pages) FROM books;
/*
+------------+
| SUM(pages) |
+------------+
|       6623 |
+------------+
1 row in set (0.02 sec)
*/
SELECT author_lname, COUNT(*), SUM(pages)
FROM books
GROUP BY author_lname;
/*
+----------------+----------+------------+
| author_lname   | COUNT(*) | SUM(pages) |
+----------------+----------+------------+
| Lahiri         |        2 |        489 |
| Gaiman         |        3 |        977 |
| Eggers         |        3 |       1293 |
| Chabon         |        1 |        634 |
| Smith          |        1 |        304 |
| Carver         |        2 |        702 |
| DeLillo        |        1 |        320 |
| Steinbeck      |        1 |        181 |
| Foster Wallace |        2 |        672 |
| Harris         |        2 |        684 |
| Saunders       |        1 |        367 |
+----------------+----------+------------+
11 rows in set (0.01 sec)
*/
SELECT SUM(author_fname) FROM books; /* can not sum strings */
/*
+-------------------+
| SUM(author_fname) |
+-------------------+
|                 0 |
+-------------------+
1 row in set, 12 warnings (0.04 sec)
*/

-- AVG(): returns the average value of a column
SELECT AVG(pages) FROM books;
/*
+------------+
| AVG(pages) |
+------------+
|   348.5789 |
+------------+
1 row in set (0.00 sec)
*/
SELECT AVG(released_year) FROM books;
/*
+--------------------+
| AVG(released_year) |
+--------------------+
|          1999.7895 |
+--------------------+
1 row in set (0.00 sec)
*/
SELECT
  released_year,
  AVG(stock_quantity),
  COUNT(*)
FROM books
GROUP BY released_year;
/*
+---------------+---------------------+----------+
| released_year | AVG(stock_quantity) | COUNT(*) |
+---------------+---------------------+----------+
|          2003 |             66.0000 |        2 |
|          2016 |             43.0000 |        1 |
|          2001 |            134.3333 |        3 |
|          1996 |             97.0000 |        1 |
|          2012 |            154.0000 |        1 |
|          2013 |             26.0000 |        1 |
|          2000 |             68.0000 |        1 |
|          2010 |             55.0000 |        1 |
|          1981 |             23.0000 |        1 |
|          1989 |             12.0000 |        1 |
|          1985 |             49.0000 |        1 |
|          1945 |             95.0000 |        1 |
|          2004 |            172.0000 |        1 |
|          2005 |             92.0000 |        1 |
|          2014 |             29.0000 |        1 |
|          2017 |           1000.0000 |        1 |
+---------------+---------------------+----------+
16 rows in set (0.02 sec)
*/


/* Exercise */

/*
1. Print the number of books in the database

2. Print out how many books were released in each year

3. Print out the total number of books in stock

4. Find the average released_year for each author

5. Find the full name of the author who wrote the longest book

6. Make This Happen
  +------+---------+-----------+
  | year | # books | avg pages |
  +------+---------+-----------+
  | 1945 |       1 |  181.0000 |
  | 1981 |       1 |  176.0000 |
  | 1985 |       1 |  320.0000 |
  | 1989 |       1 |  526.0000 |
  | 1996 |       1 |  198.0000 |
  | 2000 |       1 |  634.0000 |
  | 2001 |       3 |  443.3333 |
  | 2003 |       2 |  249.5000 |
  | 2004 |       1 |  329.0000 |
  | 2005 |       1 |  343.0000 |
  | 2010 |       1 |  304.0000 |
  | 2012 |       1 |  352.0000 |
  | 2013 |       1 |  504.0000 |
  | 2014 |       1 |  256.0000 |
  | 2016 |       1 |  304.0000 |
  | 2017 |       1 |  367.0000 |
  +------+---------+-----------+
*/
-- 1.
mysql> select COUNT(title) from books;
/*
+--------------+
| COUNT(title) |
+--------------+
|           19 |
+--------------+
1 row in set (0.00 sec)
*/
select COUNT(DISTINCT title) from books;
/*
+-----------------------+
| COUNT(DISTINCT title) |
+-----------------------+
|                    19 |
+-----------------------+
1 row in set (0.04 sec)
*/

-- 2.
select released_year, COUNT(*) from books group by released_year order by released_year;
/*
+---------------+----------+
| released_year | COUNT(*) |
+---------------+----------+
|          1945 |        1 |
|          1981 |        1 |
|          1985 |        1 |
|          1989 |        1 |
|          1996 |        1 |
|          2000 |        1 |
|          2001 |        3 |
|          2003 |        2 |
|          2004 |        1 |
|          2005 |        1 |
|          2010 |        1 |
|          2012 |        1 |
|          2013 |        1 |
|          2014 |        1 |
|          2016 |        1 |
|          2017 |        1 |
+---------------+----------+
16 rows in set (0.04 sec)
*/

-- 3.
select SUM(stock_quantity) from books;
/*
+---------------------+
| SUM(stock_quantity) |
+---------------------+
|                2450 |
+---------------------+
1 row in set (0.00 sec)
*/

-- 4.
select concat(author_fname, author_lname) AS author, AVG(released_year) from books group by author;
/*
+----------------------+--------------------+
| author               | AVG(released_year) |
+----------------------+--------------------+
| Jhumpa Lahiri        |          1999.5000 |
| Neil Gaiman          |          2006.6667 |
| Dave Eggers          |          2008.6667 |
| Michael Chabon       |          2000.0000 |
| Patti Smith          |          2010.0000 |
| Raymond Carver       |          1985.0000 |
| Don DeLillo          |          1985.0000 |
| John Steinbeck       |          1945.0000 |
| David Foster Wallace |          2004.5000 |
| Dan Harris           |          2014.0000 |
| Freida Harris        |          2001.0000 |
| George Saunders      |          2017.0000 |
+----------------------+--------------------+
12 rows in set (0.00 sec)
*/

-- 5.
SELECT concat(author_fname, ' ', author_lname) AS author, pages
from books
where pages = (select MAX(pages) from books);
/*
+----------------+-------+
| author         | pages |
+----------------+-------+
| Michael Chabon |   634 |
+----------------+-------+
1 row in set (0.00 sec)
*/

-- 6.
select
  released_year AS 'year',
  COUNT(*) '# books',
  AVG(pages) AS 'avg pages'
from books
group by released_year
order by released_year;
/*
+------+---------+-----------+
| year | # books | avg pages |
+------+---------+-----------+
| 1945 |       1 |  181.0000 |
| 1981 |       1 |  176.0000 |
| 1985 |       1 |  320.0000 |
| 1989 |       1 |  526.0000 |
| 1996 |       1 |  198.0000 |
| 2000 |       1 |  634.0000 |
| 2001 |       3 |  443.3333 |
| 2003 |       2 |  249.5000 |
| 2004 |       1 |  329.0000 |
| 2005 |       1 |  343.0000 |
| 2010 |       1 |  304.0000 |
| 2012 |       1 |  352.0000 |
| 2013 |       1 |  504.0000 |
| 2014 |       1 |  256.0000 |
| 2016 |       1 |  304.0000 |
| 2017 |       1 |  367.0000 |
+------+---------+-----------+
16 rows in set (0.01 sec)
*/

/*******************************************************************************************************************************************/

/*
Data Types

> Data types are the attributes that specify the type of data of any object. Each column, variable and expression has a related data type in SQL. You can use these data types while creating your tables. You can choose a data type for a table column based on your requirement.

> Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data. Since everything in SQL is stored in tables, every table has a list of columns, and each column has a data type. So every value in a column must be of the same type. So if we have a column that's storing numbers, all of the values in that column must be numbers. If we have a column that's storing text, all of the values in that column must be text. And so on and so forth.

> Data types are important because they tell the database how much physical storage to set aside for the data. So if we have a column that's storing numbers, we don't want to set aside a ton of space for text, because that's just a waste of space. And vice versa.

> Data types also tell the database how to interact with the data. So if we have a column that's storing numbers, we want to be able to do math with those numbers. If we have a column that's storing text, we don't want to be able to do math with that text. We want to be able to search it, sort it, we want to be able to do things like that.

> Look at Documentation for more info. examples of data types:
  >> INT/INTEGER: integer, a whole number.
  >> VARCHAR(100): variable length character string, a string of text. (100) is the max length of the string.
*/

-- String Data Types
/*
> CHAR vs. VARCHAR: They are similar, but they differ in the way they are stored and retrieved. They differ in their maximum length and they differ in when you might want to use one versus the other, even though they both store text.

> VARCHAR: variable length character string, allows us to specify a maximum length. You can specify a maximum length, but if you don't, the length will be 1. So if you don't specify a length, it's the same as CHAR(1). And the maximum length is 255 characters. the length of the text stored is calculeted by its characters. So if you have a VARCHAR(10) and you store the word "hello", that's only five characters. So it's only going to take up five characters of space. It's optimized to be able to store text of different sizes in the best possible way.
  CREATE TABLE cats (name VARCHAR(10), age INT);
  INSERT INTO cats (name, age) VALUES ('Charlie', 2), ('Max', 1), ('Spike', 4);
  whatever size name, assuming it's less than 10 characters that I insert will be stored as is.

> CHAR: fixed length character string. You must specify a length. So if you have a CHAR(10) and you store the word "hello", that's only five characters. But it's going to take up 10 characters of space. So it's going to take up more space than VARCHAR. every single string that I insert will be stored as that size. SQL will pad the rest of the space with blank characters. 
  CREATE TABLE cats (name CHAR(2), age INT);
  INSERT INTO cats (name, age) VALUES ('MA', 2), ('Mx', 1), ('Sk', 4);
  This is optimized to store two characters and take up the least amount of memory possible to always store two characters. Because I said it's fixed in length. It's always two characters. That doesn't mean, though, that I can't store something smaller.
  INSERT INTO cats (name, age) VALUES ('M', 2), ('M', 1), ('S', 4);
  mySQL will actually add whitespace to make it fit to 2 characters. It will pad it, and then when I retrieve it back from the database, it will remove that padding and it will look like nothing has changed. But behind the scenes it's actually expanding any of my strings to fit that fixed size. So that's a significant difference.
  insert into string () values('frgrwe');
  ERROR 1406 (22001): Data too long for column 'name' at row 1
  it is not going to truncate it. it is going to give an error. because of the default settings of the sql mode (PAD_CHAR_TO_FULL_LENGTH SQL mode). if we change the sql mode, it will truncate it.

> The length of a CHAR column is fixed to the length that you declare when you create the table. The length can be any value from 0 to 255. When CHAR values are stored, they are right-padded with spaces to the specified length. When CHAR values are retrieved, trailing spaces are removed  unless the PAD_CHAR_TO_FULL_LENGTH SQL mode is enabled.
Value   	      CHAR(4)	 Storage Required	    VARCHAR(4)	Storage Required
''	            '    '	    4 bytes	          ''	            1 byte
'ab'	          'ab  '	    4 bytes	          'ab'	          3 bytes
'abcd'	        'abcd'	    4 bytes	          'abcd'	        5 bytes
'abcdefgh'	    'abcd'	    4 bytes	          'abcd'	        5 bytes
If we do an apples to apples comparison, we see that if we use varchar to store something 4 characters long, it might take up five bytes with a char, it might take up four bytes. So that shows us that it is more efficient in terms of storage or space to use char when your data is similar in size. Because if we were always storing 4 character strings, well it might take four bytes if we use char, but if we tried to only store four character strings with var char, it takes up five bytes. So we have way more flexibility here. If our data varies, it might not take up as much space, but if our data is really always the same size or plus or minus, maybe one character, if it's always ten characters or nine characters, then char. Might be a better choice.
*/


-- Numeric Data Types
--- Integer Types
/*
TINYINT: 1 byte, -128 to 127 signed, 0 to 255 unsigned.
SMALLINT: 2 bytes, -32,768 to 32,767 signed, 0 to 65,535 unsigned.
MEDIUMINT: 3 bytes, -8,388,608 to 8,388,607 signed, 0 to 16,777,215 unsigned.
INT/INTEGER: 4 bytes, -2,147,483,648 to 2,147,483,647 signed, 0 to 4,294,967,295 unsigned.
BIGINT: 8 bytes, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 signed, 0 to 18,446,744,073,709,551,615 unsigned.

> it is all about memory storage.

> we can specify the Signedness of a number. it is about whether or not we want to allow negative numbers. by default, all of these numbers are signed. so we can store negative numbers. but if we want to store only positive numbers, we can specify that by adding the keyword UNSIGNED as constraint while defining a table.
CREATE TABLE cats (name VARCHAR(100), age TINYINT UNSIGNED);
*/
--- Fixed-Point Types
/*
> i we try to add a decimal number to an integer column, it will be rounded to the nearest integer.

> Decimal allows us to store precise decimals, so numbers that might be large might be small, but we'll always be pretty much guaranteed to be accurate. Storing decimals in computers in computer memory is tricky, and doing it precisely costs a lot of memory. Or it can. And doing math with decimal numbers can be difficult. So there are different flavors.
  DECIMAL(5,2) => 999.99 (5 digits in total, 2 digits after the decimal point).
  INSERT INTO prodcuts (price) VALUES (456.39); 5 digits in total, 2 digits after the decimal point. it is ok
  INSERT INTO prodcuts (price) VALUES (4556.9); 5 digits in total, 1 digits after the decimal point. it is not ok. ERROR 1264 (22003): Out of range value for column 'price' at row 1. because it is 5 digits in total, but only 1 digits after the decimal point. it will not inserted.
  INSERT INTO prodcuts (price) VALUES (51.026); 5 digits in total, 3 digits after the decimal point. it is ok. but it stored as 51.03 (rounded to the nearest 2 decimal).

> I could have a lot of digits after the decimal, but if I exceed that, when I actually insert a value, it will be truncated. But if I exceed the maximum size of a number, the number of digits before the decimal, then I'm going to get an error.
*/
--- Floating-Point Types
/*
FLOAT: 4 bytes, -3.402823466E+38 to -1.175494351E-38, 0, and 1.175494351E-38 to 3.402823466E+38.
DOUBLE: 8 bytes, -1.7976931348623157E+308 to -2.2250738585072014E-308, 0, and 2.2250738585072014E-308 to 1.7976931348623157E+308.
Data Type	 Memory   Needed	Precision Issues
FLOAT	     4 Bytes	 ~7 digits
DOUBLE	   8 Bytes	 ~15 digits

> these take up less space than using a decimal, but it comes at the potential cost of precision.

CREATE TABLE demo (x FLOAT, y DOUBLE);
INSERT INTO demo (x, y) VALUES (0.12345678, 0.12345678);
SELECT * FROM demo;
+-------------+------------+
| x           | y          |
+-------------+------------+
| 0.123457    | 0.12345678 |
+-------------+------------+
1 row in set (0.00 sec)
INSERT INTO demo (x, y) VALUES (0.12345678, 0.123456789123456789);
SELECT * FROM demo;
+------------+-----------------------+
| x          | y                     |
+------------+-----------------------+
| 0.123457    | 0.12345678           |
| 0.123457    | 0.1234567891234568   |
+------------+-----------------------+
2 rows in set (0.00 sec)
*/
--- DECIMAL vs. FLOAT/DOUBLE
CREATE TABLE demo (x FLOAT, y DOUBLE, z DECIMAL(20,15));
/* Query OK, 0 rows affected (0.30 sec) */
mysql> INSERT INTO demo() VALUES(0.123456789, 0.123456789123456789, 12345.123456789123456789);
/* Query OK, 1 row affected, 1 warning (0.17 sec) */
mysql> select * from demo;
/*
+----------+---------------------+-----------------------+
| x        | y                   | z                     |
+----------+---------------------+-----------------------+
| 0.123457 | 0.12345678912345678 | 12345.123456789123457 |
+----------+---------------------+-----------------------+
1 row in set (0.00 sec)
*/
mysql> INSERT INTO demo() VALUES(1.123456789, 1.123456789123456789, 12345.123456789123456789);
/*Query OK, 1 row affected, 1 warning (0.07 sec) */
mysql> select * from demo;
/*
+----------+---------------------+-----------------------+
| x        | y                   | z                     |
+----------+---------------------+-----------------------+
| 0.123457 | 0.12345678912345678 | 12345.123456789123457 |
|  1.12346 |  1.1234567891234568 | 12345.123456789123457 |
+----------+---------------------+-----------------------+
2 rows in set (0.00 sec)
*/
select length(x), length(y), length(z) from demo;
/*
+-----------+-----------+-----------+
| length(x) | length(y) | length(z) |
+-----------+-----------+-----------+
|         8 |        19 |        21 |
|         7 |        18 |        21 |
+-----------+-----------+-----------+
2 rows in set (0.00 sec)
*/


-- Date and Time Data Types




































/*

-- SQL dialect is a version or variation of the Structured Query Language (SQL) that is used by a specific database management system (DBMS) to perform various operations on a database. Some common SQL dialects are MySQL, PostgresSQL, Microsoft SQL Server, and Oracle SQL. Each dialect has its own unique syntax, functions, and features, so SQL statements written for one dialect may not work with another.

-- CSV stands for Comma-Separated Values, a file format used to store tabular data (numbers and text) as plain text. In a CSV file, each line represents a record or row and the values in the row are separated by commas. CSV is a widely used file format for data exchange, as it is simple, flexible, and supported by many software applications.

*/

-- Databases are systems that allow users to store and organize data. And they're useful when dealing with large amounts of data.

-- typical users
  --> databases actually have a wide variety of users.
  --> analysts such as a marketing analyst, a business analyst or a sales or sales operation analyst;
  --> technical people like data scientists, software engineers, or web developers.
  --> Basically anyone needing to deal with data

-- use cases for spreadsheets versus use cases for databases
  --> spreadsheets
    --> are really good for a onetime analysis
    --> to quickly need to chart something out, such as an Excel
    --> they work with reasonable data set sizes, something that Excel and Google Spreadsheet can open up really easily
    --> And what's really nice about spreadsheets is they allow the ability for untrained people to work with data. So anyone can just double click an Excel file, and open it and work with it.
  --> Databases
    --> are really great for data integrity meaning you don't want to have someone be able to just click on a cell and change the data. Databases don't really allow for that.
    --> can also handle massive amounts of data. Data sizes that would just basically make Excel or Google Spreadsheets crash.
    --> can also quickly combine different datasets something that might be difficult to do for larger datasets in a spreadsheet.
    --> are perfect for automating steps for reuse due to the sequel syntax.
    --> can also support data for websites and applications. So most websites and web applications, or mobile applications, are linked to some sort of database to store their data and retrieve their data.

-- databases platform options
  --> postgresql
  --> mysql
  --> sql server
  --> mariasql
  --> sqlite

--> SQL => Structured Query Language. SQL is actually useful for a lot of things. So you have PostgresSQL or MySQL or Oracle Databases, Microsoft Access, et, the basic databases you would think of that can use SQL. But there's also a lot of software out there that uses SQL as a way of interacting with their data, such as Looker, or Periscope Data. And there's also some abstractions that run on top of big data systems, such as Hadoop. You can use SQL with Hive or Google's BigQuery or Facebook's Presto which is basically using SQL to run on top of very large data systems that use distributed data. So SQL's gonna be incredibly useful to operate a variety of tools and databases with.
  --> postgresql => sql engine that stores data and reads queries and returns information
  --> pgadmin => gui for connecting with postgresql to actually perform queries and connect to PostgresSQL. And what's interesting about PG Admin, it actually uses your browser as the graphical user interface, so after we install it, we'll be able to open it up within our browser.

--> 1. download and install postgresql as Administrator
--> 2. download and install PGAdmin as Administrator
--> 3. restart computer
--> 4. create new database
--> 5. restore database (dvdrental.tar) => ignore failed exit code if it appears

-- syntax
  --> capitalize SQL Keywords like SELECT, FROM
  --> ; semicolon at the end of statement
  --> something to keep in mind is you should try your best to avoid column names that match up with SQL keywords

-- SELECT Statement: Select is the most common statement used in SQL, and it fundamentally allows us to retrieve information from a table that exists within a database.
SELECT column_name FROM table_name;
  --> When we actually say select column name from table name, PostgreSQL essentially reads this a little bit backwards. It first has to decide what table you're referencing. It already knows what database you're referencing because that's how you open the query editor on that database. So it takes a look at what table name you're looking at, and then it's going to take a look at the corresponding column name.
  SELECT c1,c2 FROM table_1; --> can retrieve multi column from one table
  SELECT * FROM table_2; --> request all the columns from a table, essentially just asking for the entire table back.
  --> In general, it's not good practice to use an asterisk unless you actually want every single thing in that table. And what's going to happen here is if you use the asterisks in the select statement, it's going to automatically query everything which increases traffic between the database server and the application, which can slow down the retrieval of results. So you should really only be using that syntax if you actually want the entire table back with all the columns in it. If you only need certain columns, do your best to only query for those columns.
  SELECT first_name,last_name FROM actor; --> (1)
  SELECT last_name,first_name FROM actor; --> (2)
  --> the way PostgreSQL works, it just tries to return the results in the most efficient way possible, which, depending on your version of PostgreSQL and your actual machine, may sometimes slightly change the order of things.

-- DISTINC: Sometimes a table contains a column that has duplicate values, and you may find yourself in a situation where you only want to list the unique or distinct values. In that column, the distinct keyword can be used to return only two distinct values in a column. The distinct keyword operates on a column.
SELECT DISTINC column_name FROM table_name;
SELECT DISTINC(column_name) FROM table_name;
  --> Distinct really helps when we want to know the unique values inside of a column.

-- COUNT function: The count function returns the number of input rows that match a specific condition of a query. We can apply count on a specific column or just past count(*). This should return the same result because count is merely reporting back the number of rows returned, which is going to be the same regardless of what actual column you're looking at.
SELECT COUNT(column_name) FROM table_name;
SELECT COUNT(*) FROM table_name;
  --> and count is usually much more useful when combined with other commands, such as the distinct command Imagine we wanted to know how many unique names are there in the table. So to answer this question, we need to first decide the distinct number of names. Then we'll provide count on that result of distinct name from table.
  SELECT COUNT(DISTINC column_name) FROM table_name;t 
  --> notice the parentheses structure here. It's informing us that we are calling count on the result of distinct name. If you want, you can also provide parentheses for name on distinct, although that's not necessary as we previously discussed.
  SELECT COUNT(DISTINC (column_name)) FROM table_name;

-- WHERE statement: allows us to specify conditions on columns for the rows to be returned.
SELECT column_name FROM table_name WHERE conditions;
  --> The Where clause appears immediately after that from clause of the select statement and then the conditions are used to filter the rows returned from the Select Statement.
  --> comparison operators (=/</>/<=/>=/<>-!=) => to compare a column value to something essentially allowing us to answer questions or queries such as where is the price greater than $3? Or Where is the pet's name equal to Sam?
  --> logical operators (AND/OR/NOT) => allows us to combine multiple comparison operators or effect comparison operators.
  SELECT first_name,choice FROM table_name WHERE name='amr';
  SELECT first_name,choice FROM table_name WHERE name='amr' AND choice='red';

-- ORDER BY: sort rows based on a column value in either ascending or descending order. So that would be alphabetical for string based columns or numerical order for numeric columns.
SELECT column_1,column_2 FROM table_name ORDER BY column_1 ASC / DESC; --> ASC-ascending order(default) / DESC-descending order
  --> Notice the order by towards the end of the query, since we want to do any selection and filtering first before finally sorting. So that means order by is going to be towards the bottom of a query and one of the very last things that SQL actually performs.
  --> So if you have duplicate values in a particular column and you want to sort not just buy that particular column but another column as well, it makes sense to do an order by with multiple columns and it's going to sort based off the order you provide. So it'll order by company first and then by sales.
  SELECT company,first_name,sales FROM table_name ORDER BY company,sales;
  --> you can always add an ascending and descending to each particular order by statement.
  SELECT company,first_name,sales FROM table_name ORDER BY company DESC,sales ASC;
  --> I can technically sort by columns that I do not actually request in my select statement.
  SELECT first_name,sales FROM table_name ORDER BY company;

-- LIMIT: The limit command allows us to limit the number of rows returned for a query. It's useful for not wanting to return every single row in a table, but only view maybe the top few rows to get an idea of the table layout.
  --> Limit also becomes extremely useful in combination with the order by statement.
  --> Limit goes at the very bottom end of a query request and is the last command to be executed. Because essentially what the limit does is after you're done filtering with the where statement, ordering with order by and sorting and any other sort of conditions or any filters you want to do on your query, the limit is just going to say, all right, how many rows do you want at the end of the day?
  SELECT * FROM payment LIMIT 1; --> general layout of a table
  SELECT * FROM payment
  WHERE amount != 0.00
  ORDER BY payment_date DESC
  LIMIT 5;

-- BETWEEN operator: The between operator can be used to match a value against a range of values.
  --> this is essentially going to be a condition you can tag along with a where statement.
  --> The BETWEEN operator is the same as: value >= low AND value <= high / value BETWEEN low AND high. So note that the low and the high here are both inclusive, so it's actually including the end points there.
  --> You can also combine the between keyword with the NOT logical operator, essentially asking where is the value not between low and high. And this is the same as asking value less than low or value greater than high. same as: value < low OR value > high / value NOT BETWEEN low AND high. Note here that we are exclusive of the actual low point and high point.
  --> The BETWEEN operator can also be used with dates. Note that you need to format dates in the ISO 8601 standard format, which is YYYY-MM-DD. When using BETWEEN operator with dates that also include timestamp information, pay careful attention to using BETWEEN versus <=,>= comparison operators, due to the fact that a datetime starts at 0:00.
SELECT * FROM payment
WHERE amount BETWEEN 8 AND 9;
SELECT * FROM payment
WHERE amount NOT BETWEEN 8 AND 9;
SELECT * FROM payment
WHERE payment_date BETWEEN '2007-05-01' AND '2007-05-16';
  --> Now, something to keep in mind, especially when you're dealing with a timestamp information, is that this timestamp information includes both the dates and our minutes, etc.. So that means PostgreSQL essentially has to decide does a day start at 0:00 or at 24 hours? And if you're dealing with exclusivity versus inclusivity, that actually might affect your logic.

-- IN operator: In certain cases you want to check for multiple possible value options, for example, if a user’s name shows up IN a list of known names. We can use the IN operator to create a condition that checks to see if a value in included in a list of multiple options. value IN (option1,option2,...,option_n)
SELECT color FROM table WHERE color IN ('red','blue');
SELECT color FROM table WHERE color NOT IN ('red','blue');

-- LIKE - ILIKE operators: Using Pattern Matching
  --> The LIKE operator allows us to perform pattern matching against string data with the use of wildcard characters: Percent % Matches any sequence of characters / Underscore _ Matches any single character
  --> Notice that LIKE is case-sensitive, we can use ILIKE which is case-insensitive 
  --> You can use multiple underscores
  --> WHERE name LIKE ‘_her%’ [Cheryl Theresa Sherri]
  --> https://www.postgresql.org/docs/12/functions-matching.html
SELECT * FROM customer
WHERE first_name ILIKE 'j%' AND last_name LIKE '%S' OR email LIKE '%er%' OR NOT LIKE '_er%';

-- Tasks

/*
Situation: We want to send out a promotional email to our existing customers!
Challenge: Use a SELECT statement to grab the first and last names of every customer and their email address.
*/
SELECT first_name,last_name,email FROM customer;

/*
Situation: An Australian visitor isn’t familiar with MPAA movie ratings (e.g. PG , PG-13, R, etc…) We want to know the types of ratings we have in our database. What ratings do we have available?
Challenge: Use what you’ve learned about SELECT DISTINCT to retrieve the distinct rating types our films could have in our database.
*/
SELECT DISTINCT rating FROM film;

/*
A customer forgot their wallet at our store! We need to track down their email to inform them.
What is the email for the customer with the name Nancy Thomas?
*/
SELECT email FROM customer
WHERE first_name = 'Nancy'
AND last_name = 'Thomas';

/*
A customer wants to know what the movie “Outlaw Hanky” is about.
Could you give them the description for the movie “Outlaw Hanky”?
*/
SELECT description FROM film
WHERE title = 'Outlaw Hanky';

/*
A customer is late on their movie return, and we’ve mailed them a letter to their address at ‘259 Ipoh Drive’. We should also call them on the phone to let them know.
Can you get the phone number for the customer who lives at ‘259 Ipoh Drive’?
*/
SELECT phone FROM address
WHERE address= '259 Ipoh Drive';

/*
We want to reward our first 10 paying customers.
What are the customer ids of the first 10 customers who created a payment?
*/
SELECT customer_id FROM payment
ORDER BY payment_date ASC
LIMIT 10;

/*
A customer wants to quickly rent a video to watch over their short lunch break.
What are the titles of the 5 shortest (in length of runtime) movies?
*/
SELECT title,length FROM film
ORDER BY length ASC
LIMIT 5;

/*
If the previous customer can watch any movie that is 50 minutes or less in run time, how many options does she have?
*/
SELECT COUNT(title) FROM film
WHERE length <= 50

/*
How many payment transactions were greater than $5.00?
*/
SELECT COUNT(amount) FROM payment WHERE amount > 5;

/*
How many actors have a first name that starts with the letter P?
*/
SELECT COUNT(*) FROM actor
WHERE first_name LIKE 'P%';

/*
How many unique districts are our customers from?
*/
SELECT COUNT(DISTINCT(district)) 
FROM address;

/*
Retrieve the list of names for those distinct districts from the previous question.
*/
SELECT DISTINCT(district) FROM address;

/*
How many films have a rating of R and a replacement cost between $5 and $15?
*/
SELECT COUNT(*) FROM film
WHERE rating = 'R'
AND replacement_cost BETWEEN 5 AND 15;

/*
How many films have the word Truman somewhere in the title?
*/
SELECT COUNT(*) FROM film
WHERE title LIKE '%Truman%';

-- Group BY: is a SQL statement that will allow us to aggregate data and apply functions to better understand how data is distributed per category.

--> Aggregate functions: The main idea behind an aggregate function is to take multiple inputs and return a single output. Now PostgreSQL provides many, many different types of aggregate functions https://www.postgresql.org/docs/current/functions-aggregate.html
  --> Most Common Aggregate Functions:
  /*
  AVG() - returns average value
  COUNT() - returns number of values
  MAX() - returns maximum value
  MIN() - returns minimum value
  SUM() - returns the sum of all values
  */
  --> Aggregate function calls happen only in the SELECT clause or the HAVING clause
  --> AVG() returns a floating point value many decimal places (e.g. 2.342418…) You can use ROUND() to specify precision after the decimal
  --> COUNT() simply returns the number of rows, which means by convention we just use COUNT(*)
  SELECT MIN(replacement_cost) FROM film;
  --> Keep in mind, if we were to try to call something else like let's say I also wanted to call a film ID column for some reason that doesn't really make sense. And the reason for that is we're just actually calling an aggregate function on a column, which means max replacement cost just returns a single value. So it doesn't really make sense to call another column with this. In order to call other columns, we'll have to learn about the group by statement, which is coming up next. So keep that in mind. When you're doing just simple calls or queries like this, we want to figure out the min or max. It doesn't really make sense to call other columns there since we're aggregating a bunch of values to just a single value.
  SELECT MAX(replacement_cost),film_id FROM film; --> it will produce an error
  SELECT MAX(replacement_cost),MIN(replacement_cost) FROM film; --> that works because that function maximum and this function minimum are both returning a singular value. So this will be the max and min for your replacement costs. So keep in mind because those rows happen to match up, that sort of query makes sense.
  SELECT MAX(replacement_cost,rental_rate) FROM film; --> it will produce an error too
  SELECT ROUND(AVG(replacement_cost),1) FROM film;
  SELECT SUM(replacement_cost) FROM film;

--> Group BY allows us to aggregate columns per some category.
  --> So when we're actually performing a Group B, there's a couple of key things to consider.
  /*
  1. We need to choose a categorical column to perform the group by on.
  2. That is to say categorical columns are non continuous, or at least we're treating them as non continuous for the sake of the group by.
  3. Now something to keep in mind is these can actually still be numerical, such as cabin class categories on a ship, class 1 to 3 and so on.
  4. And you should also keep in mind that they actually may appear continuous, but you could treat them as a category.
  5. For example, if you recall to our DVD rental database, we have different rental rates available, such as $0.99, one, 99 to 99, etc. We could treat each of those rental rates as its own separate class or own separate category. So just because something is being treated as categorical doesn't necessarily mean it's non numeric.
  */
  --> So the way a group buy operates is the following We have already chosen our categorical column. Then what we're going to do is essentially split this table up on a per category basis. So we have everything that went with category A, then B, then C, and then we have the corresponding data values. Recall that an aggregate function takes in multiple values and reduces them back down to one single value, such as the sum function can take in all these values per category or grouped by category and then return back their sum.
  --> The GROUP BY clause must appear right after a FROM or WHERE statement.
  SELECT category_col , AGG(data_col)
  FROM table_name
  WHERE category_col != 'A'
  GROUP BY category_col;
  -->  one of the most important things to realize when learning about group by is in the actual select statement, columns must either have an aggregate function, call on them, or be themselves in the group buy call.
  SELECT company, division, SUM(sales)
  FROM finance_table
  GROUP BY company,division;
  --> WHERE statements should not refer to the aggregation result
  SELECT company, division, SUM(sales)
  FROM finance_table
  WHERE division IN ('marketing', 'transport')
  GROUP BY company,division;
  --> If you want to sort results based on the aggregate, make sure to reference the entire function
  SELECT company, SUM(sales) --> we're aggregating sales per company.
  FROM finance_table
  GROUP BY company
  ORDER BY SUM(sales)
  LIMIT 5;

-- exambles

  SELECT customer_id FROM customer
  GROUP BY customer_id; --> same as SELECT DISTINC

  SELECT customer_id,COUNT(amount) FROM payment
  GROUP BY customer_id
  ORDER BY COUNT(amount);

  SELECT customer_id,staff_id,SUM(amount) FROM payment
  GROUP BY customer_id,staff_id
  ORDER BY customer_id,staff_id ASC;

  SELECT DATE(payment_date),SUM(amount) FROM payment
  GROUP BY DATE(payment_date)
  ORDER BY SUM(amount);

-- tasks

/*
We have two staff members, with Staff IDs 1 and 2. We want to give a bonus to the staff member that handled the most payments. (Most in terms of number of payments processed, not total dollar amount).
How many payments did each staff member handle and who gets the bonus?
*/
SELECT staff_id,COUNT(amount)
FROM payment
GROUP BY staff_id
SELECT staff_id,COUNT(*)
FROM payment
GROUP BY staff_id;

/*
Corporate HQ is conducting a study on the relationship between replacement cost and a movie MPAA rating (e.g. G, PG, R, etc…).
What is the average replacement cost per MPAA rating? 
Note: You may need to expand the AVG column to view correct results
*/
SELECT rating , AVG(replacement_cost)
FROM film
GROUP BY rating
SELECT rating , ROUND(AVG(replacement_cost),2)
FROM film
GROUP BY rating;

/*
We are running a promotion to reward our top 5 customers with coupons.
What are the customer ids of the top 5 customers by total spend?
*/
SELECT customer_id , SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC
LIMIT 5;

--> HAVING: The having clause allows us to filter after an aggregation has already taken place. So it comes after a group by call.
  --> We’ve already seen we can filter before executing the GROUP BY, but what if we want to filter based on SUM(sales)?
  --> We can not use WHERE to filter based off of aggregate results, because those happen after a WHERE is executed.
  --> HAVING allows us to use the aggregate result as a filter along with a GROUP BY
  SELECT company, SUM(sales)
  FROM finance_table
  WHERE company != 'Google'
  GROUP BY company
  HAVING SUM(sales) > 1000; --> filter with HAVING on SUM(sales) because SUM(sales) not going to happen until after I call the group By.

-- Tasks

/*
We are launching a platinum service for our most loyal customers. We will assign platinum status to customers that have had 40 or more transaction payments.
What customer_ids are eligible for platinum status?
*/
SELECT customer_id, COUNT(*)
FROM payment
GROUP BY customer_id
HAVING COUNT(*) >= 40;

/*
What are the customer ids of customers who have spent more than $100 in payment transactions with our staff_id member 2?
*/
SELECT customer_id, SUM(amount)
FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) > 100;

/*
Return the customer IDs of customers who have spent at least $110 with the staff member who has an ID of 2.
*/
select customer_id,staff_id,sum(amount) from payment
where staff_id = 2
group by customer_id,staff_id
having sum(amount) >= 110
order by customer_id;

/*
How many films begin with the letter J?
*/
select count(*) from film
where title ilike 'j%';

/*
What customer has the highest customer ID number whose name starts with an 'E' and has an address ID lower than 500?
*/
select customer_id,first_name,last_name,address_id from customer
where first_name ilike 'E%' and address_id < 500
order by customer_id DESC
limit 1;

-- AS Clause: allows us to create an “alias” for a column or result.
SELECT SUM(amount) AS net_revenue FROM payment;
  --> The AS operator gets executed at the very end of a query, meaning that we can not use the ALIAS inside a WHERE operator.
  SELECT customer_id, SUM(amount) AS total_value
  FROM payment
  WHERE staff_id = 2
  GROUP BY customer_id
  HAVING total_value > 100; --> error
  -->  just to clarify, these aliases get assigned at the end and unfortunately you can't use them in the where clause or the having clause to filter by. Instead, just think of them as being used in the data output and you'll have to use the original column name if you plan to do any filtering or comparison operations on it.
  select first_name AS fname,last_name AS lname from customer;
  where fname ilike 'E%' and lname < 500; --> error

-- JOINS
  --> https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/
  --> https://www.talend.com/
  --> https://en.wikipedia.org/wiki/Join_(SQL)

  --> INNER JOIN: JOINs allow us to combine multiple tables together. The main reason for the different JOIN types is to decide how to deal with information only present in one of the joined tables.  this is pretty much the simplest thing possible, just looking at rows that happen to be in both tables.
  SELECT * FROM TableA
  INNER JOIN TableB
  ON TableA.col_match = TableB.col_match;
    --> inner join is essentially symmetrical, which means if you switched select from table A and then inner join table B to look like this, select from table B, inner join on table A, you would get the same results.
    SELECT * FROM TableB
    INNER JOIN TableA
    ON TableA.col_match = TableB.col_match;
    -->
    SELECT * FROM Registrations
    INNER JOIN Logins
    ON Registrations.name = Logins.name;
    -->
    SELECT reg_id,Logins.name,log_id --> to avoid dublication in name column
    FROM Registrations
    INNER JOIN Logins
    ON Registrations.name = Logins.name;
    --> Remember that table order won’t matter in an INNER JOIN. And depending on what version of SQL you're running or PostgreSQL, they may be in a slightly different order. because we're only looking at the intersection of that Venn diagram stuff that's both in table A and table B, so it doesn't really matter what order you're looking at it because that Venn diagram is symmetrical.
    --> Also if you see just JOIN without the INNER, PostgreSQL will treat it as an INNER JOIN.
    SELECT payment_id, payment.customer_id,first_name
    FROM payment
    INNER JOIN customer
    ON payment.customer_id = customer.customer_id;
    --> you can write first_name or customer.first_name, but first_name exists only in customer table unlike customer_id
    --> Keep in mind, this column could be called something else in the customer table. It could be maybe shortened to just C_ID, but as long as they're referring to the same thing, the customer ID, that's OC typically in a well designed database, they should have the same column name. But keep in mind, sometimes the column name will be slightly different in one table than the other. So it's up to you as the SQL query developer to just make sure and double check that it's referring to the same thing.

  --> OUTER JOINS: There are few different types of OUTER JOINs They will allow us to specify how to deal with values only present in one of the tables being joined.

  --> FULL OUTER JOIN
    --> we have names that only appear in one table. Let’s see how the different OUTER JOINs deal with this discrepancy.
    SELECT * FROM TableA
    FULL OUTER JOIN TableB
    ON TableA.col_match = TableB.col_match;
    --> So an outer join or a full outer join just grabs everything. Notice that it doesn't really matter again if table B and table a order is switched here because this is completely symmetrical. So because this Venn diagram is symmetrical, you can switch off the table order because you're going to grab everything anyways.
    SELECT * FROM Registrations
    FULL OUTER JOIN Logins
    ON Registrations.name = Logins.name;
    --> So let's actually see how SQL thinks about this in the background. First, we're saying grab everything from the registration table. The way we can think about this, we're saying grab everything from registrations and a full order joint on logins. So we fill in first everything from registrations. Again, we don't really need to worry whether or not they're in table B or table logins because we're grabbing everything anyways. So we fill it in with Andrew, Bob, Charlie and David and then we're doing a full outer join and logins, so we need to start filling information for where we actually have a name match and we know we have a name match on Andrew and Bob and then we fill it in with the corresponding login ID. In this case it was number two and number four. Now the issue we arise with is that we didn't have a Charlie or David in logins, but we're still asking for everything. So what SQL ends up automatically doing for us is filling this in with NULL, essentially clarifying to you that there was no value there present, so there was no Charlie or David in the Logins column. And since this is a full outer join on logins, we also need to fill in the rest of logins, which was Xavier and Yolanda, and then the corresponding null values for the registration table because they were only present in the login table. So this is what it would look like to do a full outer join on these two tables on the name column. We grab everything and then fill in for null values where we only had a row present in one particular table.
    --> FULL OUTER JOIN with WHERE: Get rows unique to either table (rows not found in both tables). Essentially, this is the exact opposite of an inner join. Let's imagine that some new privacy rules have been implemented and we want to make sure that we don't have any payment information that's not attached to customer or that we don't have some customer information that isn't attached to any payments. Essentially, we want to make sure that all the payments we have is associated with a current customer and all the customers we have are associated with some historical payment. We don't want to have some customer ID information for someone that's actually never purchased anything in any of our rental stores.
    SELECT * FROM Registrations
    FULL OUTER JOIN Logins
    ON Registrations.name = Logins.name
    WHERE Registrations.reg_id IS null
    OR Logins.log_id IS null;
    -->
    SELECT * FROM customer
    FULL OUTER JOIN payment
    ON customer_id = customer_id
    WHERE customer.customer_id IS null
    OR payment.payment_id IS null;
    --> It means we're going to fully join the customer table and the payment table where those customer IDs join up. And now I'm going to filter it to attempt to find rows that are either only unique to the customer table. Meaning we have information about a customer that's never made a payment or only unique to the payment table. Notice here how I'm using the payment ID, which is a unique identifier for the payment table. If we keep going over, we can see here every single payment has this unique payment ID. And to confirm this:
    SELECT COUNT(DISTINCT customer_id) FROM customer;
    SELECT COUNT(DISTINCT customer_id) FROM payment;
    --> technically by itself only further validates that last query we did, but doesn't actually fully answer the question because technically there could have been maybe customer IDs that were letters and one table that were 599 unique letters or a series of letters. And then the other table could have 599 unique numbers. So keep that in mind. While this does clarify and verify what we did, it doesn't 100% confirm that privacy policy. The only way to do that was using that full outer join with the additional wear that we just saw.

  --> LEFT OUTER JOIN: A LEFT OUTER JOIN results in the set of records that are in the left table, if there is no match with the right table, the results are null.
  SELECT * FROM TableA
  LEFT OUTER JOIN TableB
  ON TableA.col_match = TableB.col_match;
    --> ORDER MATTERS FOR LEFT OUTER JOIN!
    SELECT * FROM Registrations
    LEFT JOIN Logins
    ON Registrations.name = Logins.name;
    --> LEFT OUTER JOIN With WHERE: Get rows unique to left table - we only wanted entries unique to Table A? Those rows found in Table A and not found in Table B.
    SELECT * FROM Registrations
    LEFT JOIN Logins
    ON Registrations.name = Logins.name
    WHERE Logins.log_id IS null
  
  --> RIGHT OUTER JOIN: A RIGHT JOIN is essentially the same as a LEFT JOIN, except the tables are switched This would be the same as switching the table order in a LEFT OUTER JOIN.
  SELECT * FROM TableA
  RIGHT OUTER JOIN TableB
  ON TableA.col_match = TableB.col_match
    --> It is up to you and how you have the tables organized “in your mind” when it comes to choosing a LEFT vs RIGHT join, since depending on the table order you specify in the JOIN, you can perform duplicate JOINs with either method.

-- UNION operator: The UNION operator is used to combine the result-set of two or more SELECT statements. It basically serves to directly concatenate two results together, essentially “pasting” them together.
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

-- tasks

/*
California sales tax laws have changed and we need to alert our customers to this through email.
What are the emails of the customers who live in California?
*/
SELECT district,email FROM address
INNER JOIN customer ON
address.address_id = customer.address_id
WHERE district = 'California'

/*
A customer walks in and is a huge fan of the actor “Nick Wahlberg” and wants to know which movies he is in.
Get a list of all the movies “Nick Wahlberg” has been in.
*/
SELECT title,first_name,last_name 
FROM film_actor INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
INNER JOIN film
ON film_actor.film_id = film.film_id
WHERE first_name = 'Nick' 
AND last_name = 'Wahlberg'

