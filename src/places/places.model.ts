import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

/**
 * This is the Nested object for location co-ordinates of geometry
 */
@ObjectType()
export class Points {
  @Field((type) => Float)
  lat: number;

  @Field((type) => Float)
  lng: number;
}

/**
 * This is the Nested object for location co-ordinates for viewport
 */
@ObjectType()
export class Viewport {
  @Field((type) => Points)
  northeast: Points;

  @Field((type) => Points)
  southwest: Points;
}

/**
 * This is the main object of geometry
 */
@ObjectType()
export class Geometry {
  @Field((type) => Points)
  location: Points;

  @Field((type) => Viewport)
  viewport: Viewport;
}

/**
 * Main place object as per details
 */
@ObjectType()
export class Places {
  @Field((type) => String)
  name?: string;

  @Field((type) => String)
  business_status?: string;

  @Field((type) => String)
  formatted_address?: string;

  @Field((type) => String)
  place_id?: string;

  @Field((type) => Int)
  price_level: number;

  @Field((type) => Geometry)
  geometry?: Geometry;

  @Field((type) => Float)
  rating: number;

  @Field((type) => Date)
  created_at: Date;

  @Field((type) => Date)
  updated_at: Date;
}
