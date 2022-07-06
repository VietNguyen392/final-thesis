import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField
} from '@fluentui/react';
import toast from 'react-hot-toast';
import { Loading } from '../common';
import { login, reset } from '../../redux/feature/auth/authSlice';
const Login = () => {
  const initState = {
    email: '',
    password: '',
  };
  const [userLogin, setUserLogin] = useState(initState);
  const { email, password } = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, msg } = useSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (isError) {
     toast.error(msg)
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, msg, navigate, dispatch]);

  const onChange = (e) => {
   setUserLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="login__page ml-9">
      <div className="p-5 card card-body rounded align-middle shadow ">
        <div className="text-center">
          <h1 className="h1 text-gray-900 mb-4">Login</h1>
        </div>
        <form className="user " onSubmit={onSubmit}>
          <div className="form-group">
            <TextField
              type="email"
              label="Email"
              required
              placeholder="Enter Email Address..."
              onChange={onChange}
              inputMode="email"
              value={email}
              id='email'
              name='email'
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              value={password}
              type="password"
              canRevealPassword
              placeholder="Enter password..."
              required
              onChange={onChange}
              id='password'
              name='password'
            />
          </div>

          <button className="btn btn-primary btn-user btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
