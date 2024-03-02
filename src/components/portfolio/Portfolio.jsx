import React from "react";
import "./portfolio.css";
import weLoveMovies from "../../assets/we-love-movies.jpg";
import omatic from "../../assets/portfolio-o-matic.jpg";
import encryption from "../../assets/portfolio-Encryption-Decryption-Application.png";
import grubdash from "../../assets/portfolio-dash.png";
import bnb from "../../assets/portfolio-bnb.png";
import reservation from "../../assets/portfolio-rservation.jpg";

const data = [
  {
    id: 1,
    image: weLoveMovies,
    title: "We-Love-Movies",
    github: "https://github.com/Mona-Nabil/We_Love_Movies_Backend",
  },
  {
    id: 2,
    image: omatic,
    title: "Flashcard-o-matic",
    github: "https://github.com/Mona-Nabil/Flashcard-o-matic",
  },
  {
    id: 3,
    image: encryption,
    title: "Encryption-Decryption",
    github: "https://github.com/Mona-Nabil/Encryption-Decryption-Application",
  },
  {
    id: 4,
    image: grubdash,
    title: "Grub-Dash Application",
    github: "https://github.com/Mona-Nabil/Grub-Dash-Project",
  },
  {
    id: 5,
    image: bnb,
    title: "Thinkful-bnb Application",
    github: "https://github.com/Mona-Nabil/Thinkful-Bnb",
  },
  {
    id: 6,
    image: reservation,
    title: "Restaurant-Reservation-System",
    github: "https://github.com/Mona-Nabil/Restaurant-Reservation-System",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Samples of My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
