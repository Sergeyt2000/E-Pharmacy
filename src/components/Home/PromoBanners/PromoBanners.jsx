import css from "./PromoBanners.module.css";
import BannerSale from "./BannerSale/BannerSale";
import BannerDelivery from "./BannerDelivery/BannerDelivery";
import BannerOff from "./BannerOff/BannerOff";

export default function PromoBanners() {
  return (
    <div className={css.promoBanners}>
      <BannerSale />
      <BannerDelivery />
      <BannerOff />
    </div>
  );
}