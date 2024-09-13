import { AuthState } from "./types";

export const initialState: AuthState = {
    authData:{ response:null,loading:false, message: '', status: null },
    signupData:{ response:null,loading:false, message: '', status: null },
     profileData:{ response:null,loading:false, message: '', status: null },
     logoutData:{ response:null,loading:false, message: '', status: null },
  };