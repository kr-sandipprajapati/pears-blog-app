/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
export default function BlogCard({ blog }) {
  return (
    <Link to={'/blogs/'.concat(blog.index.toString())} className="Blog--card">
      <div className="Blog--info">
        <div className="Blog--title">{blog.title}</div>
        <div className="Blog--details">
          <div >{blog.author}</div>
          <div >{blog.publishedAt}</div>
        </div>
        <div >{blog.description}</div>
      </div>
      <div >
        <img src={blog.urlToImage} width={100} height={100} />
      </div>
    </Link>
  );
}
