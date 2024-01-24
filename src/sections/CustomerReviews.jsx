import { reviews } from "../constants";
import Reviews from "../components/Reviews";

const CustomerReviews = () => {
  return (
    <section className="flex flex-col align-middle justify-center text-center gap-5 max-container">
      <div className=" text-4xl font-bold font-palanquin">
        What Our <span className=" text-coral-red">Customers</span> Say?
      </div>
      <div className=" m-auto mt-4 max-w-lg  text-center info-text ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </div>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col ">
        {reviews.map((review) => (
          <Reviews key={review.label} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
