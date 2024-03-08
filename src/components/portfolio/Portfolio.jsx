import React from "react";
import "./portfolio.css";
import weLoveMovies from "../../assets/we-love-movies.jpg";
import omatic from "../../assets/portfolio-o-matic.jpg";
import encryption from "../../assets/portfolio-Encryption-Decryption-Application.png";
import bnb from "../../assets/portfolio-bnb.png";
import reservation from "../../assets/portfolio-rservation.jpg";
import recipeTracker from "../../assets/recipeTracker.png";

const data = [
  {
    id: 1,
    image: weLoveMovies,
    description: "Backend Development",
    title: "We-Love-Movies",
    github: "https://github.com/Mona-Nabil/We_Love_Movies_Backend",
    liveDemo: "https://movies-deployment.onrender.com",
  },
  {
    id: 2,
    image: omatic,
    description: "Frontend Development",
    title: "Flashcard-o-matic",
    github: "https://github.com/Mona-Nabil/Flashcard-o-matic",
    liveDemo: "https://flashcard-bj1y.onrender.com",
  },
  {
    id: 3,
    image: encryption,
    description: "Data Structure and Algorithms",
    title: "Encryption-Decryption",
    github: "https://github.com/Mona-Nabil/Encryption-Decryption-Application",
    liveDemo:
      "https://https-github-com-mona-nabil-git-becd1b-monas-projects-7b5cfe9a.vercel.app",
  },
  {
    id: 4,
    image: bnb,
    description: "Frontend Development",
    title: "Thinkful-bnb Application",
    github: "https://github.com/Mona-Nabil/Thinkful-Bnb",
    liveDemo:
      "https://https-github-com-mona-nabil-thinkful-d3jf7u11v.vercel.app/",
  },
  {
    id: 5,
    image: recipeTracker,
    description: "Frontend Development",
    title: "Recipe Tracker App",
    github: "https://github.com/Mona-Nabil/Recipe-Tracker-app",
    liveDemo: "https://recipe-tracker-app-kw9d.onrender.com",
  },
  {
    id: 6,
    image: reservation,
    description: "Full Stack Development",
    title: "Restaurant Reservation System",
    github: "https://github.com/Mona-Nabil/Restaurant-Reservation-System",
    liveDemo: "https://restaurant-reservations-frontend-ctaz.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Samples of My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, liveDemo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <div className="portfolio__item-description">{description}</div>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {liveDemo && (
                  <a
                    href={liveDemo}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
