import { Link } from "react-router-dom";
import backgroundImage from "../assets/backgroundPectra.svg";
import Salon from '../assets/Salon.svg';
import Hairdressers from '../assets/Philip_Vukelich___NYC_Photographer___How_to_make_a_hand-painted_canvas_photography_backdrop-removebg-preview 1.svg';

const Benefit = () => {
    return (
        <div id="benefits"
      className="bg-cover bg-center lg:h-auto lg:w-screen  flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div  className='max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 mb-10 lg:mt-32 mt-14'>
    
    <div className='flex justify-center'>
        <img src={Salon} className='lg:w-auto lg:h-64 w-auto h-52' alt="Salon" />
    </div>
    <div className='flex justify-center'>
        <p className='text-2xl font-pa font-normal lg:mx-28 mx-10'>
            Transforma la gestión de tu negocio.
            Optimiza tus citas, aumenta la visibilidad en línea y brinda a tus clientes una experiencia excepcional
        </p>
    </div>
    
    
    <div className='flex justify-center'>
        <p className='text-2xl font-pa font-normal lg:mx-28 mx-10 mb-4 flex flex-col text-left '>
            Desde la programación sencilla hasta las herramientas de marketing, estamos aquí para ayudarte a crecer. ¿Quieres saber más?
            
                <Link to="Benefits" className='bg-lin rounded-xl px-4 py-2 mt-8 ring-2 ring-black hover:bg-ter text-center font-ti text-xl'><b>Descubre todos los beneficios</b></Link>
            
        </p>
    </div>
    <div className='flex justify-center'>
        <img src={Hairdressers} className='w-auto h-64' alt="Hairdressers" />
    </div>
</div>
</div>

    );
};

export default Benefit;
