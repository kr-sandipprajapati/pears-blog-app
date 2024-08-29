import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BlogsList from '../components/BlogsList';
import blogs from '../tempblog.json';
import AddBlog from '../components/AddBlog';
import Pears from '../components/Pears';

export default function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<BlogsList blogs={blogs} />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="pears" element={<Pears />} />
      </Routes>
    </Router>
  );
}
