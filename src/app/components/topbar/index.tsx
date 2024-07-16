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
    "topbar fixed w-full top-0 uppercase z-20 transition-all py-4 sm:px-12 desktop-lg:mx-0";
  return (
    <nav
      className={`${defaultClass} ${
        scroll ? "bg-white/80 backdrop-blur-sm" : "bg-white"
      } ${props.className ?? ""} `}
    >
      <div className=" flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href={""}>
          <Image alt="Paper" width={114} height={40} src={"/logo-navi.png"} />
        </Link>
        {props.children && <div>{props.children}</div>}
        <div className="flex text-sm space-x-3">
          <Button
            className="h-10 px-6 capitalize"
            label="contact us"
            variant="outlined"
          />
          <Button
            className="h-10 px-6 capitalize"
            label="register"
            variant="contained"
          />
        </div>
      </div>
    </nav>
  );
};

Topbar.displayName = "Topbar";

Topbar.defaultProps = {};

export default Topbar;
