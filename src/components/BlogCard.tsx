import React from 'react';
import { IBlog } from '../types/Blog';

type PropsType = {
  blog: IBlog;
};
export default function BlogCard({ blog }: PropsType) {
  return (
    <div className="Blog--card">
      <div className="info">
        <div className="Blog--title">{blog.title}</div>
        <div className='Blog--details'>
          <div className="author">{blog.author}</div>
          <div className="time">{blog.publishedAt}</div>
        </div>
        <div className="desc">{blog.description}</div>
      </div>
      <div className="image">
        <img
          src={blog.urlToImage}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
