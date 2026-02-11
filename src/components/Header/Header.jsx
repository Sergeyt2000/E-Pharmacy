import css from './Header.module.css';
import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import AuthNav from './AuthNav/AuthNav.jsx';

export default function Header() {
    return (
      <header className={css.header}>
        <Logo />
        <Navigation />
        <AuthNav />
      </header>
    );
}