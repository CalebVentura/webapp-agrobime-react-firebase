// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import * as dbf from 'firebase/database'

/** AGROBIME V1 */
const firebaseConfig = {
  apiKey: "AIzaSyAmrboSjyDCN8_KVTNFgYn_LQ0OeNqjtkc",
  authDomain: "agrobimedatos.firebaseapp.com",
  databaseURL: "https://agrobimedatos-default-rtdb.firebaseio.com",
  projectId: "agrobimedatos",
  storageBucket: "agrobimedatos.appspot.com",
  messagingSenderId: "376110261171",
  appId: "1:376110261171:web:80d3e641ddc3e36b8de1c6"
};

/** AGROBIME V2 */
// const firebaseConfig = {
//   apiKey: "AIzaSyD3EvDMk0C_-wxpMCTxAduNxQ7uOoGQTtE",
//   authDomain: "agrobimev2-983d5.firebaseapp.com",
//   projectId: "agrobimev2-983d5",
//   storageBucket: "agrobimev2-983d5.appspot.com",
//   messagingSenderId: "1083469386682",
//   appId: "1:1083469386682:web:1b4715b758e7995fea0383"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = dbf