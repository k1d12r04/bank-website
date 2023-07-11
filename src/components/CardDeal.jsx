import { appStore, googlePlay, card } from '../assets';

const CardDeal = () => {
  return (
    <section
      id="solution"
      className="text-white font-poppins grid md:auto-cols-fr md:grid-flow-col md:gap-28 "
    >
      <div className="md:order-2">
        <img src={card} alt="card deal image" className="mb-8" />
      </div>

      <div className="place-self-center md:order-1">
        <h3 className="text-2xl sm:text-5xl mb-4 font-medium sm:leading-[1.6] ">
          Find a better card deal in few easy steps.
        </h3>
        <p className="text-white/80 mb-6 sm:text-lg md:w-3/4">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <img
            className="border-2 border-white/80 rounded-md cursor-pointer"
            src={appStore}
            alt="get on app store"
          />
          <img
            className="border-2 border-white/80 rounded-md cursor-pointer"
            src={googlePlay}
            alt="get on google play"
          />
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
