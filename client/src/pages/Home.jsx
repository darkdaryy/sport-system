import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <main className="hero">
        <div className="hero-text">
          <h1>Система управления спортивными секциями</h1>
          <p>
            Удобная платформа для записи в секции, просмотра расписания
            тренировок и управления спортивным клубом.
          </p>

          <div className="buttons">
            <Link to="/sections" className="glow-btn home-link-btn">
              Начать
            </Link>

            <button
              className="secondary-btn"
              onClick={() => setShowInfo(!showInfo)}
            >
              Подробнее
            </button>
          </div>
        </div>
      </main>

      {showInfo && (
        <section className="about-site">
          <div className="about-site-card">
            <h2>О нашем сайте</h2>
            <p>
              Этот сайт создан для удобного управления спортивными секциями и
              расписанием тренировок. Здесь родители и ученики могут быстро
              находить нужную секцию, смотреть информацию о тренерах, узнавать
              расписание занятий и отправлять заявку на запись.
            </p>
            <p>
              Платформа помогает упростить процесс выбора спортивного
              направления, делает запись в секции более удобной и позволяет
              хранить информацию о заявках в личном кабинете пользователя.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;