import React from 'react'
import { Table } from '@mantine/core';
import { getApi } from '../../utils/axios';

const Tableuser = ({data}) => {
  // const [data,setData] = React.useState([]);
  
  React.useEffect(()=>{
    
  },[])


  return (
    <>
    table
    {
      data&&data.map((it,id)=>{
        return(
          <tr key={id}>
            <td>{it.name}</td>
          </tr>
        )
      })
    }
    </>
    // <Table highlightOnHover>
     
    // </Table>
  );
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const ers= getApi('/read-user') // your fetch function here 
  const data=ers.json()
  return {
    props: {
      data
    }
  }
}
export default Tableuser