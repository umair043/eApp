import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0eU7RawY4RUiQi9ReBMXHCY9FrVZcHyE",
  authDomain: "database-828a9.firebaseapp.com",
  projectId: "database-828a9",
  storageBucket: "database-828a9.appspot.com",
  messagingSenderId: "1094104055871",
  appId: "1:1094104055871:web:ae1dd70e46237bc565788a",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
