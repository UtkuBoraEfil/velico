import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo-white.png"
import profile from "@/public/images/profile.png"
import { Globe } from 'lucide-react';
import { Moon } from 'lucide-react';

export function Navbar () {
  return (
    <div className="py-4 flex w-full justify-between items-center">
        <div className="flex items-center gap-6">
            <Image src={logo} alt="logo"/>
            <Link href={""}>Cars</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Blog</Link>
        </div>
        <div className="flex items-center gap-6">
            <button className="flex px-2 py-3 rounded-xl bg-white text-greenpart gap-2 ">
                <p>Log in | Register</p>
                <Image src={profile} alt={"profile"} className=" bg-greenpart  rounded-full p-1"/>
            </button>
            <div className="flex items-center gap-1">
                <button>EN</button>
                <p>|</p>
                <button>TR</button>
                <Globe></Globe>
            </div>
            <Moon></Moon>

        </div>
    </div>
  );
};

