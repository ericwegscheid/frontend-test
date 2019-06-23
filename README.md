# Superformula Front-end Developer Coding Test

This project leverages Yelp's Fusion API to search for restaurants in the Las Vegas area by their top 10 most popular restaurant categories, price, and open status, as well as displays restaurant details and reviews.

## Getting started

### Requirements

* Yelp API Key
* node 11+
* npm 6+

### Attaining Yelp API Key

To get this project up and running you must have an API Key, which can be attained by [creating an app](https://www.yelp.com/developers/v3/manage_app) at [Yelp's developer website](https://www.yelp.com/developers/documentation/v3). You will be prompted to register an account or login to an existing account. Once you are logged in, you should be able to retrieve your API Key on the '[Manage App](https://www.yelp.com/developers/v3/manage_app)' page.


### Clone Repository and Install Dependencies

Paste the command below in your terminal. It will clone the repository and install its dependencies.

```shell
git clone https://github.com/ericwegscheid/frontend-test && cd frontend-test && npm i
```

### Build and Run Application

> PRO TIP! please kill any process that may already be running on port 9000 prior to running.

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

## Run Unit Tests

This project uses [Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/) for running unit tests. To run the existing tests simply input the following command in your terminal at the root directory of the project.

```shell
npm run test
```

Often it is helpful to be able to debug your tests as you are developing, which can be done quite easily using [Chrome's DevTools](https://developers.google.com/web/tools/chrome-devtools/).Add a `debugger` statement wherever you whish to begin debugging, in either a componet.test.jsx or component.jsx file, then run the following command.

```shell
npm run test:debug
```

After running this command, open Chrome, enter `chrome://inspect` in the address bar, then you should see your application running under 'Remote Targets.' Click 'inspect', this will open your code in the Chrome's debugger.

> NOTE: It will NOT stop on a break point if you DO NOT add a `debugger` statement in your code.

It is also quite useful to always have your test runner watch for code changes. Run the command below to re-run tests any time you save a code change.

```shell
npm run test:watch
```

Each unit test uses snapshots to ensure the components DOM structure is correct. In the development process it may be necessary to make updates to the DOM structure of certain components, so it will be necessary to update these snapshots. To do this, ensure your component is rendering as expected then run the following command.

```shell
npm run test:update
```

## For Production

To create a 'dist' folder of the bundled project run the command below. This will create a new folder in the project's root directory, which can used in a production environment.

```shell
npm run build
```

## Developer's notes

_Please stay tuned, there is more to come!_

* Implement Restaurant Details Page
* Implementing Unit Tests (in the real world I'd strive to be as TTD as possible, but for the sake of expediting the completion of this assessment I've opted to hammer out a good portion of the front-end first)
* Update UI to support mobile
* Implement Component Stories With [Storybook](https://storybook.js.org)
* Polish UI With Subtle Animations
* Update App To Use [Graph QL](https://www.yelp.com/developers/graphql/guides/intro) (Initially opted to use Yelp's Fusion API)

