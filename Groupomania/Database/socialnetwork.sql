-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 31, 2021 at 06:21 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialnetwork`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `PostId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `message`, `pseudo`, `createdAt`, `updatedAt`, `UserId`, `PostId`) VALUES
(8, '🤘🏼🍻🤘🏼', 'Khaled', '2021-07-31 04:04:11', '2021-07-31 04:04:11', 14, 9),
(9, 'Cheers 🍻', 'admin', '2021-07-31 04:16:54', '2021-07-31 04:16:54', 13, 10),
(10, 'rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', 'Rock_n_Roll', '2021-07-31 04:28:27', '2021-07-31 04:28:27', 15, 12),
(12, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 😁', 'admin', '2021-07-31 04:31:22', '2021-07-31 04:31:22', 13, 12),
(13, 'rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 😆 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', 'Rock_n_Roll', '2021-07-31 04:28:27', '2021-07-31 04:28:27', 15, 12);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `PostId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `createdAt`, `updatedAt`, `UserId`, `PostId`) VALUES
(10, '2021-07-31 04:02:49', '2021-07-31 04:02:49', 14, 9),
(11, '2021-07-31 04:16:19', '2021-07-31 04:16:19', 13, 10),
(12, '2021-07-31 04:18:35', '2021-07-31 04:18:35', 15, 10),
(14, '2021-07-31 04:25:23', '2021-07-31 04:25:23', 14, 11),
(15, '2021-07-31 04:29:25', '2021-07-31 04:29:25', 13, 12),
(16, '2021-07-31 04:35:29', '2021-07-31 04:35:29', 13, 9);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `message`, `link`, `imageUrl`, `createdAt`, `updatedAt`, `UserId`) VALUES
(9, ' Hello World !! 🤘🏼 ', 'https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif', NULL, '2021-07-31 03:56:28', '2021-07-31 03:56:28', 13),
(10, 'Cheers guys !!', 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif', NULL, '2021-07-31 04:06:34', '2021-07-31 04:06:55', 14),
(11, 'Rock On, World off !! 🤘🏼', 'https://media.giphy.com/media/7lAFH4MrNJMcg/giphy.gif', NULL, '2021-07-31 04:21:21', '2021-07-31 04:21:21', 15),
(12, '\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"', NULL, NULL, '2021-07-31 04:27:29', '2021-07-31 04:27:29', 14);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `bio` varchar(500) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `photo`, `bio`, `admin`, `createdAt`, `updatedAt`) VALUES
(13, 'admin', 'admin@groupomania.com', '$2b$10$w6aQQsYeKayBot6vNmrq6uNOBY8eQWF/hw99ZJwSIZr.vBTqPAPMy', 'http://localhost:3000/upload/admin1627709165823.png', 'Hello World !! ', 1, '2021-07-31 03:49:05', '2021-07-31 05:26:05'),
(14, 'Khaled', 'Kh.issa86@gmail.com', '$2b$10$/S34GTXEWvqAbIeJDxdFpeXU6VkwZtZtbyrXEl3kgVWHc/BagA/Xm', 'http://localhost:3000/upload/br1627704689531.jpg', NULL, 0, '2021-07-31 04:02:36', '2021-07-31 04:11:29'),
(15, 'Rock_n_Roll', 'Petrucci@gmail.com', '$2b$10$Gu4IuWkJUBD.l4uUgja88e5mPkXVvNixkZaUliiIs/8o4FKqq1gza', 'http://localhost:3000/upload/autocollants-rock-and-roll-homer-1627706317734.jpg', 'I Love Rock and Roll 🤘🏼🎸', 0, '2021-07-31 04:18:27', '2021-07-31 04:38:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PostId` (`PostId`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PostId` (`PostId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
