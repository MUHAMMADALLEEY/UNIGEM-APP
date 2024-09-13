interface State {
    response: any;
    loading: boolean;
    message: string | null;
    status:boolean | null;
  }
export  interface DashboardState {
    profileData:State;
    editProfileData:State;
  }
  
export const initialState: DashboardState = {
    profileData:{ response:null,loading:false, message: '', status: null },
    editProfileData:{ response:null,loading:false, message: '', status: null}
  };
