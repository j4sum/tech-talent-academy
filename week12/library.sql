USE library;

/*create table books*/

CREATE TABLE books (
Title VARCHAR(50) NOT NULL, Author VARCHAR(50) NOT NULL, ISBN VARCHAR(17) NOT NULL, PRIMARY KEY (ISBN)
);

/* insert data into the table */

INSERT INTO books (Title, Author, ISBN) VALUES ("The Chain", "Adrian McKinty", "978-0-39-497433-1");
INSERT INTO books (Title, Author, ISBN) VALUES ("Dead Air", "Iain Banks", "978-2-39-487683-4");
INSERT INTO books (Title, Author, ISBN) VALUES ("IT", "Stephen King", "978-3-19-515344-6");
INSERT INTO books (Title, Author, ISBN) VALUES ("Atomic Habits", "James Clear", "978-4-24-483263-4");
INSERT INTO books (Title, Author, ISBN) VALUES ("The Rooster Bar", "John Grisham", "987-5-44-564878-9");
INSERT INTO books (Title, Author, ISBN) VALUES ("The Good Guy", "Dean Koontz", "987-8-34-758237-5");
INSERT INTO books (Title, Author, ISBN) VALUES ("Natives", "Akala", "978-7-56-987683-6");
INSERT INTO books (Title, Author, ISBN) VALUES ("Death on the Nile", "Agatha Christie", "978-1-99-765843-8");
INSERT INTO books (Title, Author, ISBN) VALUES ("The Midnight Library", "Matt Haig", "978-6-87-487683-2");
INSERT INTO books (Title, Author, ISBN) VALUES ("The Alchemist", "Paulo Coelho", "978-9-83-457386-3");

DELETE FROM books WHERE Title = "Atomic Habits";

SELECT * FROM books;

COMMIT;

/* create users table */

CREATE TABLE users (User_id INT NOT NULL AUTO_INCREMENT, First_name VARCHAR(50) NOT NULL, Last_name VARCHAR(50) NOT NULL, Phone_num VARCHAR(25) NOT NULL, Address_1 VARCHAR(255) NOT NULL, Address_2 VARCHAR(255) NOT NULL, County VARCHAR(255) NOT NULL, Postcode CHAR(10) NOT NULL, PRIMARY KEY (User_id)
);

/* insert data into users */

INSERT INTO users (First_name, Last_name, Phone_num, Address_1, Address_2, County, Postcode) VALUES ("Sally", "Dean", "70255501671", "111 Westbrook Street", "Sutton Coldfield", "West Midlands", "B23 5GL");
INSERT INTO users (First_name, Last_name, Phone_num, Address_1, Address_2, County, Postcode) VALUES ("Max", "Hansen", "76453921032", "103 Charles Square", "Aylestone", "East Midlands", "LE2 8LU");
INSERT INTO users (First_name, Last_name, Phone_num, Address_1, Address_2, County, Postcode) VALUES ("Ali", "Khan", "79238439451", "128 Hollywood Circle", "Bury", "Greater Manchester", "BL9 1AB");
INSERT INTO users (First_name, Last_name, Phone_num, Address_1, Address_2, County, Postcode) VALUES ("Paul", "Cho", "74342289423", "87 Radcliffe Drive","Treeton", "South Yorkshire", "S60 5FQ");
INSERT INTO users (First_name, Last_name, Phone_num, Address_1, Address_2, County, Postcode) VALUES ("Kriti", "Singh", "70284596399", "21 Montgomery Close", "Birkenhead", "Merseyside", "CH41 9DW");

SELECT * FROM users;

COMMIT;

/* create loaned table */

CREATE TABLE loaned (
User_id INT, 
ISBN CHAR(17), 
Date_lent DATE NOT NULL, 
Due_date DATE NOT NULL,
Due_late BOOLEAN,
FOREIGN KEY (User_id) REFERENCES users(User_id), 
FOREIGN KEY (ISBN) REFERENCES books(ISBN)
);

/* insert data into loaned */

INSERT INTO loaned VALUES (1, "978-0-39-497433-1", "2022-08-23", "2022-09-06", true);
INSERT INTO loaned VALUES (1,  "978-3-19-515344-6", "2022-08-23", "2022-09-06", true);
INSERT INTO loaned VALUES (2, "978-2-39-487683-4", "2022-07-15", "2022-07-24", false);
INSERT INTO loaned VALUES (3, "987-5-44-564878-9", "2019-04-02", "2019-04-15", false);
INSERT INTO loaned VALUES (4, "978-9-83-457386-3", "2018-03-12", "2018-03-26", true);
INSERT INTO loaned VALUES (4, "978-4-24-483263-4", "2018-03-12", "2018-03-26", true);
INSERT INTO loaned VALUES (5, "978-1-99-765843-8", "2017-06-01", "2017-06-14", true);

/* DELETE FROM loaned WHERE Due_late = true; */

SELECT * FROM loaned;

COMMIT;

/* DROP TABLE loaned; */

/* SQL Queries */

/* View all users */
SELECT * FROM Users;

/* View all books */
SELECT * FROM books;

/* View all users that have loaned a book */
SELECT * FROM loaned;

/* View all books loaned by a user */

SELECT * FROM loaned WHERE User_id = 4;

/* Combined query */

SELECT * FROM loaned WHERE User_id = 1 AND Due_date = "2022-09-06";

/* current date */

SELECT loaned.Due_date, loaned.User_id FROM loaned
JOIN users ON users.User_id = loaned.User_id, users.First_name 
JOIN books ON books.User_id = loaned.User_id, books.Title, books.Author
WHERE Due_date > curdate();

COMMIT;