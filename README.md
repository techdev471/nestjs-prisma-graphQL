## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## For Testing Puspose

For testing i have created a playgroud of graphql on this endpoint ( /graphql )
For example : [Nest](http://localhost:3000/graphql)
NOTE : you need to change the db connections string in env file as per your system's postgre.
For testing you need to run below graphql query to search place using place_id of google-places-api

Example :

```graphql
query {
  getPlace(place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4") {
    name
    business_status
    formatted_address
    place_id
    rating
    created_at
    updated_at
    geometry {
      location {
        lat
        lng
      }
      viewport {
        northeast {
          lat
          lng
        }
        southwest {
          lat
          lng
        }
      }
    }
  }
}
```
