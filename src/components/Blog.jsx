import React from 'react';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Blog = () => {
  const { blogId } = useParams();
  return <div>{blogId}</div>;
};

export default Blog;
