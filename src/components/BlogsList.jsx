import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import core from '../pears/core';

function BlogsList({ blogs }) {
  const [data, setData] = useState();
  useEffect(() => {
    const readSteam = async () => {
      const d = core.createReadStream();
      console.log('🚀 ~ useEffect ~ d:', d);
      for await (const a of d) {
        console.log('data:', a);
        // console.log('data:', JSON.parse(a));
      }
    };
    readSteam();
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.author.concat(blog.publishedAt)} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
