import { useState } from 'react';

import Link from 'next/link';

import classNames from 'classnames';

import style from './style.module.scss';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>('home');
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className={style.headerContainer}>
      <div className={style.headerInner}>
        <div className={style.headerLogo}>
          <img src="logo.png" alt="logo" />
        </div>
        <nav
          className={classNames(
            openBurger ? style.headerMenuOpened : style.headerMenu,
          )}
        >
          <Link href="/" passHref>
            <a
              className={classNames(
                style.headerMenuLink,
                activeLink === 'home' && style.headerMenuLinkActive,
              )}
              onClick={() => {
                setActiveLink('home');
                setOpenBurger(false);
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
                setActiveLink('world');
                setOpenBurger(false);
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
                setActiveLink('automobiles');
                setOpenBurger(false);
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
                setActiveLink('real-estate');
                setOpenBurger(false);
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
                setActiveLink('finance');
                setOpenBurger(false);
              }}
            >
              Finance
            </a>
          </Link>
        </nav>
        <button
          className={classNames(style.burger, openBurger && style.activeBurger)}
          onClick={() => setOpenBurger(!openBurger)}
        ></button>
      </div>
    </div>
  );
};
