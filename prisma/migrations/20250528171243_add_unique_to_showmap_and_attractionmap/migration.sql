/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `AttractionMap` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ShowMap` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AttractionMap_name_key` ON `AttractionMap`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `ShowMap_name_key` ON `ShowMap`(`name`);
