import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlacesResolver } from './places.resolver';
import { PlaceService } from './places.services';

@Module({
  imports: [HttpModule],
  providers: [PlacesResolver, PlaceService, PrismaService],
})
export class PlacesModule {}
