import { useState } from "react";
import "../../public/scss/content.scss";
import useBannerStore from "../stores/useBannerStore";

const Content = () => {
  const { banners } = useBannerStore();
  const { bgChanger } = useBannerStore();

  const [currentbanner, setCurrentBanner] = useState(banners[0].photo);
  const changeBanner = (banner: string) => {
    bgChanger(banner);
    setCurrentBanner(banner);
  };

  return (
    <div className="content-box">
      <div className="title-box">
        <span id="span1">DISCOVER</span>
        <span id="span2">PHILIPPINES</span>
      </div>

      <p className="subtitle">
        Welcome to PH Vista Quest, your gateway to the breathtaking beauty of
        the Philippines. Join us to explore through our curated collection of
        stunning vistas, and let your wanderlust be your guide.
      </p>

      <div className="button-box">
        <button className="explore">Explore</button>
      </div>

      <div className="banners-box">
        <div className="banneries">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={
                banner.photo == currentbanner ? "active-banner" : "banner"
              }
              onClick={() => changeBanner(banner.photo)}
            >
              <img
                src={banner.photo}
                alt=""
              />

              <div className="labels">
                <span id="place">{banner.place}</span>
                <span id="main">{banner.main}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
