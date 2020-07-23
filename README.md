# Jot-It

The Jot-It app is a personal online journal where users can record their thoughts and moods daily or more than once a day. J-Blog is an app designed for mental-health through self-reflection and personal mood tracking, with this app users will not only be able to blog but also they will be able to see past entries with mood descriptions. 

https://jot-it.netlify.app

## Overview

### Goals

create a fully functioning journal app with working authetication and CRUD functionality. 

### Expected Challenges

- implimenting authentication

- toggling the mood icons to act as a data entry when clicked on. 

- Post-MVP features such as being able to search posts by dates and creating a personalized mood chart for each user. 

## MVP

### Wireframes 

https://wireframe.cc/2Es2ke

### ERD

https://drive.google.com/file/d/1EKUiLm4z2ojKskZYLVGzpdNh-e6-vu7g/view?usp=sharing

### MVP/Features

-Create account through sign-up page

-log-in authentication 

-ability to create new jounral entries with marked time and date posted. 

-each jounral entry will have a mood icon chosen by the user

-ability to view all past jounral entries

-ability to individually view journal entries, edit and delete them. 

### Component Heiarchy

https://ibb.co/MRYpWQG

 Component  | Type | State | Description | 
| ------------- | ------------- |------------- |------------- |
| Main  |  Class | Y | Will hold state as well as all other routes to different pages |
| Homepage  |  Functional  | N | Will contain Nav and header component as well as post samples components |
| Log in  | Functional | N | will contain login content for user and utilize authentication and pass token to local storage |
| Sign up  | Functional | N | Will create an account and also utilize authentication |
|  Journal entries list | Functional  | N | will contain list of journal entries components with routes to individual journal entry component|
| Create Journal entry  | Functional  | N | will utilize Create, Update and Delete aspects of CRUD |
| individual Journal entry  | Functional  | N | Will Utilize Read aspect of CRUD |


### Dependancies

 - React-router-dom(front-end) 
 
 - Axios (front-end API call)
 
 - Corrs (back-end)
 
 - Bcrypt (Authentication)
 
 - JWT (Authentication) 
 
 ### Post-MVP 
 
 - add a page that allows users to view a chart displaying their moods over time. 
 
 - filter allowing users to search post through time.
 
 - filter allowing users to find a post based on keywords.
 
 - a calender view for users to see thier journal entries. 
 
 ## Timeframes
 

| Component  | Estimated time | 
| ------------- | ------------- |
| Back-end development  | 6-8hr  |
| Authenication  |  5hr  |
| homepage/App  | 3hr |
| login functionality  | 4hr  |
|  sign-up & functionality | 4hr  |
| create journal entry  | 5-6hr  |
| Journal entries page  | 4hr  |
| individual post page  | 5hr  |
| CSS  | 5-6hr  |
| Total  | 45hr  |



