import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
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
    note: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("Сначала войдите в аккаунт");
      return;
    }

    try {
      await api.post("/enrollments", {
        userEmail: user.email,
        section: section.title,
        ...formData,
      });

      setSuccess("Заявка успешно отправлена");

      setTimeout(() => {
        navigate("/profile");
      }, 800);
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка при отправке заявки");
    }
  };

  if (!section) {
    return <div style={{ padding: "40px" }}>Секция не найдена</div>;
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
            required
          />

          <input
            type="text"
            name="childFullName"
            placeholder="ФИО ребёнка"
            value={formData.childFullName}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="childAge"
            placeholder="Возраст ребёнка"
            value={formData.childAge}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="note"
            placeholder="Дополнительно"
            value={formData.note}
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <button type="submit" className="glow-btn">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnrollSection;