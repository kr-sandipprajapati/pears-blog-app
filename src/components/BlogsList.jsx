import React, { useEffect, useState, useRef } from 'react';
import BlogCard from './BlogCard';
import { mainBase } from '../pears/base';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions } from '../store/slice/blogs';

function BlogsList() {
  const [isUpdate, setIsUpdate] = useState(false);
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log("🚀 ~ BlogsList ~ blogs:", blogs)

  const readView = async () => {
    const { view } = mainBase;

    for (let i = blogs.length; i < view.length; i++) {
      console.log('🚀 ~ readView ~ i:', i);
      const data = await view.get(i);
      const newData = new TextDecoder('utf-8').decode(data);
      dispatch(blogActions.addBlogs({ ...JSON.parse(newData), index: i }));
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
      {blogs?.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
