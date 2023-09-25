import Topbar from './components/topbar'
import Link from 'next/link'
import BenefitSection from './components/section/benefit'
import HeroSection from './components/section/hero'
import HowToSection from './components/section/how-to'
import Footer from './components/section/footer'

export default function Home() {
  return (
    <main className='relative'>
      <Topbar>
            <Link href={''} >produk</Link>
            <Link href={''} >solusi bisnis</Link>
            <Link href={''} >cara kerja</Link>
            <Link href={''} >harga</Link>
            <Link href={''} >perusahaan</Link>
      </Topbar>
      <HeroSection/>
      <HowToSection/>
      <BenefitSection/>
      <Footer/>
    </main>
  )
}
