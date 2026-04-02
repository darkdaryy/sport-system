function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Пользователь",
    email: "example@mail.com"
  };

  const allEnrollments = JSON.parse(localStorage.getItem("enrollments")) || [];

const enrollments = allEnrollments.filter(
  (item) => item.userEmail === user.email
);

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

          {enrollments.length === 0 ? (
            <p>Пока заявок нет</p>
          ) : (
            <ul>
              {enrollments.map((item, index) => (
                <li key={index}>
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
            window.location.href = "/";
          }}
        >
          Выйти
        </button>
      </div>
    </section>
  );
}

export default Profile;