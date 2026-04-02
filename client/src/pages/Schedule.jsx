import sectionsData from "../data/sectionsData";

function Schedule() {
  return (
    <section className="sections">
      <h2>Расписание тренировок</h2>

      <div className="cards">
        {sectionsData.map((section) => (
          <div className="card" key={section.id}>
            <div className="section-icon">{section.icon}</div>
            <h3>{section.title}</h3>

            {section.schedule.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schedule;