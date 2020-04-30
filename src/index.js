import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDjqer2K83Q_Reez0O2MtgjopvAayetseo",
  authDomain: "hackernews-fae50.firebaseapp.com",
  databaseURL: "https://hackernews-fae50.firebaseio.com",
  projectId: "hackernews-fae50",
  storageBucket: "hackernews-fae50.appspot.com",
  messagingSenderId: "518016962615",
  appId: "1:518016962615:web:4d5ca99181f17d96576fb2",
  measurementId: "G-J2E9QEP23V",
});

render(<App />, document.getElementById("root"));

serviceWorker.register();
