'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Nav = () => {
    const pathname = usePathname()
    return (

        <nav className="flex flex-col gap-2">


            <Link
                href={'/dashboard/projects'}
                className={clsx(
                    "w-full text-left py-2 px-4 rounded-lg  cursor-pointer",
                    pathname == '/dashboard/projects' ? 'bg-black text-white' : 'bg-white text-black'
                )}
            >
                Projects
            </Link>


            <Link
                href={'/dashboard/add-projects'}
                className={clsx(
                    "w-full text-left py-2 px-4 rounded-lg cursor-pointer",
                    pathname == '/dashboard/add-projects' ? 'bg-black text-white' : 'bg-white text-black'
                )}
            >
                Add Project
            </Link>
            <Link
                href={'/dashboard/editor'}
                className={clsx(
                    "w-full text-left py-2 px-4 rounded-lg cursor-pointer",
                    pathname == '/dashboard/editor' ? 'bg-black text-white' : 'bg-white text-black'
                )}
            >
                Editor
            </Link>


        </nav>
    )
}

export default Nav