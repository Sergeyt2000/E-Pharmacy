import css from "./BuyMedicine.module.css";

export default function BuyMedicine() {
    return (
      <div className={css.buyMedicine}>
        <div className={css.content}>
          <h2 className={css.title}>Add the medicines you need online now</h2>
          <p className={css.description}>
            Enjoy the convenience of having your prescriptions filled from home
            by connecting with your community pharmacy through our online
            platform.
          </p>
          <button className={css.button}>Buy medicine</button>
        </div>
        <img width="608" height="406" src="/public/Images/buy_medicine.png" alt="Buy Medicine" />
      </div>
    );
}