import { Response,Request } from 'express';
import { checkUSer, fetchUserDetails,addNewUser } from './dbController';

const ussdEntryController = (req: Request,res: Response)=>{
    const {
        phoneNumber,
        text,
    } = req.body;

    let responseText: string = '';

    checkUSer(phoneNumber).then((value)=>{
        if(value === true){
            // user exists
            userExistlogic(text, responseText , phoneNumber);
        }else{
            // user does not exist
            userDoesNotExistlogic(text,responseText ,phoneNumber);
        }
        
        res.set('Content-Type: text/plain');
        res.send(responseText );
    });

}

const userDoesNotExistlogic = (text: string, response: string,phoneNumber: string)=>{
    if (text == '') {
        response = `CON Seems like you are a new user. Would you like to register as an official user?
        1. Yes
        2. No`;
    } else if ( text == '1') {
        response = `CON What is your name?`;
        addNewUser(phoneNumber, response.substr(2)).then(()=>{
            response = `END We are sad to see you leave.`;
        });
    } else if ( text == '2') {
        response = `END We are sad to see you leave.`;
    }

}

const userExistlogic = (text: string, response: string, phoneNumber: string)=>{
    fetchUserDetails(phoneNumber).then((val)=>{
        if (text == '') {
            response = `CON What would you like to check
            1. My next name
            2. My phone number`;
        } else if ( text == '1') {
            response = `END Your name is on ${val.name}`;
        } else if ( text == '2') {
            response = `END Your number is ${val.phoneNumber}`;
        }
    })
}

export {ussdEntryController};