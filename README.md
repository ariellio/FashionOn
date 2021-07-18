# FashionOn

View FashionOn[google.com]

# Background

FashionOn is a full stack web application with a flare for fashion based on Amazon. Users are able to log in, signup, or demo an account storing their information in the PostgreSQL database. On the home page, users are able to view available items and are able to click items to go to the items show page. Not only that but, users can search for products they're looking for. Hopefully the items they need are in stock! Also included is a reviews section where users can update, delete, create, and read reviews. It is important to note that all functionality except creating reviews are avaibale regardless of login status.

Creating this project required the use of assimilating a wide variety of technologies. For the backend, I used Ruby on Rails along with Active Record. Not only that, but I used PosgreSQL for storing data in the database along with Amazon AWS S3 for storing product images. For the frontend I used React Redux along with Node.js in order to create a dynamic single-page application.


# Technologies

* Ruby
* Rails
* React.js
* Redux.js
* Node.js
* SQL/PostgreSQL
* Webpack
* Amazon AWS S3


# Features 

## Items Index 
<img width="1790" alt="Screen Shot 2021-07-16 at 10 16 57 AM" src="https://user-images.githubusercontent.com/81823461/125962029-b8f1e972-fda2-46c0-9d12-a95c3c01b8c9.png">

  * All items displayed on the home page
  * Users can click items to go to Item Show page

## Items Show
<img width="1794" alt="Screen Shot 2021-07-16 at 10 25 26 AM" src="https://user-images.githubusercontent.com/81823461/125963152-a71af8a1-939b-4da9-9d2a-fb8e0dbfa7a6.png">
  * Users can view all information
  * Users can interact with item image, read about the product and create a comment in the secion below
  * Each image was created using Amazon AWS S3

## User Authentication

![](https://media.giphy.com/media/cnm2fKLzFaKlVF4AIi/giphy.gif)
  * Users can create an account which will store their information to the site
  * Errors will popup if you try to login with invalid credentials
  * Errors will popup if you attempt to signup with too short a password
  * Demo user is available 
  * Accessed through a dropdown on the homepage

## Search Functionality 

![](https://media.giphy.com/media/vxZZRIYDJxNs8oqzVs/giphy.gif)
  * Users can type in any text they'd like to search for
  * Search results will render any matching items related to the search term
  * Items are searched through an Ajax request.

## Reviews 

![](https://media.giphy.com/media/ACCOkf7EVknodL009c/giphy.gif)
  * Users can create a comment, edit their comment, or delete their comment 
  * Creating a comment requires the user to click a link which will bring them to the create comment form
  * The edit form maintains the state from the create comment and will update after the user finishes editing the form
  * The trash button will delete the post on click and keep the user on the same page with the post now deleted

