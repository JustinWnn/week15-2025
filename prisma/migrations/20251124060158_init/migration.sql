/*
  Warnings:

  - You are about to drop the column `name` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `release` on the `Game` table. All the data in the column will be lost.
  - Added the required column `game` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseYear` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL
);
INSERT INTO "new_Game" ("developer", "id") SELECT "developer", "id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
