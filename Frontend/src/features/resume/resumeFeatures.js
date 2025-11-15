
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeData: "",
  template: 1, // <-- add this line
};

export const resumeSlice = createSlice({
  name: "editResume",
  initialState,
  reducers: {
    addResumeData: (state, action) => {
      state.resumeData = action.payload;
    },
    setTemplate: (state, action) => { // <-- add this reducer
      state.template = action.payload;
    },
  },
});

export const { addResumeData, setTemplate } = resumeSlice.actions; // <-- include here
export default resumeSlice.reducer;
