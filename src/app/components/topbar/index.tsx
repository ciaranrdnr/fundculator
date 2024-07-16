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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClass =
    "topbar fixed w-full top-0 uppercase z-20 transition-all py-4 px-4 sm:px-12 desktop-lg:mx-0";
  return (
    <nav
      className={`${defaultClass} ${
        scroll ? "bg-white/80 backdrop-blur-sm" : "bg-white"
      } ${props.className ?? ""} `}
    >
      <div className="flex justify-between items-center mx-auto desktop-lg:max-w-[1440px] max-w-[100vw]">
        <Link href={""}>
          <div className="w-20 h-7 desktop-sm:w-[114px] desktop-sm:h-10 relative">
            <Image alt="Paper" fill src={"/logo-navi.png"} />
          </div>
        </Link>
        {props.children && <div>{props.children}</div>}
        <div className="flex sm:text-sm space-x-3">
          <Button
            className="h-8 sm:h-10 px-2 desktop-sm:px-6 capitalize"
            label="contact us"
            variant="outlined"
          />
          <Button
            className="h-8 sm:h-10 px-2 desktop-sm:px-6 capitalize"
            label="register"
            variant="contained"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
