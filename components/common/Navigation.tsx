'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MobileMenuModal from './MobileMenuModal'
import { routes } from './routes'
import UberEatsButton from './UberEatsButton'

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="bg-black text-white">
        <div className="container flex justify-between items-center py-6">
          <Link href="/">
            <Image
              alt="Logo"
              src="/images/logo-color.png"
              width={125}
              height={35}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <ul className="gap-6 uppercase hidden md:flex items-center">
            {routes.map(route => (
              <Link key={route.href} href={route.href}>
                <li
                  className={clsx(
                    'cursor-pointer hover:text-primary transition duration-150',
                    pathname === route.href && 'font-bold text-primary-500'
                  )}
                >
                  {route.label}
                </li>
              </Link>
            ))}
            <UberEatsButton hideLabel />
          </ul>
          <button
            type="button"
            className="group flex flex-col md:hidden w-6 gap-1"
            onClick={() => setOpen(true)}
          >
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="bg-white transition duration-150 group-hover:bg-primary h-1 w-full rounded-xs"
              />
            ))}
          </button>
        </div>
      </nav>
      <MobileMenuModal isOpen={open} closeModal={() => setOpen(false)} />
    </>
  )
}
