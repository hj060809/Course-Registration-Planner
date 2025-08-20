-- CreateTable
CREATE TABLE "AdminCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminCode_code_key" ON "AdminCode"("code");
