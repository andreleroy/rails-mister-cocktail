import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Cocktails"],
    typeSpeed: 30,
    loop: false
  });
};

export { loadDynamicBannerText };
