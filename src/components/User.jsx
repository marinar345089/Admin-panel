import React from "react";
import remove from "../assets/trash_bin.svg";
import edit from "../assets/edit.svg";
import flag from "../assets/flag.svg";
import photo from "../assets/photo.svg";

export default function User({ user, onRemove, onEdit }) {
  return (
    <div className="user">
      <div className="col col-big">
        <img src={photo} alt="" />
        <div className="user__info">
          <div className="user__origin">
            <p className="user__name">{user.name}</p>
            <img src={flag} alt="" />
          </div>
          <p className="email">{user.email}</p>
        </div>
      </div>
      <div className="col">{user.language}</div>
      <div className="col">{user.occupation}</div>
      <div className="col">{user.objective}</div>
      <div className="col">{user.subscription}</div>
      <div className="col">
        <img src={remove} alt="" onClick={() => onRemove(user.id)} />
        <img src={edit} alt="" onClick={() => onEdit(user)} />
      </div>
    </div>
  );
}
