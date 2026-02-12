import css from './NearestStore.module.css';
import StoreCard from './StoreCard/StoreCard.jsx';

export default function NearestStore() {
    return (
      <div className={css.nearestStore}>
        <div className={css.nearestStoreHeader}>
          <h2 className={css.nearestStoreTitle}>Your Nearest Medicine Store</h2>
          <p className={css.nearestStoreSubtitle}>
            Search for Medicine, Filter by your location
          </p>
        </div>
        <ul className={css.storeList}>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
          <li className={css.storeListItem}>
            <StoreCard />
          </li>
        </ul>
      </div>
    );
}