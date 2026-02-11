import css from "./HomePage.module.css";
import Hero from "../../components/Home/Hero/Hero";
import PromoBanners from "../../components/Home/PromoBanners/PromoBanners";
import NearestStore from '../../components/Home/NearestStore/NearestStore';
// import BuyMedicine from '../../components/Home/BuyMedicine/BuyMedicine';
// import Features from '../../components/Home/Features/Features';
// import Reviews from '../../components/Home/Reviews/Reviews';

export default function HomePage() {
  return (
    <div className={css.container}>
      <Hero />
      <div className={css.content}>
          <PromoBanners />
          <NearestStore />
          {/* <BuyMedicine /> */}
          {/* <Features /> */}
          {/* <Reviews /> */}
      </div>
    </div>
  );
}
