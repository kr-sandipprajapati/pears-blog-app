import React from 'react';
import BlogCard from './BlogCard';
import { IBlogs } from '../types/Blog';

type PropsType = {
  blogs: IBlogs;
};
function BlogsList({ blogs }: PropsType) {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.author.concat(blog.publishedAt)} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
