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

Expected Output:

```
{
	message: "Welcome!"
}
```


## Response
```
{
  name:'name_of_province',
  confirmedNational:'Total Confirmed cases',
  cured:'Recovered',
  death:'Death',
  total:'Total Cases'
}
```

## Routes

| S.No. | Route                     | Method | Description                                         |
|-------|---------------------------|--------|-----------------------------------------------------|
| 1.    | /                         | GET    | Welcome to APIs                                     |
| 2.    | /summary                  | GET    | Total data containing deaths and cases in Zimbabwe  |
| 3.    | /provinces                | GET    | Total data of all provinces                         |
| 4.    | /province/:provincename   | GET    | Get province details                                |




## Data Source
[This](http://www.mohcc.gov.zw/) is the source of data for the APIs. This data is officially provide by the Govt. of Zimbabwe.


