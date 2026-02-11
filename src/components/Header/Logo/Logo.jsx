import css from './Logo.module.css';

export default function Logo() {
    return (
      <div className={css.logo}>
        <a href="/" className={css.logoLink}>
          <svg className={css.logosvg} width="44" height="44">
            <use href="/Icons/logo_white.svg"></use>
          </svg>
          <span className={css.logo_text}>E-Pharmacy</span>
        </a>
      </div>
    );
}