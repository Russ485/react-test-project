import React, { useContext, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostsIdPage from '../pages/PostsIdPage';
import Login from '../pages/Login';
import Protected from '../pages/Protected';
import { UserContext } from '../App';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Protected />}>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsIdPage />} />
      </Route>
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
