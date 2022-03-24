/*
  Warnings:

  - You are about to drop the column `price_level` on the `place` table. All the data in the column will be lost.
  - Added the required column `place_id` to the `place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "place" DROP COLUMN "price_level",
ADD COLUMN     "place_id" TEXT NOT NULL;
