import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    // <div className="auth-nav">
      <ul className={css.authNav}>
        <li className={css.register}>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li className={css.login}>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    // </div>
  );
}