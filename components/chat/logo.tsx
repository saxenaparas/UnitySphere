import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
        <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="ViewSphere logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          UnitySphere
        </p>
       </Link>
    </div>
  )
}

export default Logo;