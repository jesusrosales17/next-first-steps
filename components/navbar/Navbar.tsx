import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/contact', text: 'Contact'},
    {path: '/pricing', text: 'Pricing'},
]

export const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'} className='flex items-center'>
        <span>
            Home
        </span>
        </Link>

        <div className="flex-1"></div>

        {
            navItems.map(({path, text}) => (
                <ActiveLink key={path} path={path} text={text} />
            ))
        }
    </nav>
  )
}
