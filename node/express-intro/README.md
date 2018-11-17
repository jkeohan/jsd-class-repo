# Intro to Express!

### Learning Objectives

- Go back over some node concepts!
- Practice with modules
- Describe what Express.js is and why we need it
- Introduce the concept of MVC
- Interact with HTTP verbs
- Identify the HTTP verbs we'll be working with for an API

## Node Recap! ( 15 min )

❗️ Reminder, [HERE](https://git.generalassemb.ly/wdi-nyc-dresselhaus/LECTURE_U02_D04_NODE_INTRO/blob/master/README.md) are the lecture notes. Make sure to go through them thoroughly!
* Node is a Javascript environment that runs outside the browser
* Node runs on Google's V8 engine (Huh? V8 engine compiles and executes Javascript, handles memory allocation)
* Node is *designed* to be event-driven and asynchronous
* Node Uses `npm`(node package manager) to manage dependencies

## Independent Practice with modules ( 20 min + 10 min review )
Follow the prompt [HERE](https://git.generalassemb.ly/wdi-nyc-dresselhaus/LECTURE_U02_D04_NODE_INTRO/blob/master/labs/carz/README.md)

## npm - "Node Package Manager" - ( 20 mins )
[HERE](https://git.generalassemb.ly/wdi-nyc-dresselhaus/LECTURE_U02_D04_NODE_INTRO/blob/master/README.md#npm---node-package-manager--20-mins)

## Explore Node packages - ( 10 min )

## ☛ What is Express.js? ( 20 min )

Express.js is a simple web framework for Node.js, a skeleton support to build applications in Node. It favors _configuration_ over _convention_, which means it's very un-opinionated about how you build your apps and what structure you use to set them up.

❗️ It's biggest highlights are:
- Extremely lightweight / minimalistic
- A thin layer on top of the Node.js platform that helps manage the server and routing
- Its robust API allows you to easily configure routes. These routes can receive requests from the frontend, connect to a database, and send back the data requested.

We will be following the MVC pattern to build our express apps.

### What is MVC?

MVC is a software design pattern for building DRY, modular applications and systems.

- The **model** represents the application data. It deals with the part of the app that needs to talk to the database.
- The **view** is what the user sees in the browser. It displays the data from the database in a way that makes sense for the site's design.
- The **controller** handles the requests made from the browser and connects them to the correct parts of the model. It handles input and converts it to actionable items for the model or view.

The MVC pattern is just one of many patterns that can be used to create an Express app. It's similar to the pattern that Rails uses.

### PREVIEW: An Express app's file structure

We're going to work up to having this full file structure over the next few lectures, but I just wanted to introduce it now, so that it's not a shock later on.

When we build larger apps, it's important to have something called "separation of concerns". This means that each file contains functionality specific to one particular feature of the app. Using a modular approach has a number of benefits:
- It's easier for developers to work together if each developer can work on one file instead of every developer working in the same file.
- It's easier to find the functionality you're looking for. If you know all the files that contain your routes live in the same spot, then if you're having a problem with your routes or want to add new routes, it's much easier to find what you're looking for.

This is the structure for a quote app. We'll be building this out in class together over the next week.

```bash
├── README.md
├── server.js
├── controllers
│   └── quote-controller.js
├── db
│   ├── config.js
│   ├── migrations
│       └── [stuff will go here]
│   └── seeds
│       ├── quotes.sql
│       └── seed.sql
├── models
│   └── quote.js
├── package.json
├── public
│   ├── index.html
│   ├── src
│   │   └── main.js
│   └── styles
│       ├── reset.css
│       └── style.css
├── routes
│   └── quote-routes.js
└── views
    └── quotes
        ├── quote-edit.ejs
        ├── quote-index.ejs
        ├── quote-new.ejs
        └── quote-single.ejs
```

## Let's start building an app! - ( 20 min )

(Don't do this along with me! just watch me for now and play catch-up after)

### Part 1: Setup

1. In this directory, make a new folder: `mkdir dresselhaus-quotes`. Then cd into it and `touch server.js`.
2. Create a `package.json` file using `npm init`.
3. Add Express as a dependency -- `npm install --save express`

Open up the directory in the editor and check out the `package.json` file. You should see this:

```json
"dependencies": {
  "express": "^4.15.3"
}
```

### Part 2: Setting up our app

In `server.js`:

```js

// import express from our dependencies
const express = require('express');
// initialize the app
const app = express();
// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;


// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

```

Now, we can go back in our terminal and run the app file by typing `node server.js`. Then, when we visit `localhost:3000` in the browser, we can see that our app is running! It's ok that we get an error, we haven't told it how to handle requeasts yet!(You can quit the server by pressing `ctrl+c`.)

### DETOUR: Start scripts!

Instead of typing `node server.js` every time you want to run the server, it's much more convenient to add a script to your `package.json`.  We'll be adding three scripts:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js",
    "debugger": "DEBUG=*:* npm run dev"
  }
```

- `test` was provided for us by `npm init`.
- `start` is the base way to start the app. We can run it with `npm start`.
- `dev` is the script we want to use in the development environment. Run with `npm run dev`
- `debugger` provides us with a lot of extra information if we're troubleshooting. Run with `npm run debugger`

In order to run the `dev` and `debugger` scripts, we need to install a new NPM package -- nodemon. To do this, run `npm install -g nodemon`. (The `-g` flag means "global" -- you can reference that package anywhere.)

### Part 3: Hello world!

Right now, we have an app running, but it really doesn't do much yet. Let's add a route that says "Hello World".

In `server.js`:

```js
// index route
app.get('/', (req, res) => {
    res.send('Hello world!');
});
```

This is another method on the app object. It describes a `GET` request to the root route of the app.

- It takes a string and a callback
- The callback takes two arguments, `req` and `res`.
    - `req` stands for the request object received from the browser
    - `res` stands for the response object that will be sent back to the browser.
- Within the callback, we access a method on the response object in order to send 'Hello world!'.

Now, when we run `npm run dev` and visit `localhost:3000`, we see 'Hello world!' rendered in the browser.

## 🚀 Lab! - ( 20 min )

Follow the steps above to create your own "Hello world!" mini-app!

### 🚨 DO NOT COPY AND PASTE! 🚨

The more times you type something out, the more likely you are to understand it. _This is proven science._

### Recap! - ( 5 min )

- Express is a web application framework for Node.
- It allows us to build RESTful APIs and web apps in JavaScript all the way down.
- We control what data is sent back at which endpoint using routes.
