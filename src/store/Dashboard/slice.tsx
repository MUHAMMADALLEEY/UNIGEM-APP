// store/slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { editProfile, getProfile } from './asynThunk';
import { initialState } from './initialState';
import { showError, showSucess } from '../../globals/utils';
const dataSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    //get profile data
    .addCase(getProfile.pending, (state) => {
      state.profileData.loading = true;
      state.profileData.message = null;
    })
    .addCase(getProfile.fulfilled, (state, action:any) => {
      if(action?.payload===null){
        state.profileData=initialState.profileData;
        return;
      }
      state.profileData.response = action.payload;
      state.profileData.message ='profile loaded';
      state.profileData.loading = false;
    })
    .addCase(getProfile.rejected, (state, action:any) => {
      state.profileData.message = action.payload ?? 'Failed to get profile';
      state.profileData.loading = false;
    })

    //editProfile
    .addCase(editProfile.pending, (state) => {
      state.editProfileData.loading = true;
      state.editProfileData.message = null;
    })
    .addCase(editProfile.fulfilled, (state, action:any) => {
      if(action?.payload===null){
        state.editProfileData=initialState.profileData;
        return;
      }
      state.editProfileData.response = action.payload;
      state.editProfileData.message ='Profile Updated Successfully';
      state.editProfileData.loading = false;
      showSucess('Success','Profile Updated Successfully!');
      state.editProfileData.status = true;

    })
    .addCase(editProfile.rejected, (state, action:any) => {
      state.editProfileData.message = action.payload ?? 'Failed to Update Profile';
      state.editProfileData.loading = false;
    })


  },
  
});

export const {reducer} = dataSlice;
