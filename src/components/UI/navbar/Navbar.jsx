import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({ loggedIn: false });
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <MyButton style={{ backgroundColor: 'white' }} onClick={logout}>
        Log out
      </MyButton>
      <div className="navbar__items">
        <Link to={'/about'}>About </Link>
        <Link to={'/posts'}> Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
