/*
  Warnings:

  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LoginStatus" AS ENUM ('LOGGED_IN', 'LOGGED_OUT');

-- AlterTable
ALTER TABLE "logins" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "countryCode" TEXT,
ADD COLUMN     "countryFlag" TEXT,
ADD COLUMN     "deviceId" TEXT,
ADD COLUMN     "deviceType" TEXT,
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "status" "LoginStatus" NOT NULL DEFAULT E'LOGGED_IN';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
