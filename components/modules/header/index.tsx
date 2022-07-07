import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import style from './Header.module.scss'

const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>()

  return (
    <div className={style.headerContainer}>
      <div className={style.headerInner}>
        <div className={style.headerLogo}>
          <img src="logo.png" alt="logo" />
        </div>
        <nav className={style.headerMenu}>
          <Link href="/" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'home' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('home')
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/world" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'world' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('world')
              }}
            >
              World
            </a>
          </Link>
          <Link href="/automobiles" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'automobiles' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('automobiles')
              }}
            >
              Automobiles
            </a>
          </Link>
          <Link href="/real-estate" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'real-estate' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('real-estate')
              }}
            >
              Real Estate
            </a>
          </Link>
          <Link href="/finance" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'finance' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('finance')
              }}
            >
              Finance
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
