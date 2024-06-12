import { Link } from "react-router-dom";
import Comunidad from "../assets/community.svg"
import backgroundImage from "../assets/backgroundPectra.svg";

const Community = () => {
  return (
    <div id="community"
      className="bg-cover bg-center lg:h-auto lg:w-screen  flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center  lg:my-32">
    <div className="flex justify-center lg:w-1/2">
        <img src={Comunidad} className="lg:w-full lg:h-auto" alt="Salon" />
    </div>
    <div className="flex justify-center ">
        <div className="max-w-md flex flex-col items-center">
            <p className="text-2xl font-pa font-normal text-center mx-10 lg:mx-2 mb-4">
            ¡Únete a nuestra vibrante comunidad en línea!
            Descubre un lugar donde la conversación cobra vida, las preguntas encuentran respuestas y donde compartimos conocimientos juntos.
            </p>
            <Link to="Community" className="bg-lin rounded-xl px-4 py-2 ring-2 ring-black hover:bg-ter text-center font-ti text-xl"><b>¡Esperamos verte Allí!</b></Link>
        </div>
    </div>
</div>
</div>

  )
}

export default Community