import { primary, alpha, secondary, beta } from "@/utils/colors";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Theme {
  primary: string;
  secondary: string;
  alpha: string;
  beta: string;
}

const initialTheme: Theme = {
  primary: primary,
  secondary: secondary,
  alpha: alpha,
  beta: beta,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
