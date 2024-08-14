export function InputHourMinute({
  freeTurns,
  freeHours,
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
}) {
  return (
    <section className="flex flex-row justify-center w-full items-center mb-4 mx-auto">
      <p className=" mr-2 flex items-center w-[70px]  ">Horario</p>
      <select
        name=""
        id=""
        value={selectedHour}
        onChange={(e) => setSelectedHour(e.target.value)}
        className="bg-white border border-gray-300 rounded-md  text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500
               cursor-pointer w-[75px] h-8 px-1"
      >
        {Array.isArray(freeHours) &&
          freeHours.map((freeHour) => {
            return (
              <option
                key={freeHour}
                value={freeHour}
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "#333333",
                  backgroundImage: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {freeHour}
              </option>
            );
          })}
      </select>
      <select
        name=""
        id=""
        value={selectedMinute}
        onChange={(e) => setSelectedMinute(e.target.value)}
        className="bg-white border border-gray-300 rounded-md  text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500
               cursor-pointer w-20 h-8 ml-1 px-1"
      >
        {freeTurns.length > 0
          ? freeTurns.map((freeTurn, index) => {
              if (freeTurn && freeTurn.split(":")[0] === selectedHour) {
                return (
                  <option
                    key={freeTurn.split(":")[1]}
                    value={freeTurn.split(":")[1]}
                  >
                    {freeTurn.split(":")[1]}
                  </option>
                );
              }
              return null; // or return an empty string, depending on your requirements
            })
          : ""}
      </select>
    </section>
  );
}
