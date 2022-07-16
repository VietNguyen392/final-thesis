import { PRIVATE_ROUTES } from '../utils/route'
import Link from 'next/link'
import { Navbar } from '@mantine/core'
export default function Home() {
  return (
    <div className='container mx-auto'>
    <Navbar>
   <Link href='/posts'>
   Posts
   </Link>    
   <Link href='/doctor'>
   Doctor
   </Link>    
    
    </Navbar>
    
    </div>
  )
}
