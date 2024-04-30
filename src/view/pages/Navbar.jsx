import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { classNames } from './utils/Utils'

const logo_path = "src/assets/score_plus_logo.svg"

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary-700 h-[7vh] drop-shadow-[0_5px_8px_rgba(255,255,2555,0.07)]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ml-2">
                  <img
                    className="h-8 w-auto logo"
                    src={logo_path}
                    alt="Score+"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:border-blue-400"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/*New Research*/}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href='#'
                      className='btn rounded-md mr-2 px-3 py-2 text-sm font-medium'
                      aria-current='page'
                    >
                      + Research
                    </a>
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-gray-400 hover:text-white bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:border-blue-400">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserGroupIcon className='h-8 w-8 rounded-full' aria-hidden='true' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items id='user-menu' className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
