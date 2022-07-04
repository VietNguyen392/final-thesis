import React, { useState, useEffect } from 'react';
import { Image, Input } from '@mantine/core';
import InputPassword from '../common/inputPassword';
const Login = (props) => {
  const initState = {
    email: '',
    password: '',
  };
  const [userLogin, setUserLogin] = useState(initState);
  const {email,password}=userLogin;
  
  const handleChangeInput = (e) => {
    console.log(e.target.value);
  };
  var welcome_img =
    'https://res.cloudinary.com/dygzt0i9k/image/upload/v1652685733/food-blog/TaeAugust11-removebg-preview_klyikm.png';
  return (
    <React.Fragment>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold center'>{props.title}</h1>
            <Image src={welcome_img} alt='Default Image' fit='stretch' width={500} />
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <Input
                  icon={<i className='fas fa-envelope'></i>}
                  type='email'
                  required
                  placeholder='email'
                  size='md'
                  onChange={handleChangeInput}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>

                <InputPassword placeholder='Enter password' />
              </div>

              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
