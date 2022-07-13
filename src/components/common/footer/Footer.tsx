import { FunctionComponent } from 'react';
import Link from 'next/link';
import { FaceBook } from '../icons/social/facebook/Facebook';
import { Instagram } from '../icons/social/instagram/Instagram';
import { Twitter } from '../icons/social/twitter/Twitter';

import styles from './styles.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLinks}>
        <Link href={'/about-us'} passHref>
          <a className={styles.footerLink}>About us</a>
        </Link>
        <Link href={'/help'} passHref>
          <a className={styles.footerLink}>Help</a>
        </Link>
        <Link href={'/advertise'} passHref>
          <a className={styles.footerLink}>Advertise</a>
        </Link>
        <Link href={'/privacy-policy'} passHref>
          <a className={styles.footerLink}>Privacy Policy</a>
        </Link>
        <Link href={'/terms-of-service'} passHref>
          <a className={styles.footerLink}>Terms of Service</a>
        </Link>
      </div>
      <div className={styles.footerIconsWrapper}>
        <div className={styles.footerIcons}>
          <Link href={'/twitter'}>
            <div className={styles.footerIcon}>
              <Twitter />
            </div>
          </Link>
          <Link href={'/facebook'}>
            <div className={styles.footerIcon}>
              <FaceBook />
            </div>
          </Link>
          <Link href={'/instagram'}>
            <div className={styles.footerIcon}>
              <Instagram />
            </div>
          </Link>
        </div>
      </div>
      <p className={styles.footerSiteName}>© 2022 Best News</p>
    </div>
  );
};
