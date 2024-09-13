import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface collectionRef{
ref:FirebaseFirestoreTypes.CollectionReference;
}

export interface UserCredentials {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
    university?: UniversityState;
  }


export interface UniversityState{
    label:string;
     id?: string;
}
  
export interface refState{
  ref: FirebaseFirestoreTypes.DocumentReference;
  item:any;
}