CREATE DATABASE sistemaderestaurante;

CREATE TABLE prato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
);

CREATE TABLE bebida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
);
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mesa  INT,
    nome VARCHAR(10),
    prato_id TEXT,
    bebida_id TEXT
);



-- Inserir dados na tabela prato
INSERT INTO prato (nome) VALUES ('Pizza de Calabresa');
INSERT INTO prato (nome) VALUES ('Pizza Portuguesa');

-- Inserir dados na tabela bebida
INSERT INTO bebida (nome) VALUES ( 'Coca-Cola');
INSERT INTO bebida (nome) VALUES ('Tubaína');


