import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    task: "",
    completed: false,
    active: false,
  },
  reducers: {
    changeTask(state, action) {
      state.task = action.payload;
    },
    changeAllStatus(state) {
      state.completed = false;
      state.active = false;
    },
    changeCompletedStatus(state) {
      state.completed = !state.completed;
      state.active = false; // Set active to false when completed is clicked
    },
    changeActiveStatus(state) {
      state.active = !state.active;
      state.completed = false; // Set completed to false when active is clicked
    },
  },
});

export const {
  changeTask,
  changeCompletedStatus,
  changeActiveStatus,
  changeAllStatus,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
