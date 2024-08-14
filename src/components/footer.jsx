export function Footer() {
  return (
    <footer className="bg-[#201f1f] h-max pb-4 m-0 flex flex-col items-start text-[#fafafa] w-full mb-0 md:flex-row">
      <section className=" flex flex-col ml-4 md:w-1/2 md:ml-10">
        <h3 className="my-2  text-xl">Nuestras redes</h3>
        <a
          className="ml-4 mb-2 flex flex-row items-center"
          href="https://www.instagram.com/arfan_since2009/"
          target="_blank"
        >
          <img
            className="w-5 h-5 invert mr-2"
            src="https://i.postimg.cc/90bpzWtY/instagram-logo.webp"
            alt=""
            loading="lazy"
          />
          <p className="text-sm w-max">Arfan_since2009</p>
        </a>
        <a
          className="ml-4 mb-2 flex flex-row items-center"
          href="https://api.whatsapp.com/send?phone=541160166488&text=Hola%2C%20c%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20pedir%20un%20turno..."
          target="_blank"
        >
          <img
            className="w-5 h-5 invert mr-2"
            src="https://i.postimg.cc/c4DhSLJs/whatsapp-logo.webp"
            alt=""
            loading="lazy"
          />
          <p className="text-sm max-w-max">+54 11 6016-6488</p>
        </a>
      </section>
      <section className=" flex flex-col ml-4 md:w-1/2 ">
        <h3 className="my-2  text-xl">Página hecha por</h3>
        <a
          className="ml-4 mb-2 flex flex-row items-center"
          href="https://www.linkedin.com/in/lucas-romero-696383254/"
          target="_blank"
        >
          <img
            className="w-5 h-5 invert mr-2"
            src="https://i.postimg.cc/BZBNmg9P/linkedin-logo.webp"
            alt=""
            loading="lazy"
          />
          <p className="text-sm max-w-max">Lucas Romero</p>
        </a>
      </section>
    </footer>
  );
}
