import { feedback } from '../constants';
import { quotes } from '../assets';

const Testimonials = () => {
  return (
    <section id="about" className="grid text-white">
      <div className="lg:grid lg:grid-cols-2 items-center mb-20">
        <h3 className="text-2xl sm:text-5xl font-medium sm:leading-[1.6] mb-4 lg:w-2/3">
          What people are saying about us
        </h3>
        <p className="text-white/80 sm:text-lg lg:w-7/12">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {feedback.map(feedback => (
          <div
            key={feedback.id}
            className="space-y-4 p-5 rounded-lg bg-black-gradient flex flex-col justify-between"
          >
            <img src={quotes} alt="quote image" className="w-10 h-10" />
            <p>{feedback.content}</p>
            <div className="flex items-center gap-6">
              <img
                src={feedback.img}
                alt="profile photo"
                className="w-12 h-12"
              />
              <div>
                <h4>{feedback.name} </h4>
                <p className="text-white/80">{feedback.title} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
