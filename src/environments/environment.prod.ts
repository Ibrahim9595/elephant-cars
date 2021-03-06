// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCpQQB08BSNpYNh0C4JYbD5GR_C4aiOHio",
    authDomain: "elephant-cars.firebaseapp.com",
    databaseURL: "https://elephant-cars.firebaseio.com",
    projectId: "elephant-cars",
    storageBucket: "elephant-cars.appspot.com",
    messagingSenderId: "789546977674"
  }
};