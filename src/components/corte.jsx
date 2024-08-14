export function Corte({ name = "", img = "" }) {
  return (
    <div className=" mt-4 flex flex-col items-center">
      <img
        className=" w-36 h-auto rounded-2xl  shadow-[2px_-1px_3px_2px_#0000004d]
        md:w-48 md:h-auto md:rounded-3xl"
        src={img}
        alt=""
        loading="lazy"
      />
      <p className="text-xl mt-1 md:text-2xl">{name}</p>
    </div>
  );
}
