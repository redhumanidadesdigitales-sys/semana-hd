import "./LatamHD.css";

const networkItem = (networkData) => {
  return (
    <article className="network-item">
      <header>
        <h3>{networkData.title}</h3>
        <p>
          <img
            src={networkData.image}
            alt={networkData.title}
            width={networkData.imageWidth}
          />
        </p>
      </header>
      <div className="network-links">
        {networkData.links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${link.image}.png`} alt={link.image} width={32} />
            </a>
          );
        })}
      </div>
    </article>
  );
};

function LatamHD() {
  return (
    <section className="section-hd latamhd-section">
      <div className="lg:w-2/3 xl:w-11/12 2xl:w-10/12 mx-auto px-4 xl:flex xl:flex-col items-center gap-10">
        <div className="w-full">
          <h2 className="text-2xl bg-green_hd text-white p-2 block mb-6">
            LatamHD
          </h2>
          <p>
            LatamHD es una iniciativa que comenzó en 2018 en una reunión de
            humanistas digitales latinoamericanos presentes en el congreso
            DH2018 celebrado en Ciudad de México. La idea de un nodo sobre
            proyectos e información sobre Humanidades Digitales en América
            Latina, más allá de las asociaciones y los grupos ya constituidos,
            fue fortalecida en el congreso de la{" "}
            <a
              href="https://aahd.net.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow_hd"
            >
              AAHD
            </a>{" "}
            que ese mismo año se llevó a cabo en la ciudad de Rosario
            (Argentina).
          </p>
          <p>
            LatamHD busca hoy ser un punto de encuentro para iniciativas comunes
            de la comunidad de humanistas digitales latinoamericanos y/o
            interesados en la investigación sobre las Humanidades Digitales en
            nuestra región.
          </p>
          <p>
            Para comunicarte con nosotros puedes hacerlo a través de la RedHD, encargada de auspiciar esta edición de la SemanaHD:
          </p>
        </div>
        <div className="lg:w-2/3 xl:w-11/12 2xl:w-10/12 mx-auto px-4 xl:flex xl:flex-row items-center gap-10">
          {networkItem({
            title: "Asociación Argentina de Humanidades Digitales",
            image: `${import.meta.env.BASE_URL}images/aahd.png`,
            imageWidth: 120,
            links: [
              {
                url: "https://www.facebook.com/aahdArg/",
                image: `${import.meta.env.BASE_URL}images/facebook-logo`,
              },
              {
                url: "https://twitter.com/aahdArg",
                image: `${import.meta.env.BASE_URL}images/twitter-logo`,
              },
              {
                url: "https://www.facebook.com/groups/humanidadesdigitalesargentina/",
                image: `${import.meta.env.BASE_URL}images/facebookgroups-logo`,
              },
              {
                url: "https://www.instagram.com/humanidadesdigitalesargentina/",
                image: `${import.meta.env.BASE_URL}images/instagram-logo`,
              },
            ],
          })}
          {networkItem({
            title: "Red Colombiana de Humanidades Digitales",
            image: `${import.meta.env.BASE_URL}images/rchd.png`,
            imageWidth: 160,
            links: [
              {
                url: "https://www.facebook.com/redcolhd",
                image: `${import.meta.env.BASE_URL}images/facebook-logo`,
              },
              {
                url: "https://twitter.com/ReHDi_Co",
                image: `${import.meta.env.BASE_URL}images/twitter-logo`,
              },
              {
                url: "https://www.youtube.com/channel/UCR3fSjgX-jXplnpm_wg8rag/featured",
                image: `${import.meta.env.BASE_URL}images/youtube-logo`,
              },
            ],
          })}
          {networkItem({
            title: "Red de Humanidades Digitales",
            image: `${import.meta.env.BASE_URL}images/rhd.png`,
            imageWidth: 136,
            links: [
              {
                url: "https://www.facebook.com/humanidadesdigitalesred",
                image: `${import.meta.env.BASE_URL}images/facebook-logo`,
              },
              {
                url: "https://twitter.com/red_hd",
                image: `${import.meta.env.BASE_URL}images/twitter-logo`,
              },
              {
                url: "https://t.me/RedHumanidadesDigitales",
                image: `${import.meta.env.BASE_URL}images/telegram`,
              },
            ],
          })}
        </div>
      </div>
    </section>
  );
}

export default LatamHD;
