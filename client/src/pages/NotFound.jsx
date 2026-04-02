import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="profile-page">
      <div className="profile-card">
        <h2>404</h2>
        <div className="profile-empty">
          <h3>Страница не найдена</h3>
          <p>
            Такой страницы не существует. Возможно, ссылка была введена
            неправильно или страница была удалена.
          </p>

          <div className="profile-empty-actions">
            <Link to="/" className="glow-btn">
              На главную
            </Link>
            <Link to="/sections" className="secondary-btn">
              К секциям
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;