import { useMediaQuerySSR } from 'hooks/useMediaQuerySSR';
import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOBILE_SIZE } from 'constants/screenSize';
import { Links } from './components/links/Links';

import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  const [activeLink, setActiveLink] = useState<string | null>('home');
  const [openBurger, setOpenBurger] = useState(false);
  const isDesktop = useMediaQuerySSR(`(min-width: ${MOBILE_SIZE}px)`);

  return (
    <>
      <div className={styles.container}>
        <Link href={'/'}>
          <div className={styles.headerLogo}>
            <Image src={'/logo.svg'} alt="logo" width={129} height={28} />
          </div>
        </Link>

        {isDesktop && (
          <nav className={styles.headerMenu}>
            <Links
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              setOpenBurger={setOpenBurger}
            />
          </nav>
        )}
        {!isDesktop && (
          <div className={styles.headerBurgerWrapper}>
            <button
              className={styles.hederBurger}
              onClick={() => {
                setOpenBurger(!openBurger);
              }}
            >
              {openBurger ? (
                <Image
                  src={'/burger-clicked.svg'}
                  alt="logo"
                  width={18}
                  height={18}
                />
              ) : (
                <Image src={'/burger.svg'} alt="logo" width={24} height={20} />
              )}
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
