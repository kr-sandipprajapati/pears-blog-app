/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
export default function BlogCard({ blog }) {
  return (
    <Link to={'/blogs/'.concat(blog.index.toString())} className="Blog--card">
      <div className="Blog--info">
        <div dangerouslySetInnerHTML={{ __html: blog.title }} />
        <div>{blog.timestamp}</div>
      </div>
    </Link>
  );
}
