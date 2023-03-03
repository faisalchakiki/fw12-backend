<div align="center">
  <br>
  <h2><strong>Backend Cinephile App</strong></h1
  <br>
</div>


##  Description
Backend Program for Cinephile apps
- [Cinephile Web](https://github.com/faisalchakiki/fw12-frontend)
- [Cinephile Mobile](https://github.com/faisalchakiki/rn-cinephile)

## Table of Contents
- [Technologies](#technologies)
- [Run App](#run-app)
- [ENV Example](#env-example)
- [Main End Point](#main-end-point)


## Technologies
- [Node Js](https://nodejs.org/en/)
- [Express Js](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Postgree SQL](https://www.postgresql.org/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)


## Run App
-   Requirement:

    -   Install [Node.js](https://nodejs.org)
    -   Recommended to use [NPM](https://www.npmjs.com/)

-   Clone the repo.

    ```bash
    git clone https://github.com/faisalchakiki/fw12-backend.git
    ```

    ```bash
    cd fw12-backend
    ```

-   Install the dependencies.

    ```bash
    npm install
    ```

    ### Development
    Set up your ENV
    
     ```bash
    npm run dev
    ```
    
    Open Postman
    Run the development server and open [http://localhost:8888](http://localhost:8888)
   
   

## ENV Example
### Get your Cloudinary Account
CLOUD_NAME = 

API_KEY = 

API_SECRET_CLOUD = 

### [Create Google Cloud Console](https://console.cloud.google.com/)

CLIENT_ID=

CLIENT_SECRET=

REFRESH_TOKEN=

## Main End Point
|url|method|desc|
|---|------|----|
|/movies|GET|get all movies|
|/movies/nowShowing|GET|Retrieve the running movie data|
|/movies/upComing|GET|Retrieve data movie that will come|





