import Layout from "../Components/Layout";
import Vector from "../assets/Vector.svg";
import Time from "../assets/time.svg";
import Notification from "../assets/notification.svg";
import Calendar from "../assets/calendar.svg";
import People from "../assets/chat.svg";
import Rating from "../assets/ratings.svg";

const Benefits = () => {
  return (
    <Layout>
      <section className="bg-bg flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-8 mx-5">
          <div className="mt-80 lg:mt-10">
            <h1 className="lg:text-6xl text-2xl font-ti my-10">BENEFICIOS!</h1>
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-10 items-center">
              <ul className="list-disc text-pa lg:text-3xl text-xl">
                <li className="p-2">
                  Ahorro de tiempo: Reserva tus citas en segundos.
                </li>
                <li className="p-2">Flexibilidad: Programa citas las 24/7.</li>
                <li className="p-2">
                  Recordatorios automáticos: No más citas olvidadas.
                </li>
                <li className="p-2">
                  Historial de citas: Lleva un registro de tus visitas
                  anteriores.
                </li>
                <li className="p-2">
                  Calificaciones y reseñas: Comparte tu experiencia con otros
                  usuarios.
                </li>
              </ul>
              <div className="relative h-40 w-40 mx-auto lg:h-60 lg:w-60 rotating-circle mb-72 lg:mb-0">
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 0 }}
                  src={Vector}
                  alt="Ahorro de tiempo"
                />
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 1 }}
                  src={Time}
                  alt="Flexibilidad"
                />
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 2 }}
                  src={Notification}
                  alt="Recordatorios automáticos"
                />
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 3 }}
                  src={Calendar}
                  alt="Historial de citas"
                />
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 4 }}
                  src={People}
                  alt="Calificaciones y reseñas"
                />
                <img
                  className="circle-img small-icon lg:large-icon"
                  style={{ "--i": 5 }}
                  src={Rating}
                  alt="Rating"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
