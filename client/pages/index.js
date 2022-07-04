import { PRIVATE_ROUTES } from '../utils/route'
import Link from 'next/link'
import Loading from '../components/common/loading'
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
     <Loading/>
    </div>
  )
}
