import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BlogsList from '../components/BlogsList';
// import blogs from '../tempblog.json';
import AddBlog from '../components/AddBlog';

export default function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<BlogsList />} />
        <Route path="add-blog" element={<AddBlog />} />
      </Routes>
    </Router>
  );
}
