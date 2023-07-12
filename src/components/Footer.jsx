import { logo, facebook, twitter, linkedin, instagram } from '../assets';

const Footer = () => {
  return (
    <div className="text-white mb-8">
      <div className="text-white/60 grid gap-8 sm:grid-cols-2 sm:gap-14 md:grid-cols-5 md:gap-20 mb-8">
        <div className="md:col-span-2">
          <img src={logo} alt="logo" />
          <p className="w-3/4 mt-4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <p className="text-white mb-4">Usefull Links</p>
          <ul className="space-y-1">
            <li>
              <a href="#/">Content</a>
            </li>
            <li>
              <a href="#/">How it Works</a>
            </li>
            <li>
              <a href="#/">Create</a>
            </li>
            <li>
              <a href="#/">Explore</a>
            </li>
            <li>
              <a href="#/">Terms & Services</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white mb-4">Community</p>
          <ul className="space-y-1">
            <li>
              <a href="#/">Help Center</a>
            </li>
            <li>
              <a href="#/">Partners</a>
            </li>
            <li>
              <a href="#/">Suggestions</a>
            </li>
            <li>
              <a href="#/">Blog</a>
            </li>
            <li>
              <a href="#/">Newsletters</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white mb-4">Partner</p>
          <ul className="space-y-1">
            <li>
              <a href="#/">Our Partners</a>
            </li>
            <li>
              <a href="#/">Become a Partner</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-600/40 h-[1px]" />

      <div className="py-5 flex flex-col sm:flex-row gap-4 justify-between">
        <p className="text-white/80">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex items-center gap-10">
          <img className="cursor-pointer" src={instagram} alt="instagram" />
          <img className="cursor-pointer" src={facebook} alt="facebook" />
          <img className="cursor-pointer" src={twitter} alt="twitter" />
          <img className="cursor-pointer" src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
