
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBjvHFN-qvJTxeAU8PBw16zS61pPkktLF4",
  authDomain: "upload-file-firbase-storage.firebaseapp.com",
  projectId: "upload-file-firbase-storage",
  storageBucket: "upload-file-firbase-storage.appspot.com",
  messagingSenderId: "849494809345",
  appId: "1:849494809345:web:d976671ede46e4b0b1d900"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);