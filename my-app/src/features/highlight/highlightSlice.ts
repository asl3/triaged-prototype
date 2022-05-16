import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface HighlightState {
  value: boolean;
  bgText: string;
}

const initialState: HighlightState = {
  value: false,
  bgText: ''
};

export const highlightSlice = createSlice({
  name: 'highlight',
  initialState,
  // https://stackoverflow.com/questions/68768408/react-redux-toolkit-type-is-not-assignable-to-type-casereducertype-payload
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    hoverOn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.bgText = "asdfasjflskdjsdfsdf";
    },
    hoverOff: (state) => {
      state.value = false;
      state.bgText = "";
    },
  }
});

export const { hoverOn, hoverOff } = highlightSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHighlight = (state: RootState) => state.highlight.value;

export default highlightSlice.reducer;
