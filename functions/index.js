import { ussdEntryController } from './src/controllers/entryContoller';
const functions = require("firebase-functions");

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.post("/ussd", ussdEntryController);

exports.ussd = functions.https.onRequest(app);
