create database ampelos;
CREATE USER 'ampelos_user'@'localhost' IDENTIFIED BY 'core';
GRANT ALL PRIVILEGES ON ampelos . * TO 'ampelos_user'@'localhost';
FLUSH PRIVILEGES;