
Groupomania, a group specializing in mass distribution.

General informations

        Groupomania management has promised measures to improve communication between colleagues, including a new digital project. It is about creating an internal social network, modern and fun, which will allow employees to get to know each other in a more informal setting.

Goals

    the presentation of the functionalities must be simple;
    creating an account should be simple and possible from a mobile phone;
    the profile must contain very little information for its completion to be rapid;
    deletion of the account must be possible;
    access to a forum where employees publish multimedia content must be present;
    access to a forum where employees publish texts must be present;
    users should be able to easily spot the latest employee participations;
    the Groupomania communications officer must be able to moderate interactions between the Groupomania communications officer must be able to display the latest contributions from salaried employees;

Prerequisites:

    Install NodeJs and MySql.
    create a mysql user account and enter your database connection informations in the "../Groupomania/backend/config/config.json" file
    Clone the project on your machine.
    
Technologies :

    Database: MySql.
    Backend: NodeJs / Express.
    Frontend: Vuejs.

Importing the database:

In "phpMyAdmin" Create a database named "socialnetwork". run the following query in sql: "CREATE DATABASE socialnetwork;"
Import the DB file "socialnetwork.sql", located in "../Groupomania/Database" folder .

Launch of the application:

    Go to the backend folder of the application:
        install the dependencies with the following command:

npm install
start the server with the following command:

    npm start 

Go to the frontend folder of the application:

    install the dependencies with the following command:

npm install
launch the frontendapplication with the following command:

        npm start

Vulnerabilities

     To verify that no security vulnerabilities related to our app's dependencies have been discovered, run the npm audit command on both the backend and frontend side.

     If the scan shows one or more vulnerabilities, run the npm audit --fix command which updates the dependencies with new security patches.


How the application should works:

    Create an account on the registration page by entering a Username in as well as an e-mail address and a password. Each of its parameters must meet validity conditions that appear below the fields when its conditions are not met.

    You be then logged in automatically and will be redirected to the home feed page.

    Once on the home feed page, you have access to all the postss already published by other users.

    You will be able to post, edit, and delete posts "that you created" if you want.

    You can also access and modify your profile, username, profile picture and a bio. and You can also delete your account.

    You will be able to log out of the application.