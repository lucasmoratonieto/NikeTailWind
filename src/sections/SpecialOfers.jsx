import {offer} from "../assets/images";


function SpecialOfers() {
  return ( 
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className=" flex-1">
        <img src={ offer } alt="ImageOffer" width={773} height={687} className=" md:max-w-[700px]" />
        </div>
        
        <div className=" flex-1 align-middle justify-center p-5 max-md:max-w-lg">
          <h1 className=" text-4xl font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h1>
          <div className=" text-xl font-palanquin text-slate-gray info-text">
            <p className=" my-5">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          </div>
        </div>
    </section>
  );
}

export default SpecialOfers;
