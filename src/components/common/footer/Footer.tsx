import Link from 'next/link';

import { FaceBookIcon } from './components/icons/facebook-icon/FacebookIcon';
import { InstagramIcon } from './components/icons/instagram-icon/InstagramIcon';
import { TwitterIcon } from './components/icons/twitter-icon/TwitterIcon';

import style from './style.module.scss';

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.content}>
          <div className={style.date}>© 2022 Best News</div>
          <div className={style.links}>
            <Link href={'/about-us'} passHref>
              <a className={style.footerLink}>About us</a>
            </Link>
            <Link href={'/help'} passHref>
              <a className={style.footerLink}>Help</a>
            </Link>
            <Link href={'/advertise'} passHref>
              <a className={style.footerLink}>Advertise</a>
            </Link>
            <Link href={'/privacy-policy'} passHref>
              <a className={style.footerLink}>Privacy Policy</a>
            </Link>
            <Link href={'/terms-of-service'} passHref>
              <a className={style.footerLink}>Terms of Service</a>
            </Link>
          </div>
          <div className={style.footerIcons}>
            <div className={style.footerIcon}>
              {/* <TwitterIcon /> */}
              <img src="./icons/twitter.svg" alt="twitter logo" />
            </div>
            <div className={style.footerIcon}>
              {/* <FaceBookIcon /> */}
              <img src="./icons/fb.svg" alt="twitter logo" />
            </div>
            <div className={style.footerIcon}>
              {/* <InstagramIcon /> */}
              <img src="./icons/inst.svg" alt="twitter logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
