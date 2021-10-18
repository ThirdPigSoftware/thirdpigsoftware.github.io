import Link from 'next/link'

const links = []

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <div />
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
