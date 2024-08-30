import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import core from '../pears/core';

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const readSteam = async () => {
      const blogArray = [];
      const d = core.createReadStream();
      for await (const a of d) {
        const dval = new TextDecoder('utf-8').decode(a);
        blogArray.push(JSON.parse(dval));
      }

      setBlogs(blogArray);
    };
    readSteam();
  }, []);
  return (
    <div>
      {blogs?.map((blog) => (
        <BlogCard key={blog.author.concat(blog.publishedAt)} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
