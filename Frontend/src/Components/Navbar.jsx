import { useEffect, useState } from "react";
import Logo from "../assets/PECTRA.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import '../index.css'

const links = [
  {
    link: "/#benefits",
    text: "Beneficios",
    id: 1,
  },
  {
    link: "/#community",
    text: "Comunidad",
    id: 2,
  },
  {
    link: "/#contact",
    text: "Contáctenos",
    id: 3,
  },
  {
    link: "/login",
    text: "Iniciar Sesión",
    id: 4,
  },
  {
    link: "/registration",
    text: "Registrarse",
    id: 5,
  },
  {
    link: "/#about",
    text: "¿Quienes Somos?",
    id: 6,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension.innerWidth]);

  return (
    <div
      className={
        !isMenuOpen
          ? "flex items-center px-5 w-full justify-around bg-black bg-opacity-80 fixed text-white whitespace-nowrap no-underline "
          : "flex flex-col h-full w-full items-center px-5 justify-around bg-primary fixed text-white whitespace-nowrap no-underline "
      }
    >
      <a href={"/"}>
        <img src={Logo} alt="Logo" className="p-6" />
      </a>
      {windowDimension.innerWidth > 768
        ? links.map((l) => (
            <a
              className={`p-2 m-2 text-xl font-semibold hover:ring-2 hover:ring-ter hover:rounded-lg transition-colors duration-200 ${
                l.text === "Iniciar Sesión" 
                  ? "bg-cuar text-black hover:bg-ter transition-colors duration-300 rounded-lg" 
                  : l.text === "Registrarse"
                    ? "bg-gold text-white hover:text-black ring-4 ring-ter rounded-lg hover:bg-ter"
                    : ""
              }`}
              href={l.link}
              key={l.id}
            >
              {l.text}
            </a>
          ))
        : isMenuOpen &&
          links.map((l) => (
            <a
              className={`p-2 m-2 text-xl font-semibold hover:ring-2 hover:ring-ter hover:rounded-lg transition-colors duration-300 whitespace-nowrap ${
                l.text === "Iniciar Sesión" 
                  ? "bg-cuar text-black hover:bg-ter transition-colors duration-300 rounded-lg" 
                  : l.text === "Registrarse"
                    ? "bg-gold text-white border border-ter rounded-lg"
                    : ""
              }`}
              href={l.link}
              key={l.id}
            >
              {l.text}
            </a>
          ))}
      {!isMenuOpen && windowDimension.innerWidth < 768 ? (
        <AiOutlineMenu
          cursor={"pointer"}
          size={24}
          color="f2f2f2"
          onClick={() => setIsMenuOpen(true)}
        />
      ) : (
        windowDimension.innerWidth < 768 && (
          <AiOutlineClose
            cursor={"pointer"}
            size={24}
            color="f2f2f2"
            onClick={() => setIsMenuOpen(false)}
          />
        )
      )}
    </div>
  );
};

export default Navbar;
