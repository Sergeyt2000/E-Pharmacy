import css from "./Features.module.css";

export default function Features() {
  return (
    <div className={css.features}>
      <ul className={css.featuresList}>
        <li className={css.featureItem}>
          <svg width="20" height="20">
            <use href="/public/sprite.svg#icon-lightning" />
          </svg>
          <p className={css.featureText}>Take user orders form online</p>
        </li>
        <li className={css.featureItem}>
          <svg width="20" height="20">
            <use href="/public/sprite.svg#icon-lightning" />
          </svg>
          <p className={css.featureText}>Create your shop profile</p>
        </li>
        <li className={css.featureItem}>
          <svg width="20" height="20">
            <use href="/public/sprite.svg#icon-lightning" />
          </svg>
          <p className={css.featureText}>Manage your store</p>
        </li>
        <li className={css.featureItem}>
          <svg width="20" height="20">
            <use href="/public/sprite.svg#icon-lightning" />
          </svg>
          <p className={css.featureText}>Get more orders</p>
        </li>
        <li className={css.featureItem}>
          <svg width="20" height="20">
            <use href="/public/sprite.svg#icon-lightning" />
          </svg>
          <p className={css.featureText}>Storage shed</p>
        </li>
      </ul>
    </div>
  );
}
