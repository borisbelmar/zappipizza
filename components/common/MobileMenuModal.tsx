'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from '@/utils/cn'
import { routes } from './routes'
import UberEatsButton from './UberEatsButton'

type Props = { isOpen: boolean; closeModal: () => void }

export default function MobileMenuModal({ isOpen, closeModal }: Props) {
  const pathname = usePathname()

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-10 md:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center">
          <DialogPanel
            transition
            className="w-full max-w-xl transform overflow-hidden bg-black text-white p-6 text-left align-middle shadow-xl transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          >
            <DialogTitle
              as="h3"
              className="text-2xl font-medium leading-6 font-display mb-6 text-center"
            >
              Descubre Zappipizza
            </DialogTitle>
            <ul className="divide-y divide-white/30">
              {routes.map(route => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'list-none uppercase block py-4 hover:text-primary-500 text-center',
                    pathname === route.href && 'font-bold text-primary-500'
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </ul>
            <div className="w-full flex justify-center">
              <UberEatsButton className="w-full md:text-lg px-8 md:px-12 mt-4" hideLabel />
            </div>
            <div>
              <button
                type="button"
                className="absolute top-0 right-0 mt-4 mr-6"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon
                  className="h-6 w-6 text-white hover:text-primary transition duration-150"
                  aria-hidden="true"
                />
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
