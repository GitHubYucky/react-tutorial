// src/features/data/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// データを非同期にフェッチする非同期アクション
export const fetchData = createAsyncThunk(
  'data/fetchData',  // アクションの名前
  async (url: string) => {
    const response = await fetch(url);  // APIからデータを取得
    if (!response.ok) throw new Error('Data fetch failed');
    return response.json();
  }
);

// 初期状態
const initialState = {
  data: null,
  loading: false,
  error: null as string |null,
};

// Redux slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

// データのリデューサーをエクスポート
export default dataSlice.reducer;
