// import { ussdEntryController } from './controllers/entryContoller';
import { Response,Request } from 'express';

const functions = require("firebase-functions");

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/ussd", (req: Request,res: Response)=>{
    const {
        phoneNumber,
        text,
    } = req.body;

    let responseText: string = '';

    if (text == '') {
        responseText= `CON Seems like you are a new user. Would you like to register as an official user?
        1. Yes
        2. No`;
    } else if ( text == '1') {
        responseText = `END ${phoneNumber}.`;
    } else if ( text == '2') {
        responseText = `END ${text}`;
    }
    res.set('Content-Type: text/plain');
    res.send(responseText);
    

});

// app.post("/ussd", ussdEntryController);

exports.ussd = functions.https.onRequest(app);
