import { star, shield, send } from '../assets';

const Business = () => {
  return (
    <section
      id="features"
      className="grid md:grid-cols-2 gap-8 md:gap-20 py-28 text-white font-poppins "
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-white/80 mb-12 text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="px-5 py-3 text-black bg-blue-gradient rounded-[10px] mb-16 font-medium">
          Get Started
        </button>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-start justify-start items-center gap-4">
          <div className="flex justify-center items-center w-16 h-16 p-4 rounded-full bg-[#00F6FF]/10 ">
            <img src={star} alt="star icon" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 font-semibold">Rewards</h4>
            <p className="text-white/80 mb-10">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start justify-start items-center gap-4">
          <div className="flex justify-center items-center w-16 h-16 p-4 rounded-full bg-[#00F6FF]/10 ">
            <img src={shield} alt="shield icon" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 font-semibold">100% Secured</h4>
            <p className="text-white/80 mb-10">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start justify-start items-center gap-4">
          <div className="flex justify-center items-center w-16 h-16 p-4 rounded-full bg-[#00F6FF]/10 ">
            <img src={send} alt="send icon" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 font-semibold">Balance Transfer</h4>
            <p className="text-white/80 mb-10">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
