import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';
const Crud = () => {
  return (
    <div className="none">
      <form>
        <div className="row mt-3">
          <div className="form-group col-md-6 ">
            <TextField
              type="text"
              id="inputName"
              placeholder="Name"
              label="Nhập tên"
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="email"
              id="inputEmail4"
              placeholder="Email"
              label="Nhập email"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <TextField
              type="password"
              id="inputPassword4"
              placeholder="Password"
              canRevealPassword
              label="Nhập mật khẩu"
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="text"
              id="inputPhone"
              placeholder="Phone"
              label="Nhập số diện thoại"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextField type="text" id="inputCity" />
          </div>
          <div className="form-group col-md-4"></div>
          <div className="form-group col-md-2">
            <TextField type="text" id="inputZip" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Crud;
