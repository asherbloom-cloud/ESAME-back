-- CreateTable
CREATE TABLE `AttractionMap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `x` INTEGER NOT NULL,
    `y` INTEGER NOT NULL,
    `waitTime` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `intensity` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `reviews` INTEGER NOT NULL,
    `openTime` VARCHAR(191) NOT NULL,
    `fastPass` BOOLEAN NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShowMap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `x` INTEGER NOT NULL,
    `y` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `waitTime` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `intensity` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `reviews` INTEGER NOT NULL,
    `openTime` VARCHAR(191) NOT NULL,
    `fastPass` BOOLEAN NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
