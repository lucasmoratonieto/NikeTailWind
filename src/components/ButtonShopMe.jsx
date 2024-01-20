const Button = ({ label, iconURL }) => {
  return (
    <button className=" relative flex justify-center items-center gap-2 px-7 py-4  font-montserrat rounded-full text-lg leading-none bg-coral-red text-white shadow-2xl overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:before:h-20 hover:before:w-48 hover:shadow-orange-300 ">
      <span className="relative z-10">{label}</span>
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5 relative z-10"
      />
    </button>
  );
};

export default Button;
