"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/styles/components/navbar.css";
import logo from "@/public/vercel.svg";

interface INavigationLink {
  id: string;
  title: string;
  path: string;
}

const navigation: INavigationLink[] = [
  { id: '1', title: 'Home', path: '/' },
  { id: '2', title: 'Posts', path: '/posts' },
  { id: '3', title: 'Contacts', path: '/contacts' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <nav>
      <Image src={logo} width={60} height={60} alt="logo" />
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link 
            key={id}
            href={path}
            className={`link ${pathname === path ? 'active' : ''}`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
