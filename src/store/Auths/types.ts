
export interface UserProps{
    email: string;
    password: string;
    type?: string;
}

export interface RegisterProps{
    name?: string;
    email: string;
    password: string;
    type?: string;
}
export interface carProps{
  carMake: string;
  carModel: string;
  year:number;
  carPic?: File | null;
  color?:string;
}

export interface planProps{
  plan: string;
}
export interface picProps{
name:string;
type:string;
uri:string;
}
interface State {
    response: any;
    loading: boolean;
    message: string | null;
    status:boolean | null;
  }
export  interface AuthState {
    authData: State;
    profileData:State;
    signupData: State;
    logoutData: State;
  }
  