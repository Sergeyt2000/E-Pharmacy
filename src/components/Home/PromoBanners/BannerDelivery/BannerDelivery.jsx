import css from "./BannerDelivery.module.css";

export default function BannerDelivery() {
  return (
    <div className={css.sale}>
      <div className={css.header}>
        <p className={css.number}>2</p>
        <h2 className={css.title}>Secure delivery</h2>
      </div>
      <div className={css.footer}>
        <p className={css.persent}>100%</p>
        <a href="#" className={css.link}>
          Shop Now
        </a>
      </div>
    </div>
  );
}
