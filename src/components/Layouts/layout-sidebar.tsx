'use client'

import {
  Gamepad,
  Home,
  List,
  PanelLeftClose,
  PanelRightClose,
  Users,
} from 'lucide-react'
import { ReactNode, useState } from 'react'
import { DarkModeBtn } from '../DarkModeBtn/indes'
import { Tooltip } from '../Tooltip'

interface LayoutsProps {
  children: ReactNode
}

const sidebarItems = [
  {
    text: 'Home',
    href: '/',
    icon: <Home size={20} />,
  },
  {
    text: 'All Games',
    href: '/games',
    icon: <Gamepad size={20} />,
  },
  {
    text: 'Your Games',
    href: '/user/games',
    icon: <List size={20} />,
  },
  {
    text: 'Friends',
    href: '/friends',
    icon: <Users size={20} />,
  },
]

export function SidebarLayout({ children }: LayoutsProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <nav
        aria-label="Header"
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Abrir SideBar</span>
                {isOpen ? <PanelRightClose /> : <PanelLeftClose />}
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
                <img src="/logo/svg/logo.svg" width={150} alt="" />
              </a>
            </div>
            <div className="flex items-center">
              <DarkModeBtn />
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        data-open={isOpen}
        aria-label="Sidebar"
        className="fixed top-0 left-0 z-40 data-[open=true]:w-16 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item) => (
              <Tooltip text={item.text} side="right">
                <li>
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {item.icon}
                    {!isOpen && <span className="ml-3">{item.text}</span>}
                  </a>
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
      </aside>

      <div
        data-open={isOpen}
        aria-label="Page Container"
        className="data-[open=true]:sm:ml-16 sm:ml-64 sm:mt-9 p-4 dark:bg-gray-900"
      >
        {children}
      </div>
    </>
  )
}
