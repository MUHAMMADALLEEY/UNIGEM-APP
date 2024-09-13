// store/thunks.js
import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { addItemToFirebase, getFromFirebase, updateItemToFirebase } from '../../globals/firebase/firebase';


// get profile
export const getProfile = createAsyncThunk(
  'dashboard/getProfile',//same name of function
  async (ref:any, { rejectWithValue }) => {
    try {
      if(ref!==null) {
    const response=  await getFromFirebase(ref);
      return response; 
    }
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
//editProfile
export const editProfile = createAsyncThunk(
  'dashboard/editProfile',
  async ({ref,data}:any, { rejectWithValue }) => {
    try {
      // console.log("refdataaa",ref,data);
      if(ref!==null) {
    const response=  await updateItemToFirebase(data,ref);
      return response; 
    }
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

