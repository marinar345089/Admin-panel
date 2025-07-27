import React from "react";
import User from "./User";

export default function Table({ users, onRemove, onEdit }) {
  return (
    <div className="table">
      <div className="table__header">
        <div className="col col-big">Learners</div>
        <div className="col">Language</div>
        <div className="col">Occupation</div>
        <div className="col">Objective</div>
        <div className="col">Subscription</div>
        <div className="col"></div>
      </div>
      {users.map((user) => (
        <User key={user.id} user={user} onRemove={onRemove} onEdit={onEdit} />
      ))}
      <div className="table__footer"></div>
    </div>
  );
}
