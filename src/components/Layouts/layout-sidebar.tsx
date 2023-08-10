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
import { Tooltip } from '../Tooltip'
import { UserDropdown } from '../UserDropdown'

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
        className="fixed top-0 z-50 w-full bg-zinc-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="py-3 lg:px-5 lg:pl-3">
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
            <div className="flex items-center gap-2">
              {/* <DarkModeBtn /> */}
              <UserDropdown />
            </div>
          </div>
        </div>
      </nav>

      <aside
        data-open={isOpen}
        aria-label="Sidebar"
        className="fixed top-0 left-0 z-40 data-[open=true]:w-16 w-64 h-screen pt-20 transition-transform -translate-x-full bg-zinc-50 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-full px-3 overflow-y-auto bg-white dark:bg-gray-800">
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
        className="overflow-y-auto data-[open=true]:sm:ml-16 sm:ml-64 sm:mt-9 p-4 dark:bg-gray-900"
      >
        {children}
      </div>
    </>
  )
}
