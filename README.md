# RESTy

Author: Jessi Velazquez

Deployed Link: [https://resty-by-jessi.herokuapp.com/](https://resty-by-jessi.herokuapp.com/)

PR from Today's Lab: [https://github.com/JessiVelazquez/RESTy/pull/19](https://github.com/JessiVelazquez/RESTy/pull/19)

# Overview

**1.0.0**

PR from build 1.0.0: [https://github.com/JessiVelazquez/RESTy/pull/2](https://github.com/JessiVelazquez/RESTy/pull/2)

This is a basic application built in React.js that will ultimately enable users to hit an http route with a GET, POST, PUT, or DELETE method request. Once completed, this will be a Postman/Swagger clone with similar functionality. For now, all we are doing is taking the user's input for URL and method request, saving those as state, and then displaying those back to the user below the form input.

This is displayed in real time without a page refresh because we are utilizing state management in React.js.

**1.1.0**

PR from build 1.1.0: PR from Today's Lab: [https://github.com/JessiVelazquez/RESTy/pull/5](https://github.com/JessiVelazquez/RESTy/pull/5)

This release adds the functionality of actually hitting an API route. We have added a results section below the input form where you will see the results of your API call displayed as JSON data.

**1.2.0**

PR from build 1.2.0: PR from Today's Lab: [https://github.com/JessiVelazquez/RESTy/pull/9](https://github.com/JessiVelazquez/RESTy/pull/9)

In this release, we have added a history panel where you can see your past API calls, click on them, and run them again. We also keep the results section hidden until results are available. The history panel uses local storage to perform it's duties.

**1.3.0**

PR from build 1.3.0: PR from Today's Lab: [https://github.com/JessiVelazquez/RESTy/pull/14](https://github.com/JessiVelazquez/RESTy/pull/14)

In this release, we have built out a seperate history page, which shows the user's search history, and includes buttons next to each search history item that when clicked will populate the form back on the home page, so that route can be run again. We have also built out a seperate help page with instructions on how to use the application. We have also moved deployment over to Heroku due to Netlify being mean to us.

**1.4.0**

PR from build 1.4.0: [https://github.com/JessiVelazquez/RESTy/pull/19](https://github.com/JessiVelazquez/RESTy/pull/19)

With this build, the results are now rendering right on the history page after a user clicks on one of the re-run routes on the history page. We have also added a bit of CSS/SCSS styling to the application.