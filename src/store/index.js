import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slice/blogs';
const store = configureStore({
  reducer: {
    blogs: blogSlice.reducer,
  },
});

export default store;
