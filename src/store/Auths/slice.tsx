// store/slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {loginUser, logoutUser, signupUser } from './asyncThunk';
import { showError, showSucess } from '../../globals/utils';
const authSlice = createSlice({
  name: 'authData',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.signupData.loading = true;
        state.signupData.message = null;
      })
      .addCase(signupUser.fulfilled, (state, action:any) => {
        if(action?.payload === null){
          state.signupData=initialState.signupData;
          return;
        }
        state.signupData.response = action.payload;
        state.signupData.loading = false;
        showSucess('Success','Successfully Created Account!');
        state.signupData.message ='Successfully Created Account!';
        state.signupData.status=true;
      })
      .addCase(signupUser.rejected, (state, action: any) => {
        showError('Failed', action.payload ?? 'Failed to sign up');
        state.signupData.message = action.payload ?? 'Failed to sign up';
        state.signupData.loading = false;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.authData.loading = true;
        state.authData.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action:any) => {
        if(action?.payload===null){
          state.authData=initialState.authData;
          return;
        }
        state.authData.response = action.payload;
        showSucess('Success','Successfully Logged in!');
        state.signupData.message ='Successfully Logged in!';
        state.authData.loading = false;
        state.authData.status=true;
      })
      .addCase(loginUser.rejected, (state, action:any) => {
        showError('Failed', action.payload?? 'Failed to log in');
        state.authData.message = action.payload ?? 'Failed to log in';
        state.authData.loading = false;
      })
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.logoutData.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state,action:any) => {
        if(action?.payload ===null){
          state.logoutData=initialState.logoutData;
          return;
        }
        state.authData = initialState.authData;
        state.logoutData.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.logoutData.message = action.payload ?? 'Failed to log out';
        state.logoutData.loading = false;
      })


  },
  
});

export const {reducer} = authSlice;
