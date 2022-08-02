-- Active: 1657147516906@@127.0.0.1@3306@curso

/* para crear una base de datos se usa create database, para crear una tabal se usa create table, a la tabla el id tiene que llevar el atributo AUTO_INCREMENT y ser especificada que sera la primary key al final */

CREATE Table usuarios (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(80) NOT NULL,   
    fecha_nacimiento DATETIME NULL,
    telefono INT NULL,
    PRIMARY KEY (id)
);

/* alter sirve para modificar una base de datos, tabla, etc 
    para alterar una tabla y especificamente una columna se usa:
         ALTER TABLE `table_name` ADD COLUMN` column_name` `data_type`;
    
*/

ALTER Table usuarios MODIFY COLUMN telefono VARCHAR(30) NULL;

insert into usuarios (
    nombre,apellido,fecha_nacimiento,telefono)
VALUES ('Fernan', 'Vereau', '2001-02-07 10:00:00','123123123');

DELETE FROM usuarios WHERE id = '1';

UPDATE usuarios
SET nombre = 'pepe',
apellido = 'carson'
WHERE id = '1';

SELECT *FROM usuarios;

UPDATE usuarios
SET id = '1', nombre = 'sanson', apellido = 'morningstar';

delete FROM usuarios where id = '1';

drop Table usuarios;


SELECT *FROM usuarios where apellido like '%u%';


CREATE TABLE publicaciones (
    id INT(11) NOT NULL AUTO_INCREMENT,
    autor_id INT(11) NOT NULL,
    titulo VARCHAR(150) NOT NULL,   
    texto text NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

SELECT p.id, p.titulo, p.texto, CONCAT(u.nombre, ' ' , u.apellido) as autor
FROM publicaciones p, usuarios u
WHERE p.autor_id = u.id;


SELECT *FROM publicaciones;

UPDATE curso.publicaciones SET texto = 'pedofilo' WHERE (id = 1);

SELECT p.id, p.titulo, p.texto, CONCAT(u.nombre, ' ' , u.apellido) as autor
FROM publicaciones p INNER JOIN usuarios u
on p.autor_id = u.id;



