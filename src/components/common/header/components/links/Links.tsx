import { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  activeLink: string | null;
  setActiveLink: (value: string) => void;
  setOpenBurger: (value: boolean) => void;
};

type LinksType = Link[];

type Link = {
  title: string;
  link: string;
};

export const Links: FunctionComponent<Props> = ({
  activeLink,
  setActiveLink,
  setOpenBurger,
}) => {
  const links: LinksType = [
    { title: 'home', link: '/' },
    { title: 'world', link: '/world' },
    { title: 'automobiles', link: '/automobiles' },
    { title: 'real estate', link: '/real-estate' },
    { title: 'finance', link: '/world' },
  ];

  return (
    <nav className={styles.links}>
      {links.map(link => {
        return (
          <>
            <Link href={link.link} passHref>
              <a
                className={classNames(
                  styles.headerMenuLink,
                  activeLink === link.title && styles.headerMenuLinkActive,
                )}
                onClick={() => {
                  setActiveLink(link.title);
                  setOpenBurger(false);
                }}
              >
                {link.title}
              </a>
            </Link>
          </>
        );
      })}
    </nav>
  );
};
