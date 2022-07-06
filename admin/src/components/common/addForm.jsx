import React from "react";
import { TextField, Dropdown } from "@fluentui/react";
const AddForm = () => {
const options = [
  { key: "1", text: "1" },
  { key: "2", text: "2" },
  { key: "3", text: "3" },
  { key: "4", text: "4" },
];
  return (
    <div>
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
            <TextField
              type="text"
              id="inputCity"
              placeholder="nhập tên "
              label="nhập tên"
            />
          </div>
          <div className="form-group col-md-4">
            <Dropdown
              placeholder="chọn đi"
              label="Lưa chọn"
              options={options}
            />
          </div>
          <div className="form-group col-md-2"></div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save <i className="fas fa-save    "></i>
        </button>
      </form>
    </div>
  );
};

export default AddForm;
