import React, { useEffect, useState, useRef } from 'react';
import BlogCard from './BlogCard';
import core from '../pears/core';

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true; // First render, skip the effect

      // This return is to prevent running the effect on the first render
      return;
    }

    const d = core.createReadStream({
      live: true,
    });

    d.on('data', (state) => {
      const dval = new TextDecoder('utf-8').decode(state);
      setBlogs((prevState) => [...prevState, JSON.parse(dval)]);
    });

    Pear.teardown(() => {
      d.destroy(); // Close the stream
      core.close(); // Close the feed
    });
  }, []);
  return (
    <div>
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
