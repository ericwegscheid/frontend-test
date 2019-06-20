# Superformula Front-end Developer Coding Test

This project leverages Yelp's Fusion API to search for restaurants in the Las Vegas area by the top 10 most popular restaurant categories, price, and open status, as well as displays restaurant details and reviews.

## Installing / Getting started

### Requirements

* Yelp API Key
* node 11+
* npm 6+

### Attain Yelp API Key

To get this project up and running you must have an API Key. An API Key can be attained by [creating an app](https://www.yelp.com/developers/v3/manage_app) at [Yelp's developer website](https://www.yelp.com/developers/documentation/v3). You will be prompted to register an account or login to an existing account. Once you are logged in you should be able to reteive your API Key on the '[Manage App](https://www.yelp.com/developers/v3/manage_app)' page.


### Clone Repository and Install Dependencies

Paste the command below in your terminal. It will clone the repository and install its dependencies.

```shell
git clone https://github.com/ericwegscheid/frontend-test && cd frontend-test && npm i
```

### Build and Run Application

> PRO TIP: please kill any process that may already be running on port 9000 prior to running.

```shell
npm run dev
```

Upon running for the first time you will be prompted to input your API Key in the terminal. Simply paste you API Key in the prompt and press enter.

Alternatively, you may create a `.token` file in the root directory of the project with only your API Key in it prior to running.

```shell
echo 'YOUR_API_KEY' >> .token && npm run dev
```

After running the command above your default web browser should automatically open at `http://localhost:9000/`.

You're all set!

### For Production

Create dist folder of bundled project in the project's root directory, which can used in a production environment.

```shell
npm run build
```

## Developer's notes

...


