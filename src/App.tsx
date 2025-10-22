import React, { useState, useEffect } from "react";
import "./App.css";
import './locales/i18n.ts';

import Header from "./components/header/header";
import HeroBlock from "./components/heroBlock/heroBlock";
import OneClick from "./components/oneClick/oneClick";
import GuideBlock from "./components/guideBlock/guideBlock";
import ForWhoBlock from "./components/forWhoBlock/forWhoBlock";
import HundredPlusBlock from "./components/hundredPlusBlock/hundredPlus";
import GetInviteBlock from "./components/getInviteBlock/getInviteBlock";
import FaqBlock from "./components/faqBlock/faqBlock";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/modal";

function App() {
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
    <div className="App">
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

      <GetInviteBlock
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />

      <FaqBlock />

      <Footer />
    </div>
  );
}

export default App;
