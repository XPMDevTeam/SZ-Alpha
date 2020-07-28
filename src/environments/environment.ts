// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAj806iDBgCPlbOWlfCJIbk7x_nqtbBcUM',
    authDomain: 'savezone-test.firebaseapp.com',
    databaseURL: 'https://savezone-test.firebaseio.com',
    projectId: 'savezone-test',
    storageBucket: 'savezone-test.appspot.com',
    messagingSenderId: '726490579059',
    appId: '1:726490579059:web:af27d153a6820deb81ea06'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
