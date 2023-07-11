const Stats = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mt-5 text-white">
      <div className="flex items-center gap-5">
        <span className="text-lg md:text-4xl font-bold">
          3800<span className="align-top md:align-text-top">+</span>{' '}
        </span>{' '}
        <span className="uppercase text-gradient text-sm md:text-lg self-end mb-1 ">
          user active
        </span>
      </div>
      <div className="hidden sm:block">|</div>
      <div className="flex items-center gap-5">
        <span className="text-lg md:text-4xl font-bold">
          230<span className="align-top md:align-text-top">+</span>
        </span>{' '}
        <span className="uppercase text-gradient text-sm md:text-lg self-end mb-1 ">
          trusted by company
        </span>
      </div>
      <div className="hidden sm:block">|</div>
      <div className="flex items-center gap-5">
        <span className="text-lg md:text-3xl font-bold">
          $230M<span className="align-top md:align-text-top">+</span>
        </span>{' '}
        <span className="uppercase text-gradient text-sm md:text-lg self-end mb-1 ">
          Transaction
        </span>
      </div>
    </div>
  );
};

export default Stats;
