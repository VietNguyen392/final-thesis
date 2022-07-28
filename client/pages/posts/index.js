import React from 'react'
import { getApi } from '../../utils/axios'
const Posts = ({data}) => {
  

  return (
    <div>
    user
    {
      data?.user.map((it,id)=>{
        <span key={id}>
        {it.fullName}
        </span>
      })
    }
 
    </div>
  )
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const { data } = await  getApi('get-user')// your fetch function here 
console.log(data.user)
  return {
    props: {
      data
    }
  }
}
export default Posts