import { appStore, googlePlay, bill } from '../assets';

const Billing = () => {
  return (
    <section
      id="solutions"
      className="text-white font-poppins grid md:auto-cols-fr md:grid-flow-col md:gap-28 mb-20"
    >
      <div>
        <img src={bill} alt="bill image" className="mb-8" />
      </div>

      <div className="place-self-center ">
        <h3 className="text-2xl sm:text-5xl mb-4 font-medium sm:leading-[1.6] ">
          Easily control your billing & invoicing.
        </h3>
        <p className="text-white/80 mb-6 sm:text-lg md:w-3/4">
          lit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.E
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

export default Billing;
