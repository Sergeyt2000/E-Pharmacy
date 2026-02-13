import css from './ReviewCard.module.css';

export default function ReviewCard() {
    return (
      <div className={css.reviewCard}>
        <h3 className={css.reviewName}>Name</h3>
        <img
          className={css.reviewImage}
          src="/public/Images/test.png"
          alt="Review Image"
        />
        <p className={css.reviewTestimonial}>
          I recently used this medical platform to book an appointment with a
          specialist, and I was impressed by how easy and user-friendly the
          process was. Highly recommended!
        </p>
      </div>
    );
}