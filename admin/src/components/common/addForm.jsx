import React, { useEffect, useState, useCallback } from "react";
import { TextField, Stack, PrimaryButton } from "@fluentui/react";
import toast from "react-hot-toast";
import { postAPI } from "../../utils/axios";
import { checkImage, imageUpload } from "../../utils/uploadImg";
import Quill from "./quill";
const AddForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    avatar: "",
    content: "",
  };
  const [newUser, setNewUser] = useState(initialState);
  const { fullName, email, password, phone, address, gender, avatar, content } =
    newUser;
  const onInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  async function createNewUser() {
    const res = await postAPI("create-user", newUser);
    console.log(res);
    if (res && res.data.code === 0) {
      toast.success("User created successfully");
    } else {
      toast.error("Error creating user");
    }
    return res;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    createNewUser();
  };
  /* const handleUploadImg=()=>{
  const file=document.getElementById("avatar").files[0];
  checkImage(file).then(()=>{
    imageUpload(file).then(res=>{
      setNewUser({...newUser,avatar:res.data.url})
    })
  }).catch(err=>{
    toast.error(err.message)
    console.log(err);
  })
  
} */
  // useEffect(()=>{
  //   createNewUser()
  // },[newUser])
  const options = [
    { key: "1", text: "Male", value: "Male" },
    { key: "2", text: "Female", value: "Female" },
  ];
  return (
    <Stack>
      <form onSubmit={onSubmit}>
        <div className="row mt-3">
          <div className="form-group col-md-6 ">
            <TextField
              type="text"
              id="inputName"
              placeholder="Name"
              label="Nhập tên"
              name="fullName"
              onChange={onInputChange}
              value={fullName}
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="email"
              id="inputEmail4"
              placeholder="Email"
              label="Nhập email"
              name="email"
              onChange={onInputChange}
              value={email}
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
              value={password}
              onChange={onInputChange}
              name="password"
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="text"
              id="inputPhone"
              placeholder="Phone"
              label="Nhập số diện thoại"
              value={phone}
              name="phone"
              P
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextField
              type="text"
              id="inputCity"
              placeholder="nhập địa chỉ "
              label="nhập địa chỉ"
              value={address}
              name="address"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group col-md-6">
              <label htmlFor="select">Giới tính </label>
                <select name="gender" id="select" className="form-control" value={gender} onChange={onInputChange}>
                {
                  options.map(option => (
                    <option key={option.key} value={option.value}>{option.text}</option>
                  ))
                }
                </select>
          </div>

          <div className="form-group col-md-6 mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Tải ảnh lên
            </label>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
              name="avatar"
              value={avatar}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
          
          <Quill value={content} onChange={onInputChange} />
          </div>
          <PrimaryButton onClick={onSubmit} text='Xác nhận'/>
        </div>
      </form>
      {/* <div className="mt-6">
      </div> */}
    </Stack>
  );
};

export default AddForm;
