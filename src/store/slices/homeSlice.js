import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fetchHomeDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHomeDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchHomeDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchHomeDataStart,
  fetchHomeDataSuccess,
  fetchHomeDataFailure,
} = homeSlice.actions;

export default homeSlice.reducer;
