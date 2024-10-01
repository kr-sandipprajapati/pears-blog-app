import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Blog = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.index === Number(blogId)),
  );
  return (
    <div className="Blog--container">
      <div dangerouslySetInnerHTML={{ __html: blog.title }} ></div>
      <div className="Blog--details">
        <div>{blog.timestamp}</div>
      </div>
      <div className="Blog--content" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default Blog;
