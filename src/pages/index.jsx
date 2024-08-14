import { Corte } from "../components/corte";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
export function Index() {
  return (
    <>
      <Nav />
      <header
        className="bg-[#201f1f] h-[140px] flex flex-row items-center m-0
      md:h-[250px]"
      >
        <img
          className="w-36 h-36  ml-4  
          md:w-72 md:h-auto md:ml-10"
          src="https://i.postimg.cc/rsknKZ6M/arfan-logo.webp"
          alt=""
        />

        <section
          className="w-full  flex flex-col items-end
        "
        >
          <img
            className="mr-4 max-w-64 min-w-14  w-full h-auto
            md:hidden"
            src="https://i.postimg.cc/Vk67rbhr/h1-image.webp"
            alt=""
          />
          <img
            className="hidden mr-4  w-3/5 h-auto
            md:flex"
            src="https://i.postimg.cc/L53yfkRf/h1-big-image.webp"
            alt=""
          />
          <div
            className="flex  items-center 
          md:w-3/5 "
          >
            <Link
              to="/turnos"
              className="bg-[#FFBD59] text-[#343434] text-nowrap rounded-xl w-40 h-8 my-4 mr-4 flex justify-center items-center
              md:w-3/5 md:h-10 md:text-base lg:text-xl"
            >
              Pide tu turno
            </Link>
            <a
              className="bg-[#fafafa] text-sm text-nowrap rounded-xl w-40 h-8 my-4 mr-4 justify-center items-center hidden
            md:flex md:w-3/5 md:h-10 md:text-base lg:text-xl"
            >
              {" "}
              Trabaja con nosotros
            </a>
          </div>
        </section>
      </header>
      <main
        className="mt-14 mb-20 max-w-full
      md:mt-28"
      >
        <h3 className=" text-3xl ml-4 font-bold text-[#201f1f] md:ml-10">CORTES</h3>
        <section
          className=" grid grid-cols-2 mx-4
        md:grid-cols-3 md:mx-10"
        >
          <Corte
            name="Ciro"
            img="https://i.postimg.cc/qv518vfm/ciro-corte-image-min.webp"
          />
          <Corte
            name="Rodri"
            img="https://i.postimg.cc/X7NLmC4H/rodri-corte-image-min.webp"
          />
          <Corte
            name=""
            img="https://i.postimg.cc/FKkDGXNh/fade-corte-image-min.webp"
          />
        </section>
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
}
