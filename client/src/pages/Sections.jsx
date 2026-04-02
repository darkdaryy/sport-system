import { Link } from "react-router-dom";
import sectionsData from "../data/sectionsData";

function Sections() {
  return (
    <section className="sections">
      <h2>Спортивные секции</h2>
      <div className="cards">
        {sectionsData.map((section) => (
          <div className="card" key={section.id}>
            <div className="section-icon">{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.shortDescription}</p>
            <Link to={`/sections/${section.slug}`} className="details-link">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sections;