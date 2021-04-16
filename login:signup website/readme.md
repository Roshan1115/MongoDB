# What is OSS ?
OSS is Online Shopping System thats actually redirects you to the famour sites available base on your needs and our recommendations. It is developed by me for the major project in Verzeo

## Prerequisites to run this site
Make sure you have the following softwares installed on your computer : 
* Node.js
* MongoDB

## How to run the website on localhost ?
* step-1 : Clone the repository.
* step-2 : Run the mongoDB server by running the following command on your command line tool in any directory you want. Make sure to NOT TO STOP the mongoDB server by quiting command line tool.

mongod

* step-3 : Open your command line tool/ terminal/ power shell and go inside the cloned folder/ directory.
* step-4 Run the following command in your command line tool. It will install all the packages used in this website.

npm i

* step-5 : After installing all the packages, start the website by etering the following command in the root directory of this website (same directory you ran "npm i")

npm start

* step-6 : Now you should see the confirmation of running the app.js file on a port (preferablly 3000) as well as a confirmation wheather the app.js file is able to connect to database or not in your command line tool as bellow

Listening on port : 3000
Connected to "VERZEO_DB_RoshanBishi"

* step-7 : If both the two line appread in the command line tool then you are ready to visit the website. Open the browser and type the following link

localhost:3000

* step-8 : The website should be appeared in your browser asking for log in details. Go to "create an account" and sign up.

* step-9 : If for any unfortunate the mongoDB server(mongod) would not work on your system then the log in/ sign up validation will not work. In this case you need to go to home page of the website manually. To do that type the following link on your browser search bar

localhost:3000/home.html

## Password Security
All the data you provide while signing up will be stored in your mogoDB server.
The password you provid are stored using bcrypt hashing which is one way encryptioin and you can not copy someone's credentials from the server and paste it inside the log in page. It will not wrok

## Contributor
Roshan Bishi    https://www.linkedin.com/in/roshanbishi1115/