import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK3rXugC0o60uLUf_nnhjEc-G-1maekhg",
  authDomain: "remedialserrum-a50c1.firebaseapp.com",
  projectId: "remedialserrum-a50c1",
  storageBucket: "remedialserrum-a50c1.appspot.com",
  messagingSenderId: "593703559394",
  appId: "1:593703559394:web:30b89ae259d1b69547febb",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
