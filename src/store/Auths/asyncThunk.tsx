// store/thunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { carProps, planProps, RegisterProps } from './types';
import { UserCredentials } from '../../types/types';
import { getFromFirebase, loginWithEmailPassword, logout, signupWithEmailPassword } from '../../globals/firebase/firebase';

interface allProps{
  
} 
//Register a new user
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData: UserCredentials, { rejectWithValue }) => {
    try {
      if(userData!==null){
        const user = await signupWithEmailPassword(userData);
        return user; }
        return userData;
    } catch (error: any) {
      return rejectWithValue(error.toString());
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: UserCredentials, { rejectWithValue }) => {
    try { 
      if(userData!==null){
      const user = await loginWithEmailPassword(userData);
      return user;}
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.toString());
    }
  }
);

//logout user
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      return true;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);




  