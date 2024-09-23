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
      <div className="Blog--title">{blog.title}</div>
      <div className="Blog--details Blog--details__border">
        <div>
          <div className="author">{blog.author}</div>
          <div className="time">{blog.publishedAt}</div>
        </div>
        <div className="source">{blog.source.name}</div>
      </div>
      <img className="Blog--image__large" src={blog.urlToImage} />
      <div className="description">{blog.description}</div>
      <div className="content">{blog.content}</div>
    </div>
  );
};

export default Blog;
