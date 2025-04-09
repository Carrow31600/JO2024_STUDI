-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: studijo2024
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add offer',7,'add_offer'),(26,'Can change offer',7,'change_offer'),(27,'Can delete offer',7,'delete_offer'),(28,'Can view offer',7,'view_offer'),(29,'Can add user profil',8,'add_userprofil'),(30,'Can change user profil',8,'change_userprofil'),(31,'Can delete user profil',8,'delete_userprofil'),(32,'Can view user profil',8,'view_userprofil'),(33,'Can add blacklisted token',9,'add_blacklistedtoken'),(34,'Can change blacklisted token',9,'change_blacklistedtoken'),(35,'Can delete blacklisted token',9,'delete_blacklistedtoken'),(36,'Can view blacklisted token',9,'view_blacklistedtoken'),(37,'Can add outstanding token',10,'add_outstandingtoken'),(38,'Can change outstanding token',10,'change_outstandingtoken'),(39,'Can delete outstanding token',10,'delete_outstandingtoken'),(40,'Can view outstanding token',10,'view_outstandingtoken'),(41,'Can add competition',11,'add_competition'),(42,'Can change competition',11,'change_competition'),(43,'Can delete competition',11,'delete_competition'),(44,'Can view competition',11,'view_competition'),(45,'Can add site',12,'add_site'),(46,'Can change site',12,'change_site'),(47,'Can delete site',12,'delete_site'),(48,'Can view site',12,'view_site'),(49,'Can add sport',13,'add_sport'),(50,'Can change sport',13,'change_sport'),(51,'Can delete sport',13,'delete_sport'),(52,'Can view sport',13,'view_sport');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$1000000$NyFmKlJVYbmwm1ZCDA9BOW$Rzbg2C9DdMQh8SRjUl4C03JH9Kyy2theotCd8L3mV+U=','2025-04-07 07:09:35.000000',1,'caroline','','','minguezcaroline31@gmail.com',1,1,'2025-04-04 13:39:13.000000'),(2,'pbkdf2_sha256$1000000$ekpF1BUMigZy3XbgYjZgsM$rUeDYH1lTEcdIjpcX95VZK5iqO7+k02ibDrQhcEtSS0=',NULL,0,'utilisateur','','','',0,1,'2025-04-07 07:13:44.001505'),(3,'pbkdf2_sha256$1000000$9A8FVBWRLUKvR25vDYELfq$jD6JTshQQb3Oa/iL2H0OXlzLjk7fBOBvbvUfSPE1R6M=',NULL,0,'staff','','','',1,1,'2025-04-07 07:14:52.000000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authentication_userprofil`
--

DROP TABLE IF EXISTS `authentication_userprofil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication_userprofil` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userkey` varchar(15) NOT NULL,
  `account_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_id` (`account_id`),
  CONSTRAINT `authentication_userprofil_account_id_ba2deb87_fk_auth_user_id` FOREIGN KEY (`account_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authentication_userprofil`
--

LOCK TABLES `authentication_userprofil` WRITE;
/*!40000 ALTER TABLE `authentication_userprofil` DISABLE KEYS */;
/*!40000 ALTER TABLE `authentication_userprofil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competition_competition`
--

DROP TABLE IF EXISTS `competition_competition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competition_competition` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `hour` time(6) NOT NULL,
  `site_id` bigint NOT NULL,
  `sport_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `competition_competition_site_id_33668e59_fk_sites_site_id` (`site_id`),
  KEY `competition_competition_sport_id_ffce933e_fk_sports_sport_id` (`sport_id`),
  CONSTRAINT `competition_competition_site_id_33668e59_fk_sites_site_id` FOREIGN KEY (`site_id`) REFERENCES `sites_site` (`id`),
  CONSTRAINT `competition_competition_sport_id_ffce933e_fk_sports_sport_id` FOREIGN KEY (`sport_id`) REFERENCES `sports_sport` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competition_competition`
--

LOCK TABLES `competition_competition` WRITE;
/*!40000 ALTER TABLE `competition_competition` DISABLE KEYS */;
/*!40000 ALTER TABLE `competition_competition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2025-04-06 08:11:08.644750','5','Offre Solo',1,'[{\"added\": {}}]',7,1),(2,'2025-04-06 08:11:29.317212','6','Offre Duo',1,'[{\"added\": {}}]',7,1),(3,'2025-04-06 08:12:01.362972','7','Offre Family',1,'[{\"added\": {}}]',7,1),(4,'2025-04-06 08:20:03.407246','5','Offre Solo',2,'[{\"changed\": {\"fields\": [\"Picture\"]}}]',7,1),(5,'2025-04-06 08:22:07.903321','5','Offre Solo',2,'[{\"changed\": {\"fields\": [\"Picture\"]}}]',7,1),(6,'2025-04-06 08:23:43.779724','5','Offre Solo',2,'[{\"changed\": {\"fields\": [\"Picture\"]}}]',7,1),(7,'2025-04-06 08:23:56.314477','6','Offre Duo',2,'[{\"changed\": {\"fields\": [\"Picture\"]}}]',7,1),(8,'2025-04-06 08:24:02.112541','7','Offre Family',2,'[{\"changed\": {\"fields\": [\"Picture\"]}}]',7,1),(9,'2025-04-07 05:33:26.925357','8','test solo',1,'[{\"added\": {}}]',7,1),(10,'2025-04-07 05:33:40.870265','9','TEST 2',1,'[{\"added\": {}}]',7,1),(11,'2025-04-07 05:40:42.534099','9','TEST 2',3,'',7,1),(12,'2025-04-07 05:40:42.534099','8','test solo',3,'',7,1),(13,'2025-04-07 07:13:45.302094','2','utilisateur',1,'[{\"added\": {}}]',4,1),(14,'2025-04-07 07:14:53.973173','3','staff',1,'[{\"added\": {}}]',4,1),(15,'2025-04-07 07:15:30.486776','3','staff',2,'[{\"changed\": {\"fields\": [\"Staff status\"]}}]',4,1),(16,'2025-04-07 07:15:43.503862','1','caroline',2,'[]',4,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(8,'authentication','userprofil'),(11,'competition','competition'),(5,'contenttypes','contenttype'),(7,'offers','offer'),(6,'sessions','session'),(12,'sites','site'),(13,'sports','sport'),(9,'token_blacklist','blacklistedtoken'),(10,'token_blacklist','outstandingtoken');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2025-04-04 13:38:37.948720'),(2,'auth','0001_initial','2025-04-04 13:38:39.635107'),(3,'admin','0001_initial','2025-04-04 13:38:40.063206'),(4,'admin','0002_logentry_remove_auto_add','2025-04-04 13:38:40.078793'),(5,'admin','0003_logentry_add_action_flag_choices','2025-04-04 13:38:40.101438'),(6,'contenttypes','0002_remove_content_type_name','2025-04-04 13:38:40.310777'),(7,'auth','0002_alter_permission_name_max_length','2025-04-04 13:38:40.449228'),(8,'auth','0003_alter_user_email_max_length','2025-04-04 13:38:40.487740'),(9,'auth','0004_alter_user_username_opts','2025-04-04 13:38:40.510583'),(10,'auth','0005_alter_user_last_login_null','2025-04-04 13:38:40.647920'),(11,'auth','0006_require_contenttypes_0002','2025-04-04 13:38:40.647920'),(12,'auth','0007_alter_validators_add_error_messages','2025-04-04 13:38:40.670875'),(13,'auth','0008_alter_user_username_max_length','2025-04-04 13:38:40.829634'),(14,'auth','0009_alter_user_last_name_max_length','2025-04-04 13:38:40.995395'),(15,'auth','0010_alter_group_name_max_length','2025-04-04 13:38:41.048746'),(16,'auth','0011_update_proxy_permissions','2025-04-04 13:38:41.064835'),(17,'auth','0012_alter_user_first_name_max_length','2025-04-04 13:38:41.214649'),(18,'sessions','0001_initial','2025-04-04 13:38:41.298103'),(19,'offers','0001_initial','2025-04-06 08:04:41.562486'),(20,'offers','0002_alter_offer_unitprice','2025-04-06 08:06:55.335710'),(21,'offers','0003_alter_offer_picture','2025-04-06 08:19:38.518214'),(22,'offers','0004_alter_offer_picture','2025-04-06 08:23:23.136243'),(23,'authentication','0001_initial','2025-04-07 06:04:33.249241'),(24,'token_blacklist','0001_initial','2025-04-07 06:36:29.480085'),(25,'token_blacklist','0002_outstandingtoken_jti_hex','2025-04-07 06:36:29.533581'),(26,'token_blacklist','0003_auto_20171017_2007','2025-04-07 06:36:29.552598'),(27,'token_blacklist','0004_auto_20171017_2013','2025-04-07 06:36:29.718450'),(28,'token_blacklist','0005_remove_outstandingtoken_jti','2025-04-07 06:36:29.850470'),(29,'token_blacklist','0006_auto_20171017_2113','2025-04-07 06:36:29.907199'),(30,'token_blacklist','0007_auto_20171017_2214','2025-04-07 06:36:30.340682'),(31,'token_blacklist','0008_migrate_to_bigautofield','2025-04-07 06:36:30.859988'),(32,'token_blacklist','0010_fix_migrate_to_bigautofield','2025-04-07 06:36:30.881857'),(33,'token_blacklist','0011_linearizes_history','2025-04-07 06:36:30.888675'),(34,'token_blacklist','0012_alter_outstandingtoken_user','2025-04-07 06:36:30.903837'),(35,'sports','0001_initial','2025-04-07 14:03:42.697011'),(36,'sites','0001_initial','2025-04-07 14:03:42.747670'),(37,'competition','0001_initial','2025-04-07 14:03:43.069039');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('rt5dh54kn8dnuk2myo87i3v6e7vqagur','.eJxVjDsOwjAQBe_iGln-xMmakp4zWGvvLg6gWMqnQtwdIqWA9s3Me6mE21rTtvCcRlJnZdXpd8tYHjztgO443ZoubVrnMetd0Qdd9LURPy-H-3dQcanfehDuPXKxNkjgbAKBtyQxegfgc8cWBoYChdnQUITISMAIAV3fievU-wP6-jh6:1u1gbv:vBxUafZlHoYSk-rGnzZI-G_r2ovgrHAtzml3tVcfxg4','2025-04-21 07:09:35.789522');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers_offer`
--

DROP TABLE IF EXISTS `offers_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers_offer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `unitprice` decimal(10,2) NOT NULL,
  `description` varchar(150) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers_offer`
--

LOCK TABLES `offers_offer` WRITE;
/*!40000 ALTER TABLE `offers_offer` DISABLE KEYS */;
INSERT INTO `offers_offer` VALUES (5,'Offre Solo',100.00,'Offre pour 1 billet','offers/Solo.jpg',1),(6,'Offre Duo',75.00,'Offre pour 2 billets','offers/duo.jpg',2),(7,'Offre Family',50.00,'Offre pour 4 billets','offers/family.jpg',4);
/*!40000 ALTER TABLE `offers_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sites_site`
--

DROP TABLE IF EXISTS `sites_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sites_site` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `postcode` varchar(20) NOT NULL,
  `city` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sites_site`
--

LOCK TABLES `sites_site` WRITE;
/*!40000 ALTER TABLE `sites_site` DISABLE KEYS */;
INSERT INTO `sites_site` VALUES (1,'testsite','38000','GRENOBLE','BLABLABLA','');
/*!40000 ALTER TABLE `sites_site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports_sport`
--

DROP TABLE IF EXISTS `sports_sport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sports_sport` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports_sport`
--

LOCK TABLES `sports_sport` WRITE;
/*!40000 ALTER TABLE `sports_sport` DISABLE KEYS */;
/*!40000 ALTER TABLE `sports_sport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

DROP TABLE IF EXISTS `token_blacklist_blacklistedtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_id` (`token_id`),
  CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

LOCK TABLES `token_blacklist_blacklistedtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_blacklistedtoken` VALUES (1,'2025-04-07 07:07:41.468991',2),(2,'2025-04-07 08:25:16.490757',8),(3,'2025-04-07 08:27:38.743369',9),(4,'2025-04-07 08:28:52.443584',10),(5,'2025-04-07 08:32:46.093791',11);
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

DROP TABLE IF EXISTS `token_blacklist_outstandingtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int DEFAULT NULL,
  `jti` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`),
  CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

LOCK TABLES `token_blacklist_outstandingtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_outstandingtoken` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4MDg5NywiaWF0IjoxNzQ0MDA4MDk3LCJqdGkiOiI2YjFjNmMwNzA0Yzk0YjQyYmVhMDY2MDA2OWFhZDNkYiIsInVzZXJfaWQiOjF9.N_GIHFyJAtZpFeRLdEsWebUs6TEBVfhhDU2PAyLNFpw','2025-04-07 06:41:37.870932','2025-04-09 06:41:37.000000',1,'6b1c6c0704c94b42bea0660069aad3db'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4MjIyMiwiaWF0IjoxNzQ0MDA5NDIyLCJqdGkiOiI4OWY1NzZjOTBjNzI0ZmQ1Yjc3YmQwZDk2NDMwMjM0NyIsInVzZXJfaWQiOjF9.vg5b1XDHlpLAwZf26PsfN73S91juk1WDdyDTuAU-ftI','2025-04-07 07:03:42.063022','2025-04-09 07:03:42.000000',1,'89f576c90c724fd5b77bd0d964302347'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NDc1MiwiaWF0IjoxNzQ0MDExOTUyLCJqdGkiOiIwYzIwYzUyY2QzMmU0MTA2OWM0YTVkOThiZjQwMTY3ZSIsInVzZXJfaWQiOjF9.vioYDocNIdDIPJRyhLLAvyYngpIUUCUYXZQXGWqmzps','2025-04-07 07:45:52.341328','2025-04-09 07:45:52.000000',1,'0c20c52cd32e41069c4a5d98bf40167e'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NDg0NiwiaWF0IjoxNzQ0MDEyMDQ2LCJqdGkiOiJmMzhlZjVjMmE2MDc0YjU5ODk0M2IwNWVkZGNjYjk0ZCIsInVzZXJfaWQiOjF9.bX60Ftp7UgFwEHMLbGAXafrHzvx7oDtj5QH7w8UAlRY','2025-04-07 07:47:26.173520','2025-04-09 07:47:26.000000',1,'f38ef5c2a6074b598943b05eddccb94d'),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NDg5OCwiaWF0IjoxNzQ0MDEyMDk4LCJqdGkiOiIxODQ2MTJhMzljZjY0MWVlYTU3NmM2ZDg4NDEzMDk1NSIsInVzZXJfaWQiOjF9.kmBdnJv6N24JqpViPi-opjCKHzFk2c2cuygpglz8icE','2025-04-07 07:48:18.684094','2025-04-09 07:48:18.000000',1,'184612a39cf641eea576c6d884130955'),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NTM5MywiaWF0IjoxNzQ0MDEyNTkzLCJqdGkiOiI1MGFiYzcwNGVlZTg0ZmQzYTM3ZDMwNDExYjVlNTc3NSIsInVzZXJfaWQiOjF9.6mQYAiI715tgYTEDzrxF31bxHScazEp8IhGW4-fKacI','2025-04-07 07:56:33.799164','2025-04-09 07:56:33.000000',1,'50abc704eee84fd3a37d30411b5e5775'),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NTUwNCwiaWF0IjoxNzQ0MDEyNzA0LCJqdGkiOiJlYWUzYmMwMGJhNGU0NmVhOGZhNWQyNzZiODNkNmNkOCIsInVzZXJfaWQiOjF9.XjTPhyhrNZ36uJwJ8WFs5LdMUO7aaK3PAjy9w-qvnQI','2025-04-07 07:58:24.971551','2025-04-09 07:58:24.000000',1,'eae3bc00ba4e46ea8fa5d276b83d6cd8'),(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NTc0MywiaWF0IjoxNzQ0MDEyOTQzLCJqdGkiOiI1YjEwM2U1YzY2ZWI0OTE1ODI0N2U0YWZiMzI0OGRjOSIsInVzZXJfaWQiOjF9.tXXMHZXm-L2llONPQnwrGfZM1_P0engEyK7_phGRETc','2025-04-07 08:02:23.490968','2025-04-09 08:02:23.000000',1,'5b103e5c66eb49158247e4afb3248dc9'),(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NzI0OSwiaWF0IjoxNzQ0MDE0NDQ5LCJqdGkiOiJmYTJkOGRlYTEwNTc0YjgzYTgzMzRlYTc0ZTUwNzkyOSIsInVzZXJfaWQiOjF9.Cj11ULjF8X3JZIsLG4Ut7eZWDtV9gHZAiLH6GR0hsqo','2025-04-07 08:27:29.062180','2025-04-09 08:27:29.000000',1,'fa2d8dea10574b83a8334ea74e507929'),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NzMyOSwiaWF0IjoxNzQ0MDE0NTI5LCJqdGkiOiIzMGJhODkxZWZiYzY0NmViYmUzNjA3OWJlYmM5OWNmYSIsInVzZXJfaWQiOjF9.M5ekCb90OUnCLhfgAnlJmmf0pJUACD79tfHQEC7KswI','2025-04-07 08:28:49.427130','2025-04-09 08:28:49.000000',1,'30ba891efbc646ebbe36079bebc99cfa'),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NDE4NzU1NCwiaWF0IjoxNzQ0MDE0NzU0LCJqdGkiOiI4ZTIxYzM1MGU5YWI0NTFkYjcxYzUyZDM1OTRhY2NlNSIsInVzZXJfaWQiOjF9.O3fa75-cE0eVF18ACqC3OLyYo04RYWSW0_ZbcPIeZ0Q','2025-04-07 08:32:34.977089','2025-04-09 08:32:34.000000',1,'8e21c350e9ab451db71c52d3594acce5');
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09  8:31:43
