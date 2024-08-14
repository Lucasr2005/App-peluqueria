export function InputBarber({ setBarber, barber }) {
  return (
    <section className="flex flex-row justify-center w-full items-center mb-4 mx-auto">
      <p className="mr-2 flex items-center w-[70px]">Peluquero</p>
      <select
        name=""
        id=""
        value={barber}
        onChange={(e) => setBarber(e.target.value)}
        className="bg-white border border-gray-300 rounded-md  text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500
               cursor-pointer w-40 h-8"
      >
        <option value="Alexis">Alexis</option>
        <option value="Eric">Eric</option>
      </select>
    </section>
  );
}
