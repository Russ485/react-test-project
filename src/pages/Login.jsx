import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    if (user.loggedIn) return;
    setUser({ loggedIn: true });
    navigate('/posts');

    localStorage.setItem('auth', '{ loggedIn: true }');
  };
  return (
    <div>
      <h1>Page to login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Type login" />
        <MyInput type="password" placeholder="Type password" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MyButton>Log in</MyButton>
          <div style={{ marginLeft: '10px' }}>Only press 'Log in' button</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
