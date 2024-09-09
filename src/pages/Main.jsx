import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BlogsList from '../components/BlogsList';
import AddBlog from '../components/AddBlog';
import swarm from '../pears/swarm';
// import core from '../pears/core';
import base from '../pears/base';

export default function Main() {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true; // First render, skip the effect

      // This return is to prevent running the effect on the first render
      return;
    }
    swarm.on('connection', (peer) => {
      console.log('🚀 ~ swarm.on ~ peer:', peer);
      base.store.replicate(peer);
      // peer.on('data', async (state) => {
      //   console.log('🚀 ~ peer.on ~ state:', state);
      //   await base.append(Buffer.from(state));
      // });
    });
  }, []);
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
