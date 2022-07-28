import React, { useState, useEffect } from 'react';
import { getAPI } from '../../utils/axios';
import { Loading } from '../common';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAPI('get-user').then((res) => {
      setUsers(res.data);
    });
  }, []);
  const data = users.user;
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Avatar</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Role</th>
            <th scope='col'>Bank Account</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td><img alt='avatar'src={item.avatar} className='rounded-circle shadow-4' height="52"/></td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.role}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
