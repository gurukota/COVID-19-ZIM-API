# COVID19-ZIMBABWE-API
(https://covid-api-zim.herokuapp.com/)

This repo is created to get all the details of COVID-19 in Zimbabwe. These API will help to get the details of provinces in Zimbabwe. The routes for the API are mentioned below:

## Prerequisites

To work with the api you must have to install the following:

- [NodeJS](https://nodejs.org/en/download/) - Node.js® is a JavaScript runtime
  built on Chrome's V8 JavaScript engine.
- [MongoDB Server](https://docs.mongodb.com/manual/installation/) - NoSql
  Database and server
- [Postman](https://www.getpostman.com/downloads/) - API development environment

## Installation

Before doing anything you have to clone or download and unzip the project folder, open terminal and navigate to the project folder and run:

```bash
npm install
```

This will install all the dependencies required by the project.

## Getting Started

To start using this API, start your local database server, open terminal and
navigate to the project folder and run:

```bash
npm run start
```

If an error occur, check your database server or check if you have installed the
prerequisites correctly.

If there was no error, open Postman and create and send a new get request to:

```
http://localhost:3000/
```

## Response
```
{
  name:'name of province',
  cases:'Total Confirmed cases',
  recovered:'Recoveries',
  deaths:'Death',
  test: 'PCR tests'
}
```

## Routes

| S.No. | Route              | Method | Description                                   |
|-------|-----------------------------|-------------|---------------------------------|
| 1.    | /                  | GET    | Welcome to APIs                               |
| 2.    | /daily             | GET    | Summary of daily data                         |
| 3.    | /cdaily            | GET    | Cumulative daily data                         |
| 4.    | /province          | GET    | Summary of daily data of all provinces        |
| 5.    | /cprovince         | GET    | Cumulative data of every provinces            |




## Data Source
[This](http://www.mohcc.gov.zw/) is the source of data for the APIs. This data is officially provide by the Govt. of Zimbabwe.


