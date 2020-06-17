import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBY5MIY5vYg18f-qJzanp7mkGc-FQFWcmw",
  authDomain: "hacker-login.firebaseapp.com",
  databaseURL: "https://hacker-login.firebaseio.com",
  projectId: "hacker-login",
  storageBucket: "hacker-login.appspot.com",
  messagingSenderId: "331049651253",
  appId: "1:331049651253:web:3f1a9ea3992f908f83757c",
  measurementId: "G-W02MB9FEMZ",
});

render(<App />, document.getElementById("root"));
