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


