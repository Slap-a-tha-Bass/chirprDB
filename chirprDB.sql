USE chirpr;

DROP TABLE chirps;
CREATE TABLE chirps (
	id CHAR(36) PRIMARY KEY,
	username VARCHAR(16) NOT NULL,
    message VARCHAR(128) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME ON UPDATE NOW()
);
CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(32),
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME ON UPDATE NOW()
);

SELECT * FROM chirps;
INSERT INTO chirps (id, username, message) VALUES ('62d48ef1-ba57-4616-9807-e2063a4b99c3', 'Slap-a-tha-Bass', 'Yo, what is up chirpFam?');
CREATE user 'chirprapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'chirprapp';
GRANT ALL PRIVILEGES ON chirpr.* TO 'chirprapp'@'localhost';
