import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { useState } from "react";
export function WorkWithUs() {
  const [success, setSuccess] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <>
      <Nav />
      {success ? (
        <>
          <section className="w-full h-full fixed  z-20 ">
            <div className="bg-white w-2/3 h-1/3 mx-auto justify-center items-center flex flex-col text-center mt-20 rounded-lg">
              <img
                className="w-16 mb-4"
                src="https://i.postimg.cc/LXzvKkJ7/icono-success.png"
                alt=""
              />
              <h1 className="text-balance w-full">Tu cv ha sido enviado exitosamente</h1>
            </div>
          </section>
          <div className="bg-[#201f1f] opacity-50 w-full pr-10 h-full py-10 mx-auto  fixed top-0 z-10 border-white flex flex-col"></div>
        </>
      ) : (
        ""
      )}
      <main>
        <h1 className="w-full text-center text-2xl">Trabaja con Nosotros</h1>
        <form
          className="flex flex-col"
          onSubmit={formSubmit}
        >
          <div className="flex flex-col justify-center items-center">
            {" "}
            <p className="w-36 text-center">Introduce tu cv </p>
            <input
              type="file"
              className="bg-white  w-52  text-sm border   border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              required
              accept=".pdf, .doc, .docx"
              name="cv"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-2">
            <p className="w-36 text-center">Introduce tu correo </p>

            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="bg-white w-52   text-sm border   border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              required
              name="email"
            />
          </div>

          <button className="w-32 ml-auto  mt-4 mr-6 h-10 bg-[#FFBD59] border border-gray-300 rounded-lg  text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
