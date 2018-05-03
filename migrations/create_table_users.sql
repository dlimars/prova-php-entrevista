CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users` VALUES (1,'Leandro','leandro@leandro.com.br'),(2,'Daniel','daniel@daniel.com.br'),(3,'Robson','robson@robson.com.br'),(4,'Jurandir','jurandir@jurandir.com.br');