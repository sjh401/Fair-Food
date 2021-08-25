# The Deep Fried Twinkie


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**The Deep Fried Twinkie** is a forum for sharing food at event locations; state fairs, ballparks, amusement parks, etc. Once registered and logged in, users will be able to create and share food items, ranking them and giving descriptions about the food. Users will also be able to comment on each others food posts to share feedback and praise.

<br>

## MVP


The **The Deep Fried Twinkie** MVP will have a RESTful backend with three mutable tables and one static Locations table, seeded into the database. The front-end will have nine separate screens, eight resting under a Container file where state will be stored. Users will be able to create an account and login while being authenticated throughout the app. If logged in, the user will be able to have CRUD on both the Food table and Comments table, only being able to update and delete their own content. There will be respomsive layouts set up for web, tablet, and mobile views with stying through flexbox and grid displays. The project will follow proper linting practices and be deployed through Surge and Heroku.

<br>

### Goals

- RESTful backend
- Users, Foods, Comments, Locations tables
- Models, Routes, Controllers for respective tables
- Container file to store state
- Authentication for Users
- Full CRUD on app
- Proper routes and switch
- Two media queries
- Deployement through Surge and Heroku

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React | Front-End Framework |
| React Router Dom | Routing on Front-End|
| Material-UI | Style Package |
| Rails | Back-End Framework |
| Axios  | API Interaction |
| CORS | Cross-Origin Resource Sharing |
| JWT | Token Based Authentication |
| Bcrypt | Password Security |
| Faker | Seeding Database |

<br>

### Client (Front End)

#### Wireframes

![p4-wireframce - Window (7)](https://user-images.githubusercontent.com/85095722/130714931-bbeeec44-1990-43e1-b49e-a77a975aa746.png)
- Desktop Landing

![p4-wireframce - Window (6)](https://user-images.githubusercontent.com/85095722/130710969-feab2046-f95c-4024-99cb-49701016bb6e.png)
- Desktop Login

![p4-wireframce - Window (4)](https://user-images.githubusercontent.com/85095722/130710938-3f6f9ff3-d91a-45d5-a800-5b4caeaa85ce.png)
- Desktop Locations

![p4-wireframce - Window](https://user-images.githubusercontent.com/85095722/130710883-9d0d9c40-7b40-44f5-a656-dc78d1ec1951.png)
- Desktop Location Details

![p4-wireframce - Window (1)](https://user-images.githubusercontent.com/85095722/130711067-c1510af0-a5a4-4a9c-b533-26df621746a2.png)
- Desktop Food Details & Comments

![p4-wireframce - Window (5)](https://user-images.githubusercontent.com/85095722/130711271-3d0b6145-f871-45b3-b639-d93d499dda71.png)
- Desktop Food Create

![p4-wireframce - Window (2)](https://user-images.githubusercontent.com/85095722/130711120-9ea648b3-0458-4ead-bfb2-073ff91b8b73.png)
- Desktop About

![p4-wireframce - Window (3)](https://user-images.githubusercontent.com/85095722/130711128-a0e84b40-6a1f-4108-a720-4e7f34ca921b.png)
- Desktop Contact

![p4-wireframce - Phone X@1 600000023841858x (5)](https://user-images.githubusercontent.com/85095722/130719358-b8baaffa-4e42-4bcc-b650-26db85512d55.png)
- Mobile Register

![p4-wireframce - Phone X@1 600000023841858x (2)](https://user-images.githubusercontent.com/85095722/130719263-a49497c8-20de-439f-b75a-f94e23af65fe.png)
- Mobile Food Detail

![p4-wireframce - Phone X@1 600000023841858x (3)](https://user-images.githubusercontent.com/85095722/130719462-d425545e-ade9-4258-8803-e92a085da7f1.png)
- Mobile Food Edit

![p4-wireframce - Phone X@1 600000023841858x (4)](https://user-images.githubusercontent.com/85095722/130719336-331091fe-18b9-4ecd-96f1-7ce57d769a60.png)
- Mobile Contact

![p4-wireframce - Tablet](https://user-images.githubusercontent.com/85095722/130711004-8ccbd336-802e-4359-b34d-2095594f03dc.png)
- Tablet Food Detail

#### Component Tree

![p4-component-tree (1)](https://user-images.githubusercontent.com/85095722/130712038-7f78eb7e-6734-4e3f-b85c-05bb59e51f19.png)


#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ containers/
      |__ Container.jsx
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx  
      |__ FoodCard.jsx
      |__ LocationCard.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ foods.js
      |__ comments.js

```

#### Time Estimates

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Repo/Branch Setup & Gem Installs | H | 2hrs | | |
| Schema & Seed File Creation & Testing (CT) | H | 2hrs | | |
| Models & Routes CT | H | 2hrs | | |
| Controllers CT | H | 3hrs | | |
| Models Construction CT | H | 1hr | | |
| Full CRUD Databse Testing | H | 2hrs | | |
| React Initialization | H | 1hr | | |
| Services Files | H | 3hrs | | |
| User Tests | H | 2hrs | | |
| Layout Components & Landing Screen | H | 2hrs | | |
| Container Setup | H | 3hrs | | |
| Login & Register CT | H | 2hrs | | |
| User Authentication CT | H | 2hrs | | |
| Locations & Details CT | H | 2hrs | | |
| Food Create & Edit CT | H | 2hrs | | |
| Food & Details CT | H | 2hrs | | |
| Comments CT | H | 2hrs | | |
| React App Cleanup | M | 2hrs | | |
| Deploying to Heroku | H | 2hrs | | |
| Netlify Deploy | H | 2hrs | | |
| Clickalbe Model | H | 2hrs | | |
| CSS Layout | H | 3hrs | | |
| CSS Screens | H | 3hrs | | |
| CSS Components | H | 3hrs | | |
| Media-Query Screens | H | 2hrs | | |
| Media-Query Layout | H | 2hrs | | |
| Clickalbe Walk-Through | H | 2hrs | | |
| Presentation Prep | H | 2hrs | | |
| Total | | 58hrs | | |


<br>

### Server (Back End)

#### ERD Model

![p4 (3)](https://user-images.githubusercontent.com/85095722/130718753-96fbbc98-b91d-4879-9a08-d4f7313069df.png)

<br>

***

## Post-MVP

- Admin role
- Dark Mode
- Subcommenting
- Map Locations
- User updating

***

## Code Showcase

Can't be proud of anything I haven't finished yet.

## Code Issues & Resolutions

Always have a problem coming up with names...
