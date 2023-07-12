const CTA = () => {
  return (
    <div className="text-white bg-black-gradient-2 p-6 sm:px-28 sm:py-20 rounded-lg md:flex items-center md:justify-between mb-20">
      <div className="col-span-2">
        <h3 className="text-3xl sm:text-5xl mb-4 font-medium">
          Let’s try our service now!
        </h3>
        <p className="text-white/80 mb-8 md:mb-0 md:w-2/3">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button className="text-black bg-blue-gradient px-5 py-3 rounded-md col-span-1 font-medium flex-shrink-0">
        Get Started
      </button>
    </div>
  );
};

export default CTA;
