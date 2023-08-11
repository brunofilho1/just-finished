'use client'

import {
  Gamepad,
  Home,
  List,
  PanelLeftClose,
  PanelRightClose,
  Users,
} from 'lucide-react'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { Tooltip } from '../Tooltip'
import { UserDropdown } from '../UserDropdown'
import { Button } from '../ui/button'

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
  const { push } = useRouter()

  return (
    <>
      <nav
        aria-label="Header"
        className="fixed top-0 z-50 w-full bg-zinc-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500
                rounded-lg dark:text-gray-400 dark:hover:bg-gray-700
                "
              >
                <span className="sr-only">Abrir SideBar</span>
                {isOpen ? <PanelRightClose /> : <PanelLeftClose />}
              </Button>
              <a href="/" className="flex ml-2 md:mr-24">
                <img src="/logo/svg/logo.svg" width={150} alt="" />
              </a>
            </div>
            <div className="flex items-center gap-2">
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
        <div className="flex flex-col gap-2 w-full h-full px-3 overflow-y-auto bg-white dark:bg-gray-800">
          {sidebarItems.map((item) => (
            <Tooltip text={item.text} side="right">
              <Button
                variant="ghost"
                onClick={() => push(item.href)}
                className="flex justify-start items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                {!isOpen && <span className="ml-3">{item.text}</span>}
              </Button>
            </Tooltip>
          ))}
        </div>
      </aside>

      <div
        data-open={isOpen}
        aria-label="Page Container"
        className="overflow-y-auto data-[open=true]:sm:ml-16 sm:ml-64 sm:mt-9 p-4 dark:bg-background"
      >
        {children}
      </div>
    </>
  )
}
