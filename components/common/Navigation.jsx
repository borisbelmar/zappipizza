'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import UberEatsButton from './UberEatsButton'
import MobileMenuModal from './MobileMenuModal'

const routes = [
  { label: 'inicio', href: '/' },
  { label: 'menu', href: '/menu' },
  { label: 'crea tu pizza', href: '/pizza-build' }
]

export default function Navigation() {
  const { pathname } = useRouter()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <nav className="bg-black text-white">
        <div className="container flex justify-between items-center py-6">
          <Link href="/">
            <Image alt="Logo" src="/images/logo-color.png" width={125} height={35} />
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
          <button type="button" className="group flex flex-col md:hidden w-6 gap-1" onClick={handleOpen}>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="bg-white transition duration-150 group-hover:bg-primary h-1 w-full rounded-sm"
              />
            ))}
          </button>
        </div>
      </nav>
      <MobileMenuModal
        isOpen={open}
        closeModal={handleClose}
        routes={routes}
      />
    </>
  )
}
