import React,{useState,useEffect} from 'react';
import { Container, Row, Image } from '@nextui-org/react';
import {toast}from 'react-hot-toast'
const Login = () => {
  const initState={
    email:'',
    password:''
  }
  const [userLogin,setUserLogin]=useState(initState)
  const handleChangeInput=(e)=>{
    console.log(e.target.value);
  }
  return (
    <React.Fragment>
      <Container gap={0} justify='center'>
        <Row md={6} xs={12}>
          <div className='hero min-h-screen '>
            <div className='hero-content flex-col lg:flex-row-reverse'>
              <div className='text-center lg:text-left'>
                <h1 className='text-5xl font-bold center'>Login Admin</h1>
                <Image
                  src='https://res.cloudinary.com/dygzt0i9k/image/upload/v1652685733/food-blog/TaeAugust11-removebg-preview_klyikm.png'
                  alt='Default Image'
                  objectFit='cover' 
                  width={500}
                />
              </div>
              <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <div className='card-body'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input type='email'required placeholder='email' className='input input-bordered' onChange={handleChangeInput} />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='password' className='input input-bordered' />
                  </div>
                  <div className='form-control mt-6'>
                    <button className='btn btn-primary'>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
