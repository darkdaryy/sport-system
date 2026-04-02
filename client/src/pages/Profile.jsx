import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setError("");
        const response = await api.get(`/enrollments/${user.email}`);
        setEnrollments(response.data);
      } catch (err) {
        setError("Не удалось загрузить заявки");
        console.log("Ошибка загрузки заявок:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [user]);

  if (!user) {
    return (
      <section className="profile-page">
        <div className="profile-card">
          <h2>Личный кабинет</h2>

          <div className="profile-empty">
            <h3>У вас пока нет аккаунта</h3>
            <p>
              Чтобы пользоваться личным кабинетом, нужно зарегистрироваться
              или войти в уже существующий аккаунт.
            </p>

            <div className="profile-empty-actions">
              <Link to="/register" className="glow-btn">
                Зарегистрироваться
              </Link>

              <Link to="/login" className="secondary-btn">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-card">
        <h2>Личный кабинет</h2>

        <div className="profile-info">
          <div className="profile-avatar">
            {user.name ? user.name[0].toUpperCase() : "U"}
          </div>

          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="profile-block">
          <h3>Мои заявки</h3>

          {loading ? (
            <p>Загрузка заявок...</p>
          ) : error ? (
            <p>{error}</p>
          ) : enrollments.length === 0 ? (
            <p>Пока заявок нет</p>
          ) : (
            <ul>
              {enrollments.map((item) => (
                <li key={item._id}>
                  {item.childFullName} — {item.section} — {item.childAge} лет
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="glow-btn"
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = "/profile";
          }}
        >
          Выйти
        </button>
      </div>
    </section>
  );
}

export default Profile;