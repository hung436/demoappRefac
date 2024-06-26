import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    fetchAboutDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAboutDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAboutDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAboutDataStart,
  fetchAboutDataSuccess,
  fetchAboutDataFailure,
} = aboutSlice.actions;

export default aboutSlice.reducer;
