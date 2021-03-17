import { Response,Request } from 'express';
import { checkUSer, fetchUserDetails, addNewUser,  updateUserName, deleteUser} from './dbController';



const ussdEntryController = (req: Request,res: Response)=>{
  
    const {
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    checkUSer(phoneNumber).then(async (val)=>{
        if(val === false){
            // new user
            if (text == '') {
                response = `CON Seems like you are a new user. Would you like to register as an official user?
                1. Yes
                2. No`;
            } else if (text == '1') {
                response = `CON What is your name?`;
            } else if ( text == '2') {
                response = `END We are sad to see you leave.`;
            }else if(text.substr(0,2) == '1*'){
                await addNewUser(phoneNumber, text.substr(2));
                response = `END You have succesfuly registered `;
            }else{
                response = `END Invalid input!`;
            }
        }else{
            // user exists
            const userDetail = await fetchUserDetails(phoneNumber);
            if (text == '') {
                response = `CON What would you like to do
                1.  Check my name
                2.  Check my phone number
                3.  Change my name
                4.  Delete my account`;
            } else if ( text == '1') {
                response = `END Your name is ${userDetail.name}`;
            } else if ( text == '2') {
                response = `END Your number is ${userDetail.phoneNumber}`;
            }else if ( text == '3') {
                response = `CON New name`;
            }else if(text.substr(0,2) == '3*'){
                await updateUserName(phoneNumber, text.substr(2));
                response = `END You have succesfuly updated your name `;
            }else if ( text == '4') {
                response = `CON Are you sure you want to delete account? This is irreversible
                1. No
                2. Yes`;
            }else if ( text == '4*1') {
                response = `END Glad you chose to stay`;
            }else if ( text == '4*2') {
                await deleteUser(phoneNumber);
                response = `END Account deleted.`;
            }else{
                response = `END Invalid input!`;
            }
        }
    }).then(()=>{
        res.send(response)
    })

}


export {ussdEntryController};