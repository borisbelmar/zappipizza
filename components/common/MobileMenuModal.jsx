import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from '@utils/cn'
import { XMarkIcon } from '@heroicons/react/24/solid'
import UberEatsButton from './UberEatsButton'

export default function MobileMenuModal({ closeModal, isOpen, routes }) {
  const router = useRouter()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 md:hidden" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-black text-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 font-display mb-6 text-center"
                >
                  Descubre Zappipizza
                </Dialog.Title>
                <ul className="divide-y divide-white/30">
                  {routes.map(route => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        'list-none uppercase block py-4 hover:text-primary-500 text-center',
                        router.pathname === route.href && 'font-bold text-primary-500'
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <div className="w-full flex justify-center">
                    <UberEatsButton
                      className="w-full md:text-lg px-8 md:px-12 mt-4"
                      hideLabel
                    />
                  </div>
                </ul>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

MobileMenuModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired
}
