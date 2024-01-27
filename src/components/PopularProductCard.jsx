import StarsImage from "./StarsImage.jsx";
import { products } from "../constants";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  //  IN this part I was traying to add img of the starts, depending which rating th user gave, try later.

  // const starsImage = () => {
  //   // if (Number(rating) === 1) {
  //   //   <img src={star} alt="rating" width={24} height={24} />;
  //   //   <img src={star} alt="rating" width={24} height={24} />;
  //   // }
  // };
  // let i = 0;

  // for (i; i < 4; i++) {
  //   const productRating = products[i].rating;
  //   console.log(productRating);
  // }

  return (
    <div className="flex flex-1 flex-col w-full max-sm:items-center">
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px]" />
      <div className=" mt-8 flex justify-start gap-2.5">
        <StarsImage />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className=" mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className=" mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
