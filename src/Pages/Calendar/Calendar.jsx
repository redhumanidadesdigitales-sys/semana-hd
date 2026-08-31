import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetails from "../../Components/EventDetails/EventDetails";
import "./Calendar.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

function Calendar() {
  const [items, setItems] = useState(null);
  const [eventDetails, setEventDetails] = useState([]);
  const [speakersDetails, setSpeakersDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}hd2025-events?populate=*filters[eventdate][$gte]=2025-05-06T00:00:00.00Z&pagination[pageSize]=200&sort[0]=eventdate:asc`,
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

  const handleEventClick = (eventId) => {
    fetch(`${STRAPI_URL}hd2025-events?filters[id][$eq]=${eventId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((dataEvent) => {
        setEventDetails(dataEvent.data[0]);
        fetch(
          `${STRAPI_URL}hd2025-speakers?filters[hd_2025_event][id][$eq]=${eventId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((dataSpeakers) => {
            setSpeakersDetails(dataSpeakers.data);
            setShowDetails(true);
          });
        document.getElementById("event-details").style.display = "block";
      });
  };

  const handleHideEventClick = () => {
    setShowDetails(false);
  }

  const CalendarEmbed = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Conference Calendar"
                src="https://calendar.google.com/calendar/embed?src=987891a4e6f6d5f504c0d03049834c8b422ff070ccb2154e876c0b2581c67c5b%40group.calendar.google.com&dates=20260801/20260830&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showTabs=0"
        className="w-full h-full border-0"
        style={{ minHeight: "600px" }}
      ></iframe>
    </div>
  );
}

  return (
    <>
      {showDetails && (
        <EventDetails
          eventDetails={eventDetails}
          speakersDetails={speakersDetails}
          onEventClick={handleHideEventClick}
        />
      )}
      <section className="section-hd" id="calendar">
        <div className="w-full max-w-screen-xl mx-auto">
          <header>
            <h1>Calendario</h1>
            <NavLink to="/" className="index-link bg-red_hd">
              Regresar al inicio
            </NavLink>
          </header>
          <div>
            <p>
              El calendario se actualiza constantemente, las fechas y horas de
              los eventos pueden cambiar y se agregan nuevos eventos
              regularmente.
            </p>
            <p>
              Los eventos se visualizan en la zona horaria de tu navegador. Si
              necesitas ver la zona horaria de tu navegador o comparar con otra
              zona horaria puedes ir al sitio{" "}
              <a
                href="https://time.is/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                time.is
              </a>
              .
            </p>
          </div>
           <div className="w-full mt-12">
      <div className="w-full h-[600px]">
        <CalendarEmbed />
      </div>
    </div>
        </div>
      </section>
    </>
  );
}

export default Calendar;
