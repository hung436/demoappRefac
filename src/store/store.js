import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "./slices/homeSlice";
import aboutReducer from "./slices/aboutSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
