import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../action/index";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // clearAllUsers() {
    //   return [];
    // },
  },
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.clearAllUsers, () => {
  //     return [];
  //   });
  // },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});
console.log(userSlice.actions);
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
