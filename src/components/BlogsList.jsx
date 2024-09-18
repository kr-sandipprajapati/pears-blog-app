import React, { useEffect, useState, useRef } from 'react';
import BlogCard from './BlogCard';
import { mainBase } from '../pears/base';

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const isMounted = useRef(false);

  const readView = async () => {
    const { view } = mainBase;

    for (let i = blogs.length; i < view.length; i++) {
      const data = await view.get(i);
      const newData = new TextDecoder('utf-8').decode(data);
      setBlogs((prevBlogs) => [...prevBlogs, JSON.parse(newData)]);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true; // First render, skip the effect

      // This return is to prevent running the effect on the first render
      return;
    }

    readView();

    mainBase.view.on('append', () => {
      setIsUpdate(true);
    });
  }, []);

  useEffect(() => {
    if (isUpdate) {
      readView();
      setIsUpdate(false);
    }
  }, [isUpdate]);
  return (
    <div>
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
