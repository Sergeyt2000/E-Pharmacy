import css from "./AddPharmacyPromo.module.css";
import BuyMedicine from "./BuyMedicine/BuyMedicine";
import Features from "./Features/Features";

export default function AddPharmacyPromo() {
  return (
    <div className={css.addPharmacyPromo}>
      <BuyMedicine />
      <Features />      
    </div>
  );
}