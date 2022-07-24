
import React,{useState,useEffect} from 'react'
import { getAPI } from '../../utils/axios'
import { Loading } from '../common'
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
const UserList = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    getAPI('get-user').then(res=>{
      setUsers(res.data)
    }
    )
  }
  ,[])
  const data=users.user
  return (
    <div>
   {
    data?data.map((item,index)=>(
      <div key={index}>
      <table>
      <tr>
      <th>email</th>
      <th>name</th>
      <th>phone</th>
      <th>address</th>
      </tr>
     <tr>
     
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
     </tr>
      </table>
      </div>
    )):<Loading/>
   }
    </div>
  )
}

export default UserList