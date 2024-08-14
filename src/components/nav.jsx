import { useState } from "react";
import arfanLogo from "../images/arfan-logo.webp";

import { Link } from "react-router-dom";
export function Nav() {
  const [sideBar, setSideBar] = useState(false);
  const showsideBar = sideBar
    ? "bg-[#201f1f] w-max pr-10 h-full py-10 mx-auto  fixed top-0 z-20 border-white flex flex-col"
    : " hidden";
  const showsideBarBackground = sideBar
    ? "bg-[#201f1f] opacity-50 w-full h-full  fixed z-10"
    : " hidden";
  return (
    <>
      <div className="bg-[#201f1f]  text-[#fafafa] h-10 text-4xl pl-4 m-0 font-medium sticky top-0 w-full z-30">
        <p
          className="cursor-pointer max-w-max"
          onClick={() => setSideBar(!sideBar)}
        >
          ≡
        </p>
      </div>
      <nav className={showsideBar}>
        <Link
          to="/"
          className="mx-auto  pl-10 "
        >
          <img
            className="  w-36 "
            src={arfanLogo}
            alt=""
          />
        </Link>
        <ul className="text-[#fafafa] flex flex-col  ">
          <a
            className="flex items-center mb-4  "
            href="https://maps.app.goo.gl/nFMwx9z3pejVo9wp6"
            target="_blank"
          >
            <img
              className="w-8 h-8 invert mx-4"
              src="https://i.postimg.cc/d3w6q7d0/icono-ubicacion.webp"
              alt=""
            />

            <p href="/">Ubicación</p>
          </a>
          <Link
            to="/turnos"
            className="flex items-center mb-4"
          >
            <img
              className="w-8 h-8 invert mx-4"
              src="https://i.postimg.cc/SNVTxGgb/icono-calendario.webp"
              alt=""
            />
            Pedir turno
          </Link>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 invert mx-4"
              src="https://i.postimg.cc/PxGKRV5Y/icono-peluqueria.webp"
              alt=""
            />
            <a href="/">Trabaja con nosotros</a>
          </li>
        </ul>
        <section className=" flex flex-row justify-center  mb-2 absolute bottom-0 w-full ">
          <a
            className="mb-2  flex flex-row items-center"
            href="https://www.instagram.com/arfan_since2009/"
            target="_blank"
          >
            <img
              className="w-6 h-6 invert "
              src="https://i.postimg.cc/90bpzWtY/instagram-logo.webp"
              alt=""
              loading="lazy"
            />
          </a>
          <a
            className="ml-4 mb-2 flex flex-row items-center"
            href="https://api.whatsapp.com/send?phone=541160166488&text=Hola%2C%20c%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20pedir%20un%20turno..."
            target="_blank"
          >
            <img
              className="w-6 h-6 invert "
              src="https://i.postimg.cc/c4DhSLJs/whatsapp-logo.webp"
              alt=""
              loading="lazy"
            />
          </a>
        </section>
      </nav>
      <div
        className={showsideBarBackground}
        onClick={() => setSideBar(!sideBar)}
      ></div>
    </>
  );
}
