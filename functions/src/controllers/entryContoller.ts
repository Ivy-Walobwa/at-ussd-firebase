import { Response,Request } from 'express';
import { checkUSer, fetchUserDetails, addNewUser} from './dbController';
// fetchUserDetails,addNewUser
const ussdEntryController = (req: Request,res: Response)=>{
    const {
        phoneNumber,
        text,
    } = req.body;

    let response: string = '';

    checkUSer(phoneNumber).then(async (val)=>{
        if(val === false){
            if (text == '') {
                response = `CON Seems like you are a new user. Would you like to register as an official user?
                1. Yes
                2. No`;
            } else if ( text == '1') {
                response = `CON What is your name?`;
            } else if ( text == '2') {
                response = `END We are sad to see you leave.`;
            }else{
                await addNewUser(phoneNumber, text.substr(2));
                response = `END Your have succesfuly registered `;
            }
        }else{
            const userDetail = await fetchUserDetails(phoneNumber);
            if (text == '') {
                response = `CON What would you like to check
                1. My next name
                2. My phone number`;
            } else if ( text == '1') {
                response = `END Your name is ${userDetail.name}`;
            } else if ( text == '2') {
                response = `END Your number is ${userDetail.phoneNumber}`;
            }
        }
    }).then(()=>{
        res.send(response)
    })

}


export {ussdEntryController};