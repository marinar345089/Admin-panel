import React from "react";
import attention from "../assets/attention.svg";
import close_attention from "../assets/close_attention.svg";

export default function DeleteUserModal({ isOpen, onClose, onSubmit }) {
  return (
    <div
      className={
        isOpen ? "delete-user__modal delete-user__open" : "delete-user__modal"
      }
    >
      <div className="delete-user-modal__container">
        <div className="close__attention">
          <button className="close-attention__btn" onClick={onClose}>
            <img src={close_attention} alt="close" />
          </button>
        </div>
        <div className="delete__title-img">
          <img className="attention__img" src={attention} alt="attention" />
          <h3 className="delete-user-modal__title">
            Are you sure want to delete this user?
          </h3>
        </div>
        <div className="delete-user__buttons">
          <button className="yes__btn" onClick={onSubmit}>
            Yes, I’m sure
          </button>
          <button className="no__btn" onClick={onClose}>
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
}
