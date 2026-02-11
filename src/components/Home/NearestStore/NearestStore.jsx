import css from './NearestStore.module.css';
import StoreCard from './StoreCard/StoreCard.jsx';

export default function NearestStore() {
    return (
      <div className={css.nearestStore}>
        <h2>Your Nearest Medicine Store</h2>
            <p>Search for Medicine, Filter by your location</p>
            <ul>
                <li><StoreCard/></li>
                <li>Store 2 - 1.2 miles away</li>
                <li>Store 3 - 2.0 miles away</li>
            </ul>
      </div>
    );
}