import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "siam" },
  { id: "1", name: "abdullah" },
  { id: "2", name: "yooo" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
