import React, { useEffect, useState } from "react";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import DatePicker from "react-datepicker";
import turnServices from "../services/turnServices";
import { InputBarber } from "../components/inputBarber";
import { InputHourMinute } from "../components/inputHour-Minute";
export function Turn() {
  const hours = [
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
  ];
  const [message, setMessage] = useState(" ");
  const [barber, setBarber] = useState("Alexis");
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [freeTurns, setFreeTurns] = useState([]);
  const [selectedHour, setSelectedHour] = useState("13");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [freeHours, setFreeHours] = useState([]);
  const [success, setSuccess] = useState([]);
  const [showform, setShowForm] = useState(true);
  // console.log(startDate);
  useEffect(() => {
    if (!selectedHour || !barber || !selectedMinute) {
      return;
    }

    turnServices
      .getTurns({
        date: startDate,
        barber: barber,
      })
      .then((response) => {
        // console.log(response);
        if (response.length === 20) {
          setMessage("No hay turnos disponibles para esa fecha");
          setTimeout(() => {
            setMessage(" ");
          }, 2000);
          return;
        }
        let responseTurns = [];
        response.map((res) => responseTurns.push(res.hour));
        // console.log(responseTurns);
        setFreeTurns(hours.filter((hour) => !responseTurns.includes(hour)));
      })
      .catch((error) => console.log(error));
  }, [startDate, barber]);
  useEffect(() => {
    if (freeTurns.length === 0) {
      return;
    }
    // console.log(freeTurns);
    setShowForm(true);

    setFreeHours([...new Set(freeTurns.map((turn) => turn.split(":")[0]))]);
    setSelectedHour(freeTurns[0].split(":")[0]);
    setSelectedMinute(freeTurns[0].split(":")[1]);
  }, [freeTurns]);
  const formSubmit = (event) => {
    event.preventDefault();
    if (!event.target.name.value || !startDate || !selectedHour || !selectedMinute || !barber) {
      setMessage("Datos incompletos");
      setTimeout(() => {
        setMessage(" ");
      }, 2000);
      return;
    }

    turnServices
      .newTurn({
        date: startDate,
        hour: `${selectedHour}:${selectedMinute}`,
        barber: barber,
        client: event.target.name.value,
      })
      .then((response) => {
        // console.log(response);
        setSuccess([response.date, response.hour]);
        setTimeout(() => {
          setSuccess([]);
        }, 2000);
        setFreeTurns(freeTurns.filter((turn) => turn !== `${selectedHour}:${selectedMinute}`));
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
        setTimeout(() => {
          setMessage(" ");
        }, 2000);
      });
  };

  // console.log(freeTurns);
  const MyCalendar = () => {
    const handleDateChange = (date) => {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      if (date < tomorrow) {
        setMessage("No puedes seleccionar una fecha pasada");
        setTimeout(() => {
          setMessage(" ");
        }, 2000);
        return;
      } else if (tomorrow.setDate(tomorrow.getDate() + 31) < date) {
        setMessage("No puedes seleccionar una fecha sueprior a 31 dias");
        setTimeout(() => {
          setMessage(" ");
        }, 2000);
        return;
      } else if (new Date(date).getDay() === 0) {
        setMessage("Lo sientimos, el domingo no hay turnos");
        setTimeout(() => {
          setMessage(" ");
        }, 2000);
        return;
      }
      setMessage(" ");
      setStartDate(date.setHours(0, 0, 0, 0));
    };

    // const filterDate = (date) => {
    //   const today = new Date().setHours(0, 0, 0, 0);
    //   const nextMonth = new Date().setDate(new Date().getDate() + 31);
    //   return date >= today && date <= nextMonth;
    // };

    return (
      <div className="flex flex-col justify-center items-center">
        <h3 className="my-2 text-xl">Selecciona una fecha</h3>

        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          // filterDate={filterDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecciona una fecha"
          className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
      </div>
    );
  };
  return (
    <>
      <Nav />
      {message !== " " ? (
        <div className="bg-red-600 w-56 h-max mt-10 absolute top-0 left-0 rounded-lg px-4 py-2 text-sm">
          <p className="text-sm font-bold text-[#fafafa]"> {message}</p>
        </div>
      ) : (
        ""
      )}
      {success.length > 0 ? (
        <>
          <section className="w-full h-full fixed  z-20 ">
            <div className="bg-white w-2/3 h-1/3 mx-auto justify-center items-center flex flex-col text-center mt-20 rounded-lg">
              <img
                className="w-16 mb-4"
                src="https://i.postimg.cc/LXzvKkJ7/icono-success.png"
                alt=""
              />
              <h1 className="text-balance w-full">
                Turno resevado para el {success[0].split("T")[0]} a las {success[1]}
              </h1>
            </div>
          </section>
          <div className="bg-[#201f1f] opacity-50 w-full pr-10 h-full py-10 mx-auto  fixed top-0 z-10 border-white flex flex-col"></div>
        </>
      ) : (
        ""
      )}
      <main className="h-max  mt-12 ">
        <MyCalendar />

        {showform ? (
          <form
            action=""
            onSubmit={formSubmit}
            className="flex flex-col mt-4 w-full h-max "
          >
            {/* select barber */}
            <InputBarber
              setBarber={setBarber}
              barber={barber}
            />
            {/* select hour and minute */}

            <InputHourMinute
              freeTurns={freeTurns}
              freeHours={freeHours}
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              selectedMinute={selectedMinute}
              setSelectedMinute={setSelectedMinute}
            />
            {/* intruduce name */}

            <section className="mx-auto flex flex-col items-center">
              <p className="">Ingresa tu nombre</p>
              <input
                type="text"
                name="name"
                placeholder="Ingresa tu nombre..."
                required
                className="w-44 mx-auto h-10 bg-white border border-gray-300 rounded-lg  text-sm text-gray-900 px-2"
              />
            </section>
            <button
              className="w-32 ml-auto  mt-4 mr-6 h-10 bg-[#FFBD59] border border-gray-300 rounded-lg  text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            >
              Pedir turno
            </button>
          </form>
        ) : (
          ""
        )}
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <Footer />
    </>
  );
}
