<a href="https://www.inesdi.com/landing-maestrias/" target="blank"><img src="https://www.lectiva.com/assets/es/logos/centro/id/126420/size/m.jpg" ></a>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://www.mongodb.com/" target="blank"><img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" style="margin-left: 55px" width="500" alt="MongoDB Logo" /></a>
  <a href="https://www.docker.com/" target="blank"><img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png" width="500" alt="Docker Logo" /></a>
</p>



## Description

First Bootcamp project, Dockerizing a NondeJS (using NestJS) API with MongoDB.

## Installation

```bash
# Clone the repository
$ git clone https://github.com/Chris-AM/INESDI.git
# Nav to the project folder
$ cd 0_bootcamp/minimarket_api
# Declare the .env file
$ cp .env.template .env
# Fill the .env file with your own data
# Run Docker-compose
$ docker-compose up -d
# Install dependencies
$ yarn install --frozen-lockfile
# Run the app
$ yarn run start:dev
# Open Postman and test the API
https://interstellar-spaceship-158766.postman.co/workspace/INESDI~dc093d60-ac4e-43d7-896a-04fb048e120b/collection/13178273-a81143a5-7094-4951-86f1-fd3d8ec5d283?action=share&creator=13178273
# Open API documentation
http://localhost:3000/api/documentation#/
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

<!-- ## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
``` -->
