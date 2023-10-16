import { createSlice, nanoid } from "@reduxjs/toolkit";

interface TaskType {
  description: string;
  id: string;
  status: string;
}

const taskList: TaskType[] = [];

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList,
  },
  reducers: {
    addTask(state, action) {
      const updatedList = {
        description: action.payload.description,
        id: nanoid(),
        status: "active",
      };
      state.taskList.push(updatedList);
    },
    removeTask(state, action) {
      const updatedList = state.taskList.filter((task) => {
        return task.id !== action.payload;
      });
      state.taskList = updatedList;
    },
    setStatus(state, action) {
      const taskId = action.payload;
      const task = state.taskList.find((task) => task.id === taskId);
      if (task) {
        task.status = task.status === "active" ? "complete" : "active";
      }
    },
  },
});

export const { addTask, removeTask, setStatus } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
