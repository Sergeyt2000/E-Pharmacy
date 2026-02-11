import css from './Hero.module.css';

export default function Hero() {
    return (
      <section className={css.hero}>
        <div className={css.mainBlock}>
          <h1 className={css.title}>Your medication delivered</h1>
          <p className={css.subtitle}>
            Say goodbye to all your healthcare worries with us
          </p>
        </div>
      </section>
    );
}