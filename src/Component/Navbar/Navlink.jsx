'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Navlink = ({children,href}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link className={`${isActive?' border-b-2':' border-b-none'}`} href={href}>{children}</Link>
    );
};

export default Navlink;