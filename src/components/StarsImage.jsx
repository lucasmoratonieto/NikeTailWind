import { star } from "../assets/icons";

const StarsImage = ({ rating }) => {
  // console.log(rating);
  //   if (Number(rating) === 1) {
  return (
    <div>
      <img src={star} alt={star} width={24} height={24} />
    </div>
  );
  //   }
};

export default StarsImage;
