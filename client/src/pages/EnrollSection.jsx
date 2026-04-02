import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import sectionsData from "../data/sectionsData";

function EnrollSection() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const section = sectionsData.find((item) => item.slug === slug);

  const [formData, setFormData] = useState({
    parentName: "",
    childFullName: "",
    childAge: "",
    phone: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Сначала войдите в аккаунт");
      return;
    }

    const enrollments =
      JSON.parse(localStorage.getItem("enrollments")) || [];

    enrollments.push({
      userEmail: user.email,
      section: section.title,
      ...formData
    });

    localStorage.setItem("enrollments", JSON.stringify(enrollments));

    alert("Заявка отправлена");
    navigate("/profile");
  };

  if (!section) {
    return (
      <div style={{ padding: "40px" }}>
        Секция не найдена
      </div>
    );
  }

  return (
    <section className="form-section">
      <div className="form-card large-form">
        <h2>Запись в секцию: {section.title}</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="parentName"
            placeholder="ФИО родителя"
            value={formData.parentName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="childFullName"
            placeholder="ФИО ребёнка"
            value={formData.childFullName}
            onChange={handleChange}
          />

          <input
            type="number"
            name="childAge"
            placeholder="Возраст ребёнка"
            value={formData.childAge}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="note"
            placeholder="Дополнительно"
            value={formData.note}
            onChange={handleChange}
          />

          <button type="submit" className="glow-btn">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnrollSection;