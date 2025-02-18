import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRepos = createAsyncThunk(
  'repos/fetchRepos',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`
      );
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const repoSlice = createSlice({
  name: 'repos',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default repoSlice.reducer;