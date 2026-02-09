import css from './Header.module.css';
import Logo from './Logo/Logo.jsx';

export default function Header() {
    return (
      <header className={css.header}>
        <Logo />
        {/* <Navigation /> */}
        {/* <AuthHead /> */}
      </header>
    );
}