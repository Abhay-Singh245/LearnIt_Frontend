import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  builder => {
    builder
      .addCase('getAdminStatsRequest', state => {
        state.loading = true;
      })
      .addCase('getAdminStatsSuccess', (state, action) => {
        state.loading = false;
        const payload = action.payload;
        state.stats = payload.stats;
        state.viewsCount = payload.viewsCount;
        state.subscriptionCount = payload.subscriptionCount;
        state.usersCount = payload.usersCount;
        state.subscriptionPercentage = payload.subscriptionPercentage;
        state.viewsPercentage = payload.viewsPercentage;
        state.usersPercentage = payload.usersPercentage;
        state.subscriptionProfit = payload.subscriptionProfit;
        state.viewsProfit = payload.viewsProfit;
        state.usersProfit = payload.usersProfit;
      })
      .addCase('getAdminStatsFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('getAllUsersRequest', state => {
        state.loading = true;
      })
      .addCase('getAllUsersSuccess', (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase('getAllUsersFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('updateUserRoleRequest', state => {
        state.loading = true;
      })
      .addCase('updateUserRoleSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('updateUserRoleFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('deleteUserRequest', state => {
        state.loading = true;
      })
      .addCase('deleteUserSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('deleteUserFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('createCourseRequest', state => {
        state.loading = true;
      })
      .addCase('createCourseSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('createCourseFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('deleteCourseRequest', state => {
        state.loading = true;
      })
      .addCase('deleteCourseSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('deleteCourseFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('addLectureRequest', state => {
        state.loading = true;
      })
      .addCase('addLectureSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('addLectureFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase('deleteLectureRequest', state => {
        state.loading = true;
      })
      .addCase('deleteLectureSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('deleteLectureFail', (state, action) => {
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
