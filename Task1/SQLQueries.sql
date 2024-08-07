CREATE DATABASE crud_api;
USE crud_api;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (id, name, email) VALUES (1, 'Hammad', 'hammad@gmail.com');
INSERT INTO users (id, name, email) VALUES (2, 'Ali', 'ali@gmail.com');
-- 3rd one is added from Post Request

SELECT * FROM [crud_api].[dbo].[users]