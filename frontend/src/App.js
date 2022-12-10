import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import { Posts } from './page/BlogPosts';
import { Carts } from './page/Cart';
import { AddPost } from './page/PostAdd';
import { Login } from './page/Login';
import  Post  from './page/Post'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/add_post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
