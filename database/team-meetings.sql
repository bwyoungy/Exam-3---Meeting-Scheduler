-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 07:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `team-meetings`
--
CREATE DATABASE IF NOT EXISTS `team-meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `team-meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingID` int(11) NOT NULL,
  `teamID` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `description` varchar(100) DEFAULT 'A new meeting',
  `room` varchar(30) DEFAULT 'Zoom'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingID`, `teamID`, `startTime`, `endTime`, `description`, `room`) VALUES
(1, 1, '2024-03-31 07:00:00', '2024-03-31 09:00:00', 'April Fools planning', 'River Room'),
(2, 2, '2024-03-31 09:00:00', '2024-03-31 11:00:00', 'April Fools app', 'The Tablet Room'),
(3, 3, '2024-03-31 11:00:00', '2024-03-31 13:30:00', 'Backing up last year\'s April pranks', 'Server Side Room'),
(4, 4, '2024-03-31 13:30:00', '2024-03-31 14:15:00', '2024-04-01 LE:TS:GO', 'Grand Table Hall'),
(5, 5, '2024-03-31 23:00:00', '2024-03-31 23:30:00', 'Brainstorm how to work April Fools to our advantage', 'Strategy Room'),
(19, 1, '2024-04-02 10:00:00', '2024-04-02 13:00:00', 'Post April Fools pranks to UX', 'Forest Hut'),
(20, 2, '2024-04-03 09:00:00', '2024-04-03 14:45:00', 'Go over April Fools App error log', 'PC room'),
(21, 3, '2024-04-02 09:00:00', '2024-04-02 11:30:00', 'Add new pranks to db', 'Server Side Room'),
(22, 4, '2024-04-02 13:00:00', '2024-04-02 14:15:00', 'Make sure backend didn\'t destroy the db', 'Grand Table Hall'),
(23, 5, '2024-04-02 01:00:00', '2024-04-02 05:35:00', 'Write news articles about April Fools 2024', 'News Desk');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `teamID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`teamID`, `name`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team'),
(3, 'Backend Team'),
(4, 'Database Team'),
(5, 'Promotion Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingID`),
  ADD KEY `FOREIGN` (`teamID`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`teamID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `teamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
