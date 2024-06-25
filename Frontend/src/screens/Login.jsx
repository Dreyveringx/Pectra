import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LayoutDates from "../Components/LayoutDates";
import backgroundImage from "../assets/backgroundPectra.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    documentNumber: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { documentNumber, password } = formData;

    if (!documentNumber || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const url = "http://localhost/PECTRA/Backend/formLogin.php";

    const data = new FormData();
    data.append('documentNumber', documentNumber);
    data.append('password', password);

    axios.post(url, data)
      .then(response => {
        alert(response.data);
        if (response.data === "Success!") {
          navigate('/dashboard');
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data);
        } else {
          alert("Error: " + error.message);
        }
      });
  };

  const fields = [
    { id: 'documentNumber', label: 'Usuario', type: 'number', placeholder: 'Usuario', required: true },
    { id: 'password', label: 'Contraseña', type: 'password', placeholder: 'Contraseña', required: true }
  ];

  return (
    <LayoutDates>
      <section className="flex items-center justify-center min-h-screen bg-bg">
        <div 
          className="absolute top-1/2 left-1/2 w-11/12 max-w-[400px] p-6 md:p-10 my-5 transform -translate-x-1/2 -translate-y-[55%] bg-opacity-90 box-border shadow-[0_15px_25px_rgba(0,0,0,0.6)] rounded-lg" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p className="mb-8 text-black text-center text-2xl font-bold font-ti tracking-wide">
            Iniciar Sesión
          </p>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div className="relative mb-8" key={field.id}>
                <input
                  required={field.required}
                  type={field.type}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full py-2.5 text-lg text-black bg-transparent border-b border-cuar outline-none focus:border-ter placeholder-transparent peer"
                  placeholder={field.placeholder}
                />
                <label className={`absolute top-0 left-0 py-2.5 text-lg text-black transition-all duration-300 transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-xs ${formData[field.id] ? 'text-xs -top-6' : ''}`}>
                  {field.label}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="relative inline-block px-5 py-2.5 font-bold text-black uppercase transition duration-500 overflow-hidden mt-10 tracking-wider hover:bg-ter hover:bg-opacity-65 hover:text-gray-800 rounded"
            >
              <span className="absolute block top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-ter animate-[btn-anim1_1.5s_linear_infinite]"></span>
              <span className="absolute block top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-ter animate-[btn-anim2_1.5s_linear_infinite_delay-375ms]"></span>
              <span className="absolute block bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent to-ter animate-[btn-anim3_1.5s_linear_infinite_delay-750ms]"></span>
              <span className="absolute block bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-ter animate-[btn-anim4_1.5s_linear_infinite_delay-1125ms]"></span>
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-4 text-black font-pa text-sm">
            ¿No tienes una cuenta?{" "}
            <a
              href="/Registration"
              className="text-cuar font-bold font-ti no-underline hover:bg-transparent hover:text-ter hover:rounded"
            >
              ¡Regístrate!
            </a>
          </p>
        </div>
      </section>
    </LayoutDates>
  );
};

export default Login;
