import { useRoutes, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ColorBar from "../../Components/ColorBar/ColorBar";
import Home from "../Home/Home";
import Proposal from "../Proposal/Proposal";
import Calendar from "../Calendar/Calendar";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import semanahdLogo from '/images/semanahd-logo.jpg';
import RHD from '/images/rhd.png';
import AAHD from '/images/aahd.png';
import logoRCHD from '/images/rchd.png';




const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/proposal", element: <Proposal /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/calendar/:id", element: <CalendarEvent /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <BrowserRouter basename="/semana-hd">
      <nav>
        <NavLink to="/">
          <img
            src={semanahdLogo}
            alt="Semana de Humanidades Digitales"
            width={158}
          />
        </NavLink>
        <a
          href="https://unam.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="https://cuaieed.unam.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="https://aahd.net.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="https://rchd.com.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="http://humanidadesdigitales.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={RHD}
            alt="Red de Humanidades Digitales"
            width={60}
          />
        </a>
        {/*<NavLink to="/proposal" className="proposal">
          Propón un evento
  </NavLink>*/}
        <ColorBar />
      </nav>
      <AppRoutes />
      <footer>
       
      </footer>
    </BrowserRouter>
  );
}

export default App;
