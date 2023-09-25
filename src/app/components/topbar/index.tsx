"use client"; 
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ITopbar {
  imgUrl?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode[];
}
const Topbar = (props: ITopbar) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const defaultClass = 'topbar fixed top-0 w-full px-3 sm:px-[10%] mx-auto  uppercase z-20 flex justify-between items-center '
  return (
    <nav className={`${defaultClass} transition-all ${scroll?'bg-white pt-4 pb-4':'bg-transparent pt-[30px] pb-2'} ${props.className ?? ''} `}>
      <Link href={''}><Image alt="Paper" width={114} height={40} src={scroll?'/paper-logo-black.svg':'/paper-logo.svg'} /></Link> 
      <div className="sm:flex text-lg items-center w-3/4 justify-between hidden">
        <ul className="flex space-x-8">
          {props.children?.map((child, idx:number)=>{
            return( <li key={'topbar'+idx} className={`${scroll?' text-black hover:text-black/80':' text-gray-200 hover:text-white'}`}> {child} </li>)
          })}
        </ul>
        <div className="flex text-sm space-x-3">
          <Button
            className="px-5 py-3"
            label="LOGIN"
            variant="outlined"
          />
          <Button
            className="px-5 py-3"
            label="DAFTAR"
            variant="contained"
          />
        </div>
      </div>
    </nav>
  );
};

Topbar.displayName = 'Topbar';

Topbar.defaultProps = {
};

export default Topbar;