import { FunctionComponent } from 'react';
import Link from 'next/link';

import { FaceBookIcon } from './components/icons/facebook-icon/FacebookIcon';
import { InstagramIcon } from './components/icons/instagram-icon/InstagramIcon';
import { TwitterIcon } from './components/icons/twitter-icon/TwitterIcon';

import styles from './styles.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.date}>© 2022 Best News</div>
          <div className={styles.links}>
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
          <div className={styles.footerIcons}>
            <div className={styles.footerIcon}>
              <TwitterIcon />
              {/* <img src="../icons/twitter.svg" alt="twitter logo" /> */}
            </div>
            <div className={styles.footerIcon}>
              <FaceBookIcon />
              {/* <img src="../icons/fb.svg" alt="twitter logo" /> */}
            </div>
            <div className={styles.footerIcon}>
              <InstagramIcon />
              {/* <img src="../icons/inst.svg" alt="twitter logo" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
