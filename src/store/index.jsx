// import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
// import counterReducer from "./reducer/reducer";

// const rootReducer = combineReducers({
//   users: userSlice,
//   counter: counterReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

const store = configureStore({
  reducer: { users: userSlice },
});

// console.log(userSlice);

export default store;
