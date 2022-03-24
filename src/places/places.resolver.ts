import { Parent, Query, ResolveField } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { Places, Geometry } from './places.model';
import { PlaceService } from './places.services';

@Resolver(() => Places)
export class PlacesResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Query(() => Places)
  async getPlace(@Args('place_id') place_id: string) {
    return this.placeService.getPlaces(place_id);
  }

  @ResolveField('geometry', () => Geometry)
  async LocationInfo(@Parent() places: Places) {
    return this.placeService.getGeometry(places.place_id);
  }
}
