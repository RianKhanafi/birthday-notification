-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 05, 2022 at 05:11 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `birthdayNotification`
--

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20221203103723-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `long` varchar(255) NOT NULL,
  `send_at` datetime DEFAULT NULL,
  `birth_date` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `lat`, `long`, `send_at`, `birth_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Rian', 'Khanafi', 'riankhanafi851@gmail.com', '-6.202394', '106.652710', NULL, '2001-12-05 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(2, 'Maya', NULL, 'maya@gmail.com', '-6.202394', '106.652710', NULL, '2000-12-05 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(3, 'sholeh', 'sholihun', 'sholehsholihun@gmail.com', '51.507351', '-0.127758', NULL, '2001-12-01 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(4, 'lisa', 'lalalisa', 'lalaisa@gmail.com', '-4.269928', '138.080353', NULL, '2001-12-06 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(5, 'new', 'york', 'newyork@gmail.com', '40.730610', '-73.935242', NULL, '2001-12-06 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(6, 'new1', 'yor1k', 'newyo1rk@gmail.com', '40.730610', '-73.935242', NULL, '2001-11-06 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL),
(7, 'new1', 'yor1k', 'newyo1rk@gmail.com', '40.730610', '-73.935242', NULL, '2001-12-04 00:00:00', '2022-12-05 16:10:12', '2022-12-05 16:10:12', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
