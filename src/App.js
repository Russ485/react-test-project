import React, { createContext, useEffect, useState } from 'react';
import './Index.css';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ loggedIn: true });
    }

    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
