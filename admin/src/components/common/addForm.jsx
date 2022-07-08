import React,{useEffect,useState} from "react";
import { TextField,Stack } from "@fluentui/react";
import toast from 'react-hot-toast'
import { postAPI } from "../../utils/axios";
const AddForm = () => {
const initialState={
    name:"",
    email:"",
    password:'',
    phone:"",
    address:"",
    gender:''
}
const [newUser,setNewUser]=useState(initialState);
const {name,email,passowrd,phone,address,gender}=newUser;

const onInputChange=(e)=>{
  setNewUser({...newUser,[e.target.name]:e.target.value})
}
async function createNewUser(){
 const res =await postAPI("create-user",newUser)
console.log(res);
 if(res&&res.data.code===0){
  toast.success("User created successfully")
 }else{
  toast.error("Error creating user")
 }
 return res
}
const onSubmit=(e)=>{
   e.preventDefault();
   createNewUser()
}
// useEffect(()=>{
//   createNewUser()
// },[newUser])
const options = [
  { key: "1", text: "Male",value:'Male' },
  { key: "2", text: "Female",value:'Female' },
  { key: "3", text: "Other",value:'other' },
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
              name="name"
              onChange={onInputChange}
              value={name}
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="email"
              id="inputEmail4"
              placeholder="Email"
              label="Nhập email"
              name='email'
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
              value={passowrd}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <TextField
              type="text"
              id="inputPhone"
              placeholder="Phone"
              label="Nhập số diện thoại"
              value={phone}
              name='phone'
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <TextField
              type="text"
              id="inputCity"
              placeholder="nhập địa chỉ "
              label="nhập địa chỉ"
              value={address}
              name='address'
              onChange={onInputChange}
            />
          </div>
        

          <div className="form-group col-md-4">
          <label htmlFor="select">Chọn</label>
                <select name="gender" id="select" className="form-control" value={gender} onChange={onInputChange}>
                {
                  options.map(option => (
                    <option key={option.key} value={option.value}>{option.text}</option>
                  ))
                }
                </select>
          </div>
         
          <div className="form-group col-md-4">
          <label >Tải ảnh lên</label>
          <input type='file'className="form-control"accept=".jpg,.png" placeholder="tải "/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save <i className="fas fa-save    "></i>
        </button>
      </form>
    </Stack>
  );
};

export default AddForm;
