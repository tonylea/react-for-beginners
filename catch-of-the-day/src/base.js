import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD5Jp6feBgDNRgZxxhBYQff5JbAhl61CJ4',
  authDomain: 'catch-of-the-day-agl.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-agl.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
