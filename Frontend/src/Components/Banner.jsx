import Picture from "../assets/Picture.svg";
import logo from "../assets/logo_pectra.svg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center lg:h-auto lg:w-screen  flex justify-center"
      style={{ backgroundImage: `url(${Picture})` }}
    >
      <div className="flex flex-col mt-20 lg:mt-32 items-center">
        <img src={logo} className="lg:w-96 h-auto" />
        <div className="flex text-center flex-col bg-b lg:w-full rounded-3xl lg:mt-12 mt-3 mx-4">
          <div className="lg:mx-28 mx-2 lg:mb-28 mb-5">
            <h1 className="font-ti font-bold text-3xl  lg:mt-20 mt-5">
              ¡Hola! te damos la bienvenidad a PECTRA
            </h1>
            <p className="text-2xl font-pa font-normal lg:mt-16 mt-4">
              Tu solución para agendar citas de salón de belleza de manera
              sencilla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
