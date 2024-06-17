import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LayoutDates from "../Components/LayoutDates";
import backgroundImage from "../assets/backgroundPectra.svg";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    role: '',
    agreeTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName, lastName, email, password, confirmPassword,
      age, documentType, documentNumber, phone, role, agreeTerms
    } = formData;

    if (!firstName) {
      alert("Name has left blank!");
    } else if (!lastName) {
      alert("Last Name has left blank!");
    } else if (!email) {
      alert("Email has left blank!");
    } else if (!password) {
      alert("Password has left blank!");
    } else if (!confirmPassword) {
      alert("Confirm Password has left blank!");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else if (!age) {
      alert("Age has left blank!");
    } else if (!documentType) {
      alert("Document type has left blank!");
    } else if (!documentNumber) {
      alert("Document number has left blank!");
    } else if (!phone) {
      alert("Phone has left blank!");
    } else if (!role) {
      alert("Role has left blank!");
    } else if (!agreeTerms) {
      alert("You must agree to the terms!");
    } else {
      const url = "http://localhost/PECTRA/Backend/formRegister.php";

      let fData = new FormData();
      Object.keys(formData).forEach(key => fData.append(key, formData[key]));

      axios.post(url, fData)
        .then(response => {
          alert(response.data);
          if (response.data === "Success!") {
            navigate('/login');
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            alert(error.response.data);
            window.location.reload();
          } else {
            alert("Error: " + error.message);
          }
        });
    }
  };

  const fields = [
    { id: 'firstName', label: 'Nombre', type: 'text', required: true },
    { id: 'lastName', label: 'Apellidos', type: 'text', required: true },
    { id: 'email', label: 'Correo', type: 'email', required: true },
    { id: 'password', label: 'Contraseña', type: 'password', required: true },
    { id: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password', required: true },
    { id: 'age', label: 'Edad', type: 'number', min: '18', max: '120', required: true },
    { id: 'documentType', label: 'Tipo de documento', type: 'select', options: [
      'Cédula de ciudadanía', 'Tarjeta de extranjería', 'NIT', 'Pasaporte'
    ], required: true },
    { id: 'documentNumber', label: 'Número de documento', type: 'number', required: true },
    { id: 'phone', label: 'Número de teléfono', type: 'tel', required: true },
    { id: 'role', label: 'Rol', type: 'select', options: [
      'Usuario', 'Salón de Belleza'
    ], required: true },
    { id: 'agreeTerms', type: 'checkbox', required: true }
  ];

  return (
    <LayoutDates>
      <div className="bg-bg flex h-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-16">
          <div className="ring-1 ring-cuar shadow-md rounded-md p-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Únete Ahora!
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field.id} className={field.type === 'checkbox' ? "flex items-center space-x-2" : ""}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <div className="mt-1">
                    {field.type === 'select' ? (
                      <select
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                        className="px-2 py-3 mt-1 block w-full rounded-md border bg-in focus:bg-ter focus:bg-opacity-20 border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm"
                      >
                        <option value="" disabled>
                          Seleccione una opción
                        </option>
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'checkbox' ? (
                      <>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          checked={formData[field.id]}
                          onChange={handleChange}
                          required={field.required}
                          className="h-4 w-4 text-ter focus:ring-ter border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          Acepto los <a href="#" className="text-cuar underline"><b>términos y condiciones de uso</b></a>
                        </span>
                      </>
                    ) : (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                        min={field.min}
                        max={field.max}
                        className="px-2 py-3 mt-1 block w-full rounded-md bg-in focus:bg-ter focus:bg-opacity-20 border border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm"
                      />
                    )}
                  </div>
                </div>
              ))}
              <div>
                <button
                  id="send"
                  name="send"
                  value="SEND"
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-cuar hover:bg-ter hover:text-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75  focus:ring-2"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutDates>
  );
};

export default Registration;
