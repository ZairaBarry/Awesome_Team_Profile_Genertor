# Awesome_Team_Profile

## Description

This project is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Installation

In order to use the app you have to install Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.

## Usage

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


![link to video]https://drive.google.com/file/d/1FIxj4f2bHZB3yM97Mtq7nCLE7eGijShE/view
![screenshot of the app](/assets/Profile_screenshot.jpg)
## Tests

In order to run the application run the command node index.js

## License

This application is licensed under MIT
