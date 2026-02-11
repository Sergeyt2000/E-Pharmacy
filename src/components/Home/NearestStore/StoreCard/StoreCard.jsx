import css from "./StoreCard.module.css";

export default function StoreCard() {
  return (
    <div className={css.storeCard}>
      <div className={css.storeHeader}>
        <h3 className={css.storeName}>Store Name</h3>
        <div className={css.storeReiting}>
          <div className={css.rating}>
              <svg width="16" height="16">
                <use href="/public/sprite.svg#icon-star" />
              </svg>
              <p className={css.ratingNumber}>rating number</p>
          </div>
          <button className={css.btn}>OPEN</button>
        </div>
      </div>
      <div className={css.storeInfo}>
        <svg width="18" height="18">
          <use href="/public/sprite.svg#icon-location" />
        </svg>
        <div className={css.address}>
            <p>Address</p>
            <p>City</p>
        </div>
      </div>
      <div className={css.storeInfo}>
        <svg width="18" height="18">
          <use href="/public/sprite.svg#icon-phone" />
        </svg>
        <p>Phone number</p>
      </div>
    </div>
  );
}
