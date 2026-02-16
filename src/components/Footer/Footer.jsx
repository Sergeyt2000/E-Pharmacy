import css from "./Footer.module.css";
import Logo from "../Header/Logo/Logo.jsx";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.logoSection}>
          <Logo />
          <p className={css.description}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>
        <div className={css.links}>
          <a href="/">Home</a>
          <a href="/medicine-store">Medicine store</a>
          <a href="/medicine">Medicine</a>
        </div>
        <ul className={css.socialMedia}>
          <li className={css.socialMediaItem}>
            <a
              className={css.socialLink}
              href="https://www.facebook.com/goITclub/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socialIcon} width="28" height="28">
                <use href="/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li className={css.socialMediaItem}>
            <a
              className={css.socialLink}
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socialIcon} width="28" height="28">
                <use href="/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.socialMediaItem}>
            <a
              className={css.socialLink}
              href="https://www.youtube.com/c/GoIT#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socialIcon} width="28" height="28">
                <use href="/sprite.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.bottom}>
        <p className={css.copyright}>© E-Pharmacy 2023. All Rights Reserved</p>
        <a className={css.privacyPolicy} href="#">
          Privacy Policy
        </a>
        <a className={css.terms} href="#">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
