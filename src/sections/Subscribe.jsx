import ButtonSubscribe from "../components/ButtonSubscribe";
function Subscribe() {
  return (
    <section className="lg:flex lg:gap-44 align-middle justify-center items-center">
      <div className=" text-4xl font-bold font-palanquin max-w-lg leading-[68px] max-lg:m-auto max-lg:mb-10 max-lg:text-center">
        Sign Up for Updates <span className=" text-coral-red">Updates</span> &
        Newsletter
      </div>
      <div className=" flex rounded-full p-4 px border-2 gap-20 max-lg:m-auto max-xl:max-w-lg max-md:max-w-md h-[4.5rem]">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input border-0 "
        />
        <ButtonSubscribe />
      </div>
    </section>
  );
}
export default Subscribe;
