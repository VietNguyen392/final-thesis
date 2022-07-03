import Layout from '../components/layout'
import { PRIVATE_ROUTES } from '../utils'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='container mx-auto'>
   
     <h1 className='center text-4xl text-cyan-300 font-bold font-500'>Hello</h1>
    
     <Link href={PRIVATE_ROUTES.ADMIN_DASHBOARD}>
     <a>
     dashboard
     </a>
     </Link>
     <Link href={PRIVATE_ROUTES.ADMIN}>
     <a>
     main
     </a>
     </Link>
    </div>
  )
}
