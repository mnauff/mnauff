'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { StyledLink } from './ui/link/Link'
import { FaGithub } from 'react-icons/fa'
import { merge } from '@/lib/merge'
import Spotify from './Spotify'

const HEADER_MENU = [
    { label: 'Home', href: '/' },
    { label: 'Project', href: '/project' },
    { label: 'Blog', href: '/blog' },
]

export default function Header() {
    const pathname = usePathname()
    const splitPath = pathname ? pathname.split('/') : []
    const baseRoute = splitPath.length > 1 ? '/' + splitPath[1] : '/'

    return (
        <header
            className={merge(
                'fixed z-30',
                'inline-flex w-full items-center justify-between bg-opacity-0 shadow backdrop-blur-md',
                'px-2.5 md:px-10'
            )}
        >
            <div className="inline-flex items-center gap-4">
                {HEADER_MENU.map((item, i) => {
                    return (
                        <StyledLink
                            key={i}
                            href={item.href}
                            className={merge(
                                baseRoute == item.href
                                    ? 'rounded border-0 bg-blue-700 bg-opacity-30 px-2 py-1 text-blue-500 after:bg-blue-500 after:hover:w-0'
                                    : null
                            )}
                        >
                            {item.label}
                        </StyledLink>
                    )
                })}
                <div className={'inline-flex items-center gap-2'}>
                    <StyledLink href="https://github.com/mnauff/mnauff" className="after:bg-blue-500">
                        Source
                    </StyledLink>
                    <FaGithub />
                </div>
            </div>
            <div className="max-md:hidden">
                <Spotify />
            </div>
        </header>
    )
}
