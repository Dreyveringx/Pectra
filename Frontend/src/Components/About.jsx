import backgroundImage from "../assets/backgroundPectra.svg";
import Logo from "../assets/logo_pectra.svg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-cover bg-center lg:h-auto lg:w-screen flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:my-32">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <p className="text-2xl font-pa font-normal text-left mt-10 mx-5 lg:m-5 lg:mx-2 mb-4">
            <b>Somos la puerta a la belleza, la eficiencia y la comodidad. En PECTRA, hemos transformado la forma en que te conectas con tus clientes y gestionas tu salón. Nuestra pasión es simplificar tu vida y potenciar tu éxito, ofreciendo una experiencia de agendamiento de citas sin igual. Descubre el futuro de la belleza hoy mismo.</b>
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img src={Logo} className="w-auto h-auto lg:w-full" alt="Salon" />
        </div>
      </div>
    </div>
  );
}

export default About;
