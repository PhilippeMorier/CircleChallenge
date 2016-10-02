Circle Challenge
================

Start the app
--------------------
Open a console, type `npm start` and hit enter.

**OR**

Run each step manually:

1. Install all dependencies: `npm install`
2. Bundle the app: `npm run bundle:production`
3. Open `./dist/index.html` in a browser

Tests
-----
Be sure you already bundled the app before running the tests.

- Running the unit tests:
    1. Bundle the app: `npm run bundle:development`
    2. `npm test`

- Generate code coverage report:
    1. `npm run coverage`
    2. open `./coverage/report/index.html` in a browser
    
- Running the E2E tests:
    1. `npm run webdriver-manager update`
    2. `npm run webdriver-manager start`
    3. `npm run test:e2e`

- The app is tested with Node v6.2.2 on:
    - Mac OSX with
        - Safari v9.1.1
        - Firefox v49.0.1
        - Chrome v53.0.2785.143
    - Windows 10
        - Firefox v49.0.1
        - Chrome v53.0.2785.143

Developer dependencies
----------------------
In order to automate some tasks like bundling the app or running the tests some 3rd party code is used. Please see `package.json` for a detailed list of all the used 3rd party dependencies.