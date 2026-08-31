import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CalendarItem from "../../CalendarItem/CalendarItem";
import "./Calendar.css";

// Handles clicking on a calendar event
const handleEventDetailsClick = (eventId) => {
  window.location.href = "/calendar/" + eventId;
};

const emptyCalendar = () => {
  return (
    <article className="calendar-item">
      <h3>
        Aún no hay eventos programados
        <br />
        ¡Puedes ser el primero!
      </h3>
      <div className="flex flex-column">
        <div className="w-1/2"></div>
        <div className="w-1/2 text-right absolute bottom-4 right-4">
          <NavLink to="/proposal" className="proposal-link">
            Propón un evento
          </NavLink>
        </div>
      </div>
    </article>
  );
};

const emptyItem = () => {
  return <article className="empty-item"></article>;
};

const buildCalendar = (items) => {
  if (items === null || !items.data || !items.data.length) {
    return (
      <>
        {emptyCalendar()}
        {emptyItem()}
        {emptyItem()}
      </>
    );
  } else {
    const calendarItemsLoad = items.data.map((item) => (
      <CalendarItem
        event={item}
        key={item.id}
        onEventClick={handleEventDetailsClick}
      />
    ));

    for (let i = items.data.length; i < 3; i++) {
      calendarItemsLoad.push(emptyItem());
    }

    return calendarItemsLoad;
  }
};

const CalendarEmbed = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Conference Calendar"
        src="https://calendar.google.com/calendar/embed?src=987891a4e6f6d5f504c0d03049834c8b422ff070ccb2154e876c0b2581c67c5b%40group.calendar.google.com&dates=20260801/20260830&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showTabs=0"
        className="w-full h-full border-0"
        
      ></iframe>
    </div>
  );
};

function Calendar() {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}hd2025-events?populate=*filters[eventdate][$gte]=2025-05-06T00:00:00.00Z&sort[0]=updatedAt:desc&pagination[pageSize]=3`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <section className="section-hd calendar-section w-full">
      <div className="p-4 xl:p-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: existing calendar info */}
          <div className="lg:w-1/2 w-full">
            <div className="w-full">
              <h2>Calendario</h2>
              <p>
                El calendario se actualiza constantemente, las fechas y horas de los
                eventos pueden cambiar y se agregan nuevos eventos regularmente.
              </p>
              <p>
                Los eventos se visualizan en la zona horaria de tu navegador. Si
                necesitas ver la zona horaria de tu navegador o comparar con otra
                zona horaria puedes ir al sitio{" "}
                <a
                  href="https://time.is/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  time.is
                </a>
                .
              </p>
              <p>
                Para registrar tu evento por favor continúa al formulario de registro.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf7i4zndLDWvHqzKnvE1Xn-sqBclRvKQe7EZ8r6qAVeZLtAnQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendar-link bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
                >
                  Formulario de registro
                </a>

                <NavLink
                  to="/calendar"
                  className="calendar-link bg-red_hd text-white font-bold py-3 px-6 rounded-lg text-lg transition"
                >
                  Ver calendario
                </NavLink>
              </div>
            </div>
          </div>

          {/* Right column: embedded iframe calendar */}
          <div className="lg:w-1/2 w-full">
            <CalendarEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
