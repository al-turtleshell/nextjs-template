-- CreateEnum
CREATE TYPE "PermissionName" AS ENUM ('ACCESS_BACKOFFICE');

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" "PermissionName" NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToUser_AB_unique" ON "_PermissionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToUser_B_index" ON "_PermissionToUser"("B");

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
