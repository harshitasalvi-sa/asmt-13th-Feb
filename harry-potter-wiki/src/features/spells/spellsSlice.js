import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSpellsAPI } from "./spellsAPI";

export const fetchSpells = createAsyncThunk(
  "spells/fetchSpells",
  async (_, { getState }) => {
    const state = getState();

    if (state.spells.data.length > 0) {
      return state.spells.data;
    }

    const data = await fetchSpellsAPI();
    return data;
  }
);

const spellsSlice = createSlice({
  name: "spells",
  initialState: {
    data: [],
    status: "idle", // statuse : idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpells.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSpells.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSpells.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default spellsSlice.reducer;
