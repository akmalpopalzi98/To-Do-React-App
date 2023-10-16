import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeTask,
  changeActiveStatus,
  changeCompletedStatus,
  changeAllStatus,
} from "./slices/formSlice";
import {
  taskReducer,
  addTask,
  removeTask,
  setStatus,
} from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    tasks: taskReducer,
  },
});

export {
  changeTask,
  addTask,
  removeTask,
  store,
  setStatus,
  changeActiveStatus,
  changeCompletedStatus,
  changeAllStatus,
};
