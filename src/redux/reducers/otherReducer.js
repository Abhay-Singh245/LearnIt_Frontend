import { createReducer } from '@reduxjs/toolkit';

export const otherReducer = createReducer(
  {},
  builder => {
    builder
      .addCase('contactRequest', state => {
        state.loading = true;
      })
      .addCase('contactSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('contactFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('courseRequestRequest', state => {
        state.loading = true;
      })
      .addCase('courseRequestSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('courseRequestFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('getTopCoursesRequest', (state,action) => {
          state.loading = true;      
      })
      .addCase('getTopCoursesRequestSuccess', (state, action) => {
        state.loading = false;
        state.topCourses = action.payload;
      })
      .addCase('getTopCoursesRequestFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('clearError', state => {
        state.error = null;
      })
      .addCase('clearMessage', state => {
        state.message = null;
      });
  }
);
