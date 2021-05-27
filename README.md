# RESTy

Author: Jessi Velazquez

Deployed Link: [https://agitated-knuth-995abc.netlify.app/](https://agitated-knuth-995abc.netlify.app/)

PR from Today's Lab: [https://github.com/JessiVelazquez/RESTy/pull/9](https://github.com/JessiVelazquez/RESTy/pull/9)

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