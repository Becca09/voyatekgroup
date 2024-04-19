"use client"
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import SearchField from "./SearchField";
import { Icon } from "./Icon";
import { usePathname } from 'next/navigation'
import { LinkOrButton } from "./LinkOrButton";
import Image from 'next/image'



const Navbar = () => {


  const LI1 = [
    { label: 'Home', href: '/home', icon: 'home' },
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Wallet', href: '/wallet', icon: 'wallet' },
    { label: 'Plan a trip', href: '/', icon: 'plan' },
    { label: 'Commision for life', href: '/commission', icon: 'commission' },
  ];


  const LI2 = [
    { label: 'Notification', href: '/notificattion', icon: 'notification' },
    { label: 'Carts', href: '/carts', icon: 'cart' },
    { label: 'create', href: '/create', icon: 'create' },
  ];

  const pathname = usePathname()


  return (
    <div className="cursor-pointer bg-white flex flex-row justify-between p-5">
      <div className="flex gap-7">
        <Link href="/">
          <Logo src="/assets/images/logo.png" />
        </Link>
        <SearchField />
      </div>

      <div>
        <div className="flex flex-row">
          <ul className="lg:flex lg:flex-row hidden gap-5 mt-2 px-3 border-r border-slate-400 ">
            {LI1.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer flex flex-row py-1 text-sm hover:text-primary-100 justify-center items-center ${pathname === item.href ? 'text-primary-100' : 'text-primary-400'
                  }`}
              >
                <Link href={item.href} className="mt-2 flex flex-col justify-center items-center">
                  <Icon id={item.icon} className="h-6 w-6" />
                  <span className="mt-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-row pl-3">
            <div className="mt-5">
              <LinkOrButton isFull={false} className="px-2">Subsribe</LinkOrButton>

            </div>
            <ul className="lg:flex lg:flex-row hidden gap-5 mt-2 px-3 ">
              {LI2.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex flex-row py-1 text-sm hover:text-primary-100 justify-center items-center ${pathname === item.href ? 'text-primary-100' : 'text-primary-400'
                    }`}
                >
                  <Link href={item.href} className="mt-2 flex flex-col justify-center items-center">
                    <Icon id={item.icon} className="h-6 w-6" />
                    <span className="mt-1">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <Image
                className="w-[20px] sm:w-[50px] sm:h-[50px] mt-3"
                src="/assets/images/user.jpg"
                width={85}
                height={85}
                alt=""
              />
            </div>
            <div className="mt-10 ml-3">
              <Icon id="dropdown" className="h-6 w-6" />
            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Navbar;

