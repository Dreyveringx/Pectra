import backgroundImage from "../assets/backgroundPectra.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-cover bg-center lg:h-auto w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <ul className="flex items-center justify-center md:flex-row  py-10 gap-6 md:gap-12">
            <li>
              <a href="#">
                <img src={Facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Whatsapp} />
              </a>
            </li>
          </ul>
        </div>

        <div className="py-7 border-t border-cuar">
          <div className="flex items-center flex-col-reverse justify-between md:flex-row">
            <span className="text-sm text-ti text-black">
              uncorreo@gmail.com
            </span>
            <div className="flex items-center flex-col  gap-4 md:flex-row">
              <input
                type="text"
                name="email"
                className="py-3 px-6 h-12 border shadow-sm rounded-full focus:border-ter"
                placeholder="Ingresa tu correo..."
              />
              <button className="h-12 py-3.5 px-7 text-sm bg-cuar shadow-sm rounded-full text-black text-ti font-bold hover:bg-ter">
                ¡Suscríbite!
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
