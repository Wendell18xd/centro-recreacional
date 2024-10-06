import { FooterApp } from "./FooterApp";
import { HeaderApp } from "./HeaderApp";
import { AboutApp } from "./main/AboutApp";
import { FeaturesApp } from "./main/FeaturesApp";
import { FutureApp } from "./main/FutureApp";
import { HeroApp } from "./main/HeroApp";

export const HomeApp = () => {
  return (
    <>
      <HeaderApp />
      <HeroApp />
      <FutureApp />
      <AboutApp />
      <FeaturesApp />
      <FooterApp />
    </>
  );
};
