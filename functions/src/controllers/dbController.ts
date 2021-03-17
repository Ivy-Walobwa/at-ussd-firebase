import { db } from '../config/firebase';

const userRef = db.collection('users');

const checkUSer = async (phoneNumber: string):Promise<boolean>=>{
    let userAvailable: boolean;
    const doc = await userRef.doc(phoneNumber).get();

    if(!doc.exists){
        userAvailable = false;
    }else{
        userAvailable = true;
    }
   return userAvailable; 
}

const addNewUser = async (phoneNumber:string, name:string)=>{
    const data: EntryTypeInterface = {
        phoneNumber,
        name,
    }
    await userRef.doc(phoneNumber).set(data);
}

const fetchUserDetails = async (phoneNumber: string)=>{
    const doc = await userRef.doc(phoneNumber).get();
    const data: EntryTypeInterface = {...doc.data()};
    return data;
}

const updateUserName = async (phoneNumber:string, name:string)=>{
    await userRef.doc(phoneNumber).update({name})
}

const deleteUser = async(phoneNumber:string)=>{
    await userRef.doc(phoneNumber).delete();
}

export { checkUSer, addNewUser, fetchUserDetails, updateUserName, deleteUser}