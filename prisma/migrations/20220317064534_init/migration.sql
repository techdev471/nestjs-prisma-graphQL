/*
  Warnings:

  - You are about to drop the column `place_id` on the `place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "place" DROP COLUMN "place_id",
ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;
