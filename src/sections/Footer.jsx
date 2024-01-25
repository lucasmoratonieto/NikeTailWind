import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
// import { facebook } from "../assets/icons";
// import { twitter } from "../assets/icons";
// import { instagram } from "../assets/icons";

const Footer = () => {
  return (
    <section className="flex align-middle flex-wrap  item-center max-lg:flex-col max-lg:items-center max-w-5xl mx-auto">
      <div>
        <img src={footerLogo} alt={footerLogo} width={200} className="" />
        <p className=" footer-text mt-10 max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex gap-5 align-middle text-center mt-10">
          {socialMedia.map((icon) => (
            <div key={icon.alt} className=" bg-white rounded-full p-3">
              <a href={icon.href} target="_blank">
                <img src={icon.src} alt={icon.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className=" text-white flex gap-10 max-lg:gap-5 md:mx-16 flex-wrap justify-between  flex-1">
        {footerLinks.map((footerLink) => (
          <div>
            <h1 className=" text-3xl font-palanquin font-semibold">
              {footerLink.title}
            </h1>

            <div className=" font-palanquin text-lg leading-8">
              {footerLink.links.map((name) => (
                <p>{name.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
