import { NavLink } from "react-router-dom"; 
import "./About.css";

const About = () => {
  return (
    <section className="section-hd about-section">
      <div className="lg:flex lg:flex-row lg:gap-8 items-center w-11/12 lg:w-10/12">
        <div className="lg:w-1/2">
          <div className="question">
            <h3>¿Quiénes pueden participar de la SemanaHD?</h3>
            <p>
              Cualquier persona o grupo de investigación que esté trabajando en
              Humanidades Digitales desde cualquier lugar en América Latina y el
              Caribe puede sumarse a la SemanaHD.
            </p>
          </div>
          <div className="question">
            <h3>¿Cómo puedo participar en la Semana HD?</h3>
            <p>
            Para participar de la SemanaHD comparte los datos de tu evento a través del botón del <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA01AOT0HRm5qEWSkE_s7C5KMVYtTs9SHMQpEIB03MZKsyNg/viewform?usp=dialog">Formulario de registro</a>. Asegúrate de compartir toda la información necesaria (hora, día, enlace de acceso) para que cada persona interesada pueda verlo en línea o ingresar a una sesión en plataforma de videoconferencia. Todos los horarios se muestran en tu hora local y se mostrarán a los asistentes en sus respectivas horas locales, no tienes que hacer ningún cálculo.
            </p>
          </div>
          <div className="question">
            <h3>¿Cuándo es la fecha límite para enviar la propuesta?</h3>
            <p>El 18 de septiembre de 2026.</p>
            {/*<p className="mt-4"><NavLink to="/proposal" className="proposal">Propón un evento desde aquí</NavLink></p>*/}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question">
            <h3>¿Qué necesito para participar?</h3>
            <p>Ganas, ideas, y una sala virtual tipo Jitsi, Zoom, Meet, Teams, BigBlueButton. También puedes proponer hacer tu evento directamente en streaming en YouTube. Recuerda que deberás añadir esta información al enviar tu propuesta.</p>
          </div>
          <div className="question">
            <h3>¿Qué me ofrece la SemanaHD?</h3>
            <p>Te ofrecemos nuestra plataforma donde se verá tu evento desde un calendario con fecha, hora y todos los datos que aportes. Te ofrecemos dar difusión a tu evento a través de las redes sociales de la RedHD, la AAHD y la RedCo. También te ofrecemos ser parte del proyecto SemanaHD, sumándote a nuestro canal de <a href="https://t.me/+k6eJFMu9xTxiMTZh">Telegram</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
