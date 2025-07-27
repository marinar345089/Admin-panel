import React, { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  language: "",
  occupation: "",
  objective: "",
  subscription: "",
};
export default function Modal({ isOpen, onClose, onSubmit, editUser }) {
  const [userData, setUserData] = useState(initialState);
  useEffect(() => {
    if (editUser) {
      setUserData({
        name: editUser.name,
        email: editUser.email,
        language: editUser.language,
        occupation: editUser.occupation,
        objective: editUser.objective,
        subscription: editUser.subscription,
      });
    } else {
      setUserData(initialState);
    }
  }, [editUser]);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className={isOpen ? "modal modal__open" : "modal"}>
      <div className="modal__container">
        <h2 className="modal__title">{editUser ? "Edit User" : "New User"}</h2>
        <form
          action=""
          className="modal__form"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ id: Date.now(), ...userData });
          }}
        >
          <div className="modal__field">
            <p className="modal__text">Name</p>
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              type="text"
              className="modal__input"
              placeholder="John Doe"
            />
          </div>
          <div className="modal__field">
            <p className="modal__text">E-mail</p>
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              type="email"
              className="modal__input"
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="modal__field">
            <p className="modal__text">Language</p>
            <select
              className="modal__select"
              name="language"
              value={userData.language}
              onChange={handleChange}
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Español">Español</option>
              <option value="Français">Français</option>
              <option value="Deutsch">Deutsch</option>
              <option value="Italiano">Italiano</option>
              <option value="Português">Português</option>
              <option value="Русский">Русский</option>
              <option value="中文">中文</option>
              <option value="日本語">日本語</option>
              <option value="العربية">العربية</option>
              <option value="हिन्दी">हिन्दी</option>
              <option value="한국어">한국어</option>
              <option value="Türkçe">Türkçe</option>
              <option value="Nederlands">Nederlands</option>
              <option value="Svenska">Svenska</option>
              <option value="Polski">Polski</option>
              <option value="Українська">Українська</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="ไทย">ไทย</option>
            </select>
          </div>
          <div className="modal__field">
            <p className="modal__text">Occupation</p>
            <input
              name="occupation"
              value={userData.occupation}
              onChange={handleChange}
              type="text"
              className="modal__input"
              placeholder="Freelancer"
            />
          </div>
          <div className="modal__field">
            <p className="modal__text">Objective</p>
            <select
              className="modal__select"
              name="objective"
              value={userData.objective}
              onChange={handleChange}
            >
              <option value="">Select Objective</option>
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div className="modal__field">
            <p className="modal__text">Subscription</p>
            <select
              className="modal__select"
              name="subscription"
              value={userData.subscription}
              onChange={handleChange}
            >
              <option value="">Select Subscription</option>
              <option value="Free trial">Free Trial</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="modal__buttons">
            <button className="cancel__btn" onClick={onClose} type="button">
              Cancel
            </button>
            <button className="apply__btn" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
