import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { MEDIA_QUERY } from 'constants/screenSize';
import { useMediaQuerySSR } from 'hooks/useMediaQuerySSR';
import { Links } from './components/links/Links';
import { CloseBurger, OpenBurger, SiteLogo } from '../icons';

import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  const [activeLink, setActiveLink] = useState<string | null>('home');
  const [openBurger, setOpenBurger] = useState(false);
  const isDesktop = useMediaQuerySSR(MEDIA_QUERY);

  return (
    <>
      <div className={styles.header}>
        <Link href={'/'}>
          <div className={styles.headerLogo}>
            <SiteLogo />
          </div>
        </Link>

        {isDesktop && (
          <Links
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setOpenBurger={setOpenBurger}
          />
        )}
        {!isDesktop && (
          <div className={styles.headerBurgerWrapper}>
            <button
              className={styles.hederBurger}
              onClick={() => {
                setOpenBurger(!openBurger);
              }}
            >
              {openBurger ? <OpenBurger /> : <CloseBurger />}
            </button>
          </div>
        )}
      </div>
      {!isDesktop && openBurger && (
        <nav className={styles.headerMenu}>
          <Links
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setOpenBurger={setOpenBurger}
          />
        </nav>
      )}
    </>
  );
};
