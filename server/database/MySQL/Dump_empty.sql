-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nuxt-koa
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (47,'gdfgd','2020-10-15 07:37:52','116829409616770118025'),(48,'klokjojok','2020-10-15 07:38:25','116829409616770118025'),(49,'bhcfhg','2020-10-15 07:39:27','116829409616770118025'),(50,'dddd','2020-10-15 07:39:41','116829409616770118025'),(51,'ikjkkkkkkk','2020-10-15 07:39:56','116829409616770118025'),(52,'\n/.;','2020-10-15 07:42:04','116829409616770118025'),(53,'1','2020-10-15 07:43:19','116829409616770118025'),(54,'yugyu','2020-10-15 08:01:22','116829409616770118025'),(55,'dfd','2020-10-15 08:01:55','116829409616770118025'),(56,'dfgdfgd','2020-10-15 08:02:37','116829409616770118025'),(57,'dfgdfg','2020-10-15 08:02:44','116829409616770118025'),(58,'4444','2020-10-15 08:03:26','116829409616770118025'),(59,'59','2020-10-15 08:04:05','116829409616770118025'),(60,'dfgdfgdf','2020-10-15 08:06:41','116829409616770118025'),(61,'sdsssss','2020-10-15 08:06:50','116829409616770118025'),(62,'ssss','2020-10-15 08:06:55','116829409616770118025'),(63,'sss','2020-10-15 08:06:59','116829409616770118025'),(64,'5','2020-10-15 08:07:02','116829409616770118025'),(65,'gfgg','2020-10-15 08:11:28','116829409616770118025'),(66,'444','2020-10-15 08:12:06','116829409616770118025'),(67,'drffgdfg','2020-10-15 08:12:33','116829409616770118025'),(68,'gf','2020-10-15 08:12:42','116829409616770118025'),(69,'fgfgfg','2020-10-15 08:12:46','116829409616770118025'),(70,'fgfgfh','2020-10-15 08:12:49','116829409616770118025'),(71,'dfgdf','2020-10-15 08:13:42','116829409616770118025'),(72,'hfghfg','2020-10-15 08:13:48','116829409616770118025'),(73,'5','2020-10-15 08:13:51','116829409616770118025'),(74,'6','2020-10-15 08:13:55','116829409616770118025'),(75,'66','2020-10-15 08:13:58','116829409616770118025'),(76,'jhjh','2020-10-15 08:14:18','116829409616770118025'),(77,'ghhg','2020-10-15 08:14:32','116829409616770118025'),(78,'dffd','2020-10-15 08:15:20','116829409616770118025'),(79,'dffd','2020-10-15 08:15:22','116829409616770118025'),(80,'dfg','2020-10-15 08:15:34','116829409616770118025'),(81,'dfgdf','2020-10-15 08:15:46','116829409616770118025'),(82,'dfg','2020-10-15 08:16:09','116829409616770118025'),(84,'444','2020-10-15 08:16:22','116829409616770118025'),(85,'434','2020-10-15 08:16:30','116829409616770118025'),(91,'ghgh','2020-10-15 08:20:05','116829409616770118025'),(92,'gggg','2020-10-15 08:20:43','116829409616770118025'),(96,'555','2020-10-15 08:24:25','116829409616770118025'),(97,'as97','2020-10-15 08:25:17','116829409616770118025'),(164,'ujh','2020-10-18 16:58:31','103598798002088353411'),(165,'jghjghjgh','2020-10-18 16:58:36','103598798002088353411'),(167,'gjhjghj','2020-10-18 16:58:41','103598798002088353411'),(168,'hjghj','2020-10-18 16:58:43','103598798002088353411'),(169,'ghjghj','2020-10-18 16:58:44','103598798002088353411'),(170,'ghjgh','2020-10-18 16:58:46','103598798002088353411'),(171,'hgjg','2020-10-18 16:58:48','103598798002088353411'),(172,'ghjghj','2020-10-18 16:58:50','103598798002088353411'),(173,'gjjhg','2020-10-18 16:58:52','103598798002088353411'),(174,'gjgj','2020-10-18 16:58:54','103598798002088353411'),(175,'gjgj','2020-10-18 16:58:56','103598798002088353411');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(50) NOT NULL,
  `family_name` varchar(50) DEFAULT NULL,
  `given_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `email_verified` tinyint(1) DEFAULT NULL,
  `role_id` int DEFAULT '1',
  `login` varchar(25) DEFAULT NULL,
  `date_signin` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `login_UNIQUE` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('103598798002088353411','Matic','Mahoro','mahoromatic.chan@gmail.com',1,1,'103598798002088353411','2020-10-16 16:41:45'),('116829409616770118025','Shubin','Danil','danil.legioner@gmail.com',1,1,'yokawaiik','2020-10-16 16:39:06');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-19  0:29:17