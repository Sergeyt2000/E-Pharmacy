import css from './Navigation.module.css';

export default function Navigation() {
    return (
      <nav className={css.navigation}>
        <ul className={css.list}>
          <li className={css.item}>
            <a href="/" className={css.link}>
              Home
            </a>
          </li>
          <li className={css.item}>
            <a href="/medicine-store" className={css.link}>
              Medicine store
            </a>
          </li>
          <li className={css.item}>
            <a href="/medicine" className={css.link}>
              Medicine
            </a>
          </li>
        </ul>
      </nav>
    );
}