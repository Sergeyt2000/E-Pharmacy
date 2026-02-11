import css from "./BannerOff.module.css";

export default function BannerOff() {
  return (
    <div className={css.sale}>
      <div className={css.header}>
        <p className={css.number}>1</p>
        <h2 className={css.title}>Off</h2>
      </div>
      <div className={css.footer}>
        <p className={css.persent}>35%</p>
        <a href="#" className={css.link}>
          Shop Now
        </a>
      </div>
    </div>
  );
}
