// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increment: (state, action) => {
      state += +action.payload;
    },
    decrement: (state) => {
      state -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = calculatorSlice.actions;

export default calculatorSlice.reducer;
