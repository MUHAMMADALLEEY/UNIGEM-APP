import firestore from '@react-native-firebase/firestore';
import { collectionRef, refState, UserCredentials } from '../../types/types';
import auth from '@react-native-firebase/auth';


export const getFromFirebase = async (ref: any) => {
  try {
    const snapshot = await ref.get();
    // 
    if (snapshot.exists) {
 
      return snapshot._data;
    } else {
      throw new Error("Document does not exist");
    }
  } catch (error) {
    throw error;
  }
};

export const getItemsFromFirebase = async (ref:any) => {
  try {
    const snapshot = await ref.get();
    const items = snapshot.docs.map((doc:any) => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    throw error;
  }
};

export const addItemToFirebase = async (item: any, ref: any): Promise<boolean> => {
  try {
    await ref.set(item); 
    return true; 
  } catch (error) {
    console.error("Error adding item to Firebase: ", error);
    return false; 
  }
};

  export const signupWithEmailPassword = async (userData: UserCredentials) => {
   const {email, password} = userData;
   try {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    const user={
      uid:response.user.uid,
      date:new Date().toISOString(),
      emailVerified:response.user.emailVerified,
      ...userData
    } 
    if(response){
      const userRef = firestore().collection('users').doc(user.uid); // Correct reference creation
      const result = await addItemToFirebase(user, userRef); // Correctly pass the user data and reference
      if (result) {
        return user;
      }
      else {
        await response.user.delete();
        }
    }
    return null;
  } catch (error: any) {
    console.log("Signup error: ", error);
    throw new Error(error.code);
  } 
  };
  
  export const loginWithEmailPassword = async (userData: UserCredentials) => {
    const {email, password} = userData;
   console.log("recieved data",userData);
   try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    console.log("response: ", response);
    const res={
      email:response.user.email,
      uid:response.user.uid,
      name:response.user.displayName,
      emailVerified:response.user.emailVerified,
    }
    return res;
  } catch (error: any) {
    throw new Error(error.code);
  }
  };
  
  export const logout = async () => {
    await auth().signOut();
  };
  

  export const updateItemToFirebase = async (item: any, ref: any): Promise<boolean> => {
    try {
      await ref.update(item); 
      return true; 
    } catch (error) {
      console.error("Error adding item to Firebase: ", error);
      return false; 
    }
  };

