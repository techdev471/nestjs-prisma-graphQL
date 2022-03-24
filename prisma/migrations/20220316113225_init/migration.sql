-- CreateTable
CREATE TABLE "place" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "business_status" TEXT NOT NULL,
    "formatted_address" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    "price_level" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "types" JSONB NOT NULL,
    "geometry" JSONB NOT NULL,

    CONSTRAINT "place_pkey" PRIMARY KEY ("id")
);
