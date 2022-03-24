import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaceService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  /**
   * For get google place details and store inside postgre database using prisma and graphql query
   * @param place_id
   * @returns Place
   */
  async getPlaces(place_id: string) {
    const API_KEY: string = process.env.API_KEY;
    let placeData: any;
    const api = await this.httpService
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,business_status,price_level,place_id,geometry,types,formatted_address&key=${API_KEY}`,
      )
      .toPromise();
    placeData = api.data;
    const createdData = await this.prisma.place.create({
      data: placeData.result,
    });
    return createdData;
  }

  /**
   * For finding nested geometry data from parent Id
   * @param place_id
   * @returns
   */

  async getGeometry(place_id: string) {
    let location = await this.prisma.place.findFirst({
      where: { place_id: place_id },
      select: { geometry: true },
    });
    return location.geometry;
  }
}
