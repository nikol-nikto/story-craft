import * as React from "react";
import { useState, useEffect } from "react";
import "./LandingPage.css";

import Header from "../../components/Header/Header";
import HeroBlock from "../../components/HeroBlock/HeroBlock";
import Modal from "../../components/Modal/Modal";
import OneClick from "../../components/OneClick/OneClick";
import GuideBlock from "../../components/GuideBlock/GuideBlock";
import ForWhoBlock from "../../components/ForWhoBlock/ForWhoBlock";
import HundredPlusBlock from "../../components/HundredPlusBlock/HundredPlus";
import InviteBlock from "../../components/InviteBlock/InviteBlock";
import FAQBlock from "../../components/FAQBlock/FAQBlock";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-block");
      if (!hero) return;

      const heroBottom = hero.offsetHeight;
      setHasScrolledPastHero(window.scrollY > heroBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        hasScrolledPastHero={hasScrolledPastHero}
      />

      <HeroBlock
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />

      {isModalOpened ? (
        <Modal
          isModalOpened={isModalOpened}
          setIsModalOpened={setIsModalOpened}
        />
      ) : (
        ""
      )}

      <OneClick />

      <GuideBlock />

      <ForWhoBlock />

      <HundredPlusBlock />

      <InviteBlock
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />

      <FAQBlock />

      <Footer />
    </div>
  );
}

export default LandingPage;
