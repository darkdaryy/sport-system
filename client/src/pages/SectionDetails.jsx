import { useParams, Link } from "react-router-dom";
import sectionsData from "../data/sectionsData";

function SectionDetails() {
  const { slug } = useParams();

  const section = sectionsData.find((item) => item.slug === slug);

  if (!section) {
    return (
      <section className="sections">
        <h2>Секция не найдена</h2>
      </section>
    );
  }

  return (
    <section className="details-page">
      <div className="details-card">
        <div className="details-top">
          <div className="details-icon">{section.icon}</div>
          <div>
            <h2>{section.title}</h2>
            <p className="details-text">{section.shortDescription}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="info-block">
            <h3>Тренер</h3>
            <div className="coach-box">
              <div className="coach-avatar">{section.coach.avatar}</div>
              <div>
                <h4>{section.coach.name}</h4>
                <p>{section.coach.bio}</p>
              </div>
            </div>
          </div>

          <div className="info-block">
            <h3>Заслуги</h3>
            <ul>
              {section.coach.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-block">
            <h3>Группы</h3>
            <ul>
              {section.groups.map((group, index) => (
                <li key={index}>{group}</li>
              ))}
            </ul>
          </div>

          <div className="info-block">
            <h3>Расписание</h3>
            <ul>
              {section.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link to={`/sections/${section.slug}/enroll`} className="glow-btn enroll-link">
          Записаться в секцию
        </Link>
      </div>
    </section>
  );
}

export default SectionDetails;