import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./header/header";
import { ReactComponent as EllipseSvgBigger } from "./source/svg/Ellipse_bigger.svg";
import { ReactComponent as EllipseSvgBlack } from "./source/svg/Ellipse_black.svg";

function App() {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

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
      <div className="hero-block" id="hero-block">
        <video width={"100%"} autoPlay loop playsInline muted>
          <source
            src={require("./source/video/hero_block_video2.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <div className="hero-title">
            A whole universe, just one click away
          </div>
          <div className="hero-desc">
            AI platform for instant creation of scripts, visuals,
            <br />
            and animations
          </div>
          <div className="get-invite-btn" style={{ marginBottom: "32px" }}>
            <div className="get-invite-btn-text">Get early access</div>
            <div className="get-invite-btn-ellipses">
              <EllipseSvgBigger style={{ width: "6px" }} />
              <EllipseSvgBigger style={{ width: "18px" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="creation-types">
        <div className="creation-types-title">In one click you can create</div>
        <div className="creation-tipes-list">
          <div className="types-list-item">
            <video width={"100%"} autoPlay loop playsInline muted>
              <source
                src={require("./source/video/anime_video.mp4")}
                type="video/mp4"
              />
            </video>
            <div className="types-list-item-title">Anime</div>
          </div>
          <div className="types-list-item">
            <img
              width={"100%"}
              src={require("./source/image/card-manga.jpg")}
              alt="img"
            />
            <div className="types-list-item-title">Manga</div>
          </div>
          <div className="types-list-item">
            <img
              width={"100%"}
              src={require("./source/image/card-books.jpg")}
              alt="img"
            />
            <div className="types-list-item-title">Books</div>
          </div>
          <div className="types-list-item">
            <video width={"100%"} autoPlay loop playsInline muted>
              <source
                src={require("./source/video/animations_video.mp4")}
                type="video/mp4"
              />
            </video>
            <div className="types-list-item-title">Animations</div>
          </div>
          <div className="types-list-item">
            <video width={"100%"} autoPlay loop playsInline muted>
              <source
                src={require("./source/video/clips_video.mp4")}
                type="video/mp4"
              />
            </video>
            <div className="types-list-item-title">Clips</div>
          </div>
        </div>
      </div>

      <div className="guide-block">
        <div className="guide-block-title">How it works</div>
        <div className="guide-block-grid">
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">Write an idea</div>
            <textarea
              placeholder="I want an anime about a samurai cat in a parallel universe."
              className="guide-grid-item-content"
              style={{ padding: "16px" }}
              rows={2}
            />
          </div>
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">Get the script</div>
            <textarea
              placeholder="create scenes, dialogues, plot..."
              className="guide-grid-item-content"
              style={{ padding: "16px" }}
              rows={2}
            />
          </div>
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">Correct</div>
            <textarea
              placeholder="I want to change the second dialogue to a more dramatic one."
              className="guide-grid-item-content"
              style={{ padding: "16px" }}
              rows={2}
            />
          </div>
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">
              Get storyboards and character designs
            </div>
            <div
              className="guide-grid-item-content"
              style={{ height: "256px" }}
            >
              <img
                width={"100%"}
                src={require("./source/image/cat_image.png")}
                alt="img"
              />
            </div>
          </div>
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">
              Change images and storyboards
            </div>
            <div
              className="guide-grid-item-content"
              style={{ height: "256px" }}
            >
              <img
                width={"100%"}
                src={require("./source/image/cat2_image.png")}
                alt="img"
              />
            </div>
          </div>
          <div className="guide-grid-item">
            <div className="guide-grid-item-title">Animate your story</div>
            <div
              className="guide-grid-item-content"
              style={{ height: "256px" }}
            >
              <video width={"100%"} autoPlay loop playsInline muted>
                <source
                  src={require("./source/video/cat_video.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="for-who-block">
        <div className="for-who-column" style={{ maxWidth: "624px" }}>
          <p
            style={{
              fontSize: "100px",
              fontWeight: "700",
              lineHeight: "105%",
              color: "black",
            }}
          >
            Who is this for?
          </p>
          <p style={{ fontSize: "28px" }}>
            Creators, marketers, screenwriters, teachers, students — everyone
            will find their way to use StoryCraft.
          </p>
        </div>
        <div className="for-who-column" style={{ maxWidth: "493px" }}>
          <p>
            Producing your own book, manga, or anime is expensive and
            complicated.
          </p>
          <p>Or it requires knowledge of many different tools at once.</p>
          <p>
            We've gathered everything in one place, AI speeds up the process,
            and the results are top-quality.
          </p>
        </div>
      </div>

      <div className="hundred-plus-title">
        <p>
          More{" "}
          <span
            style={{
              color: "white",
              backgroundColor: "black",
              padding: "4px 10px",
              borderRadius: "24px",
            }}
          >
            100+
          </span>{" "}
          than people have signed up for closed access
        </p>
        <p style={{ fontSize: "40px", color: "#747474" }}>
          be one of the first
        </p>
      </div>

      <div className="get-invite-block">
        <p>We will send you an invitation</p>
        <div className="get-invite-btn">
          <div className="get-invite-btn-ellipses">
            <EllipseSvgBlack style={{ width: "18px" }} />
            <EllipseSvgBlack style={{ width: "6px" }} />
          </div>
          <div
            className="get-invite-btn-text"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Get early access
          </div>
          <div className="get-invite-btn-ellipses">
            <EllipseSvgBlack style={{ width: "6px" }} />
            <EllipseSvgBlack style={{ width: "18px" }} />
          </div>
        </div>
      </div>

      <div className="faq-block">
        <div className="faq-title">FAQ</div>
        <div className="faq-question">
          <p
            style={{ fontSize: "18px", fontWeight: "600", lineHeight: "105%" }}
          >
            How much does it?
          </p>
          <p>During the beta phase, access is free.</p>
        </div>
        <div className="faq-question">
          <p
            style={{ fontSize: "18px", fontWeight: "600", lineHeight: "105%" }}
          >
            How much does it?
          </p>
          <p>During the beta phase, access is free.</p>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
