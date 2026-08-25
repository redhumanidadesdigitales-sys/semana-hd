import ColorBar from "../../ColorBar/ColorBar";

const Hero = () => {
  return (
    <section className="section-hd bg-gray-50">
      <div className="lg:flex lg:flex-row justify-center items-center w-11/12 xl:w-10/12 py-10">
        <div className="lg:w-1/2 p-4">
          <img
            src={`${import.meta.env.BASE_URL}images/semanahd.png`}
            alt="Semana de Humanidades Digitales"
            width={1200}
            className="block"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 p-4 2xl:pl-10 text-center">
          <p className="mb-12 md:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-10">
          La <a href="https://twitter.com/search?q=%23SemanaHD&src=typed_query" target="_blank" rel="noopener noreferrer">#SemanaHD</a> es un evento abierto, gratuito y colaborativo  que se propone como un espacio en línea para dar a conocer proyectos  e iniciativas de Humanidades digitales en América Latina y el Caribe.  Si tienes un evento relacionado con las humanidades digitales (charlas, paneles, mesas de debates y talleres, etcétera) que ocurra entre el 3 y el 9 de noviembre, te invitamos a compartirlo y visibilizarlo en esta plataforma.</p>
          <ColorBar />
          <h4 className="mt-12 text-green_hd font-semibold text-xl md:text-2xl xl:text-3xl">
            del 3 al 9 de noviembre de 2026
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
