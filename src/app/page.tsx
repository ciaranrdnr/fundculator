import Topbar from './components/topbar'
import Link from 'next/link'
import BenefitSection from './sections/benefit'
import HeroSection from './sections/hero'
import HowToSection from './sections/how-to'
import Footer from './sections/footer'

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
