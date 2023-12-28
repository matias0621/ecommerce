import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='px-5 max-w-[1280px] mx-auto'>
      <Navbar />
    </div>
  )
}
