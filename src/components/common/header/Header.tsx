import { useState } from 'react';

import Link from 'next/link';

import classNames from 'classnames';

import styles from './styles.module.scss';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>('home');
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo}>
          <img src="../logo.png" alt="logo" />
        </div>
        <nav
          className={classNames(
            openBurger ? styles.headerMenuOpened : styles.headerMenu,
          )}
        >
          <Link href="/" passHref>
            <a
              className={classNames(
                styles.headerMenuLink,
                activeLink === 'home' && styles.headerMenuLinkActive,
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
                styles.headerMenuLink,
                activeLink === 'world' && styles.headerMenuLinkActive,
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
                styles.headerMenuLink,
                activeLink === 'automobiles' && styles.headerMenuLinkActive,
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
                styles.headerMenuLink,
                activeLink === 'real-estate' && styles.headerMenuLinkActive,
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
                styles.headerMenuLink,
                activeLink === 'finance' && styles.headerMenuLinkActive,
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
          className={classNames(
            styles.burger,
            openBurger && styles.activeBurger,
          )}
          onClick={() => setOpenBurger(!openBurger)}
        ></button>
      </div>
    </div>
  );
};
