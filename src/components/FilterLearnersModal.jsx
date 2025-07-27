import React, { useState } from "react";
import close from "../assets/close.svg";

export default function FilterLearnersModal({ isOpen, onClose, onSubmit }) {
  const [selectedFilters, setSelectedFilters] = useState({
    language: "",
    objective: "",
    subscription: "",
  });
  function handleChange(name, value) {
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  }
  function clearAll() {
    setSelectedFilters({ language: "", objective: "", subscription: "" });
    onSubmit({ language: "", objective: "", subscription: "" });
  }
  return (
    <div
      className={isOpen ? "filter__modal filter-modal__open" : "filter__modal"}
    >
      <div className="filter-learners-modal__container">
        <div className="filter__header">
          <h4 className="filter-learners-modal__title">Filter learners</h4>
          <button className="close-filters__btn" onClick={onClose}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="filter__field">
          <div className="filter__option">
            <p className="filter__text">Language</p>
            <select
              className="select__language"
              value={selectedFilters.language}
              onChange={(event) => handleChange("language", event.target.value)}
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
          <div className="filter__option">
            <p className="filter__text">Objective</p>
            <div className="options">
              <label className="select__option">
                <button
                  class={
                    selectedFilters.objective === "Junior"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.objective === "Junior"
                      ? handleChange("objective", "")
                      : handleChange("objective", "Junior")
                  }
                ></button>
                <span className="checkmark">Junior</span>
              </label>
              <label className="select__option">
                <button
                  class={
                    selectedFilters.objective === "Middle"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.objective === "Middle"
                      ? handleChange("objective", "")
                      : handleChange("objective", "Middle")
                  }
                ></button>
                <span className="checkmark">Middle</span>
              </label>
              <label className="select__option">
                <button
                  class={
                    selectedFilters.objective === "Senior"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.objective === "Senior"
                      ? handleChange("objective", "")
                      : handleChange("objective", "Senior")
                  }
                ></button>
                <span className="checkmark">Senior</span>
              </label>
            </div>
          </div>
          <div className="filter__option">
            <p className="filter__text">Subscription</p>
            <div className="options">
              <label className="select__option">
                <button
                  class={
                    selectedFilters.subscription === "Free Trial"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.subscription === "Free Trial"
                      ? handleChange("subscription", "")
                      : handleChange("subscription", "Free Trial")
                  }
                ></button>
                <span className="checkmark">Free Trial</span>
              </label>
              <label className="select__option">
                <button
                  class={
                    selectedFilters.subscription === "Weekly"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.subscription === "Weekly"
                      ? handleChange("subscription", "")
                      : handleChange("subscription", "Weekly")
                  }
                ></button>
                <span className="checkmark">Weekly</span>
              </label>
              <label className="select__option">
                <button
                  class={
                    selectedFilters.subscription === "Monthly"
                      ? "checkbox checkbox__checked"
                      : "checkbox"
                  }
                  onClick={() =>
                    selectedFilters.subscription === "Monthly"
                      ? handleChange("subscription", "")
                      : handleChange("subscription", "Monthly")
                  }
                ></button>
                <span className="checkmark">Monthly</span>
              </label>
            </div>
          </div>
        </div>
        <button
          className="apply-filters__btn"
          onClick={() => onSubmit(selectedFilters)}
        >
          Apply
        </button>
        <button className="clear-filters__btn" onClick={clearAll}>
          Clear all
        </button>
      </div>
    </div>
  );
}
