import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import ButtonShopMe from "../components/ButtonShopMe";
import ButtonViewDetails from "../components/ButtonViewDetails";
function SpecialOfers() {
  return (
    <section
      id="SpecialOffer"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className=" flex-1 sm:mt-28">
        <img
          src={offer}
          alt="ImageOffer"
          width={773}
          height={687}
          className=" md:max-w-[610px]"
        />
      </div>
      <div className=" flex-1 align-top justify-center p-5 max-md:max-w-lg mt-24 ">
        <h1 className=" text-4xl font-palanquin font-bold ">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <div className=" text-xl font-palanquin text-slate-gray info-text">
          <p className=" my-5">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div className=" mt-5 flex gap-5 max-xl:justify-center">
          <ButtonShopMe label="Shop now" iconURL={arrowRight} />
          <ButtonViewDetails label="View Detals" />
        </div>
      </div>
    </section>
  );
}
export default SpecialOfers;
