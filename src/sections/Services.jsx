import { truckFast } from "../assets/icons";
import { shieldTick } from "../assets/icons";
import { support } from "../assets/icons";

const Services = () => {
  return (
    <section className="flex flex-wrap gap-9 justify-center max-container">
      <div className="flex-1 min-w-[400px] rounded-[20px] shadow-3xl px-10 py-16 lg:hover:shadow-orange-200 ">
        <div className=" w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
          <img
            src={truckFast}
            alt={truckFast}
            width={24}
            height={24}
            className=" bg-coral-red rounded-full"
          />
        </div>
        <h1 className=" text-3xl font-bold font-palanquin py-2">
          Free shipping
        </h1>
        <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>

      <div className="flex-1 min-w-[400px] rounded-[20px] shadow-3xl px-10 py-16 lg:hover:shadow-orange-200">
        <div className=" w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
          <img
            src={shieldTick}
            alt={shieldTick}
            width={24}
            height={24}
            className=" bg-coral-red rounded-full"
          />
        </div>
        <h1 className=" text-3xl font-bold font-palanquin py-2">
          Secure Payment
        </h1>
        <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          Experience worry-free transactions with our secure payment options.
        </p>
      </div>

      <div className="flex-1 min-w-[400px] rounded-[20px] shadow-3xl px-10 py-16 lg:hover:shadow-orange-200 ">
        <div className=" w-11 h-11 flex justify-center items-center bg-coral-red rounded-full ">
          <img
            src={support}
            alt={support}
            width={24}
            height={24}
            className=" bg-coral-red rounded-full"
          />
        </div>
        <h1 className=" text-3xl font-bold font-palanquin py-2">
          Love to help you
        </h1>
        <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          Our dedicated team is here to assist you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Services;
