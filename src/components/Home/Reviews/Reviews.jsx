import css from "./Reviews.module.css";
import ReviewCard from "./ReviewCard/ReviewCard";

export default function Reviews() {
  return (
    <div className={css.reviews}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <p className={css.reviewsSubtitle}>Search for Medicine, Filter by your location</p>
      <ul className={css.reviewsList}>
        <li className={css.reviewItem}>
          <ReviewCard />
        </li>
        <li className={css.reviewItem}>
          <ReviewCard />
        </li>
        <li className={css.reviewItem}>
          <ReviewCard />
        </li>
      </ul>
    </div>
  );
}
