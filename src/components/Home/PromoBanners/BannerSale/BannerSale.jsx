import css from "./BannerSale.module.css";

export default function BannerSale() {
  return (
    <div className={css.sale}>
      <div className={css.header}>
          <p className={css.number}>1</p>
          <h2 className={css.title}>Huge Sale</h2>
      </div>
      <div className={css.footer}>
          <p className={css.persent}>70%</p>
          <a href="#" className={css.link}>
            Shop Now
          </a>
      </div>
    </div>
  );
}
