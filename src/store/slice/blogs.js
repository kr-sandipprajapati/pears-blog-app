import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
  },
  reducers: {
    addBlogs: (state, action) => {
      console.log('🚀 ~ action:', action.payload);
      state.blogs.push(action.payload);
    },
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice;
