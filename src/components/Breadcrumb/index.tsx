import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface BreadcrumbProps {
  className?: string
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const router = useRouter()
  const { pathname, query, push } = router
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  const routes: any = {
    '404': 'Página Not Found',
    home: 'Home',
    games: 'All Games',
    user: 'User',
    '[game]': (
      <span className="capitalize">
        {String(query.game).replaceAll('-', ' ')}
      </span>
    ),
  }

  return (
    <nav
      className={`bg-transparent flex items-center ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="list-none flex items-center">
        <li className="flex items-center text-sm font-medium text-gray-500">
          <Link href="/" className="hover:bg-gray-800 rounded-md p-2">
            Home
          </Link>
          <ChevronRight className="mx-2 w-4 h-4" />
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          const isLastSegment = index === pathSegments.length - 1
          return (
            <li
              key={segment}
              className="flex items-center text-sm font-medium text-gray-500"
            >
              <button
                className="disabled:bg-transparent hover:bg-gray-800 rounded-md p-2"
                disabled={isLastSegment}
                onClick={() => push(href)}
              >
                {routes[segment] || segment}
              </button>
              {!isLastSegment && (
                <ChevronRight className="mx-2 w-4 h-4 text-gray-500" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
