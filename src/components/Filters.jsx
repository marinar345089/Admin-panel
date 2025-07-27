import React from "react";
import plus from "../assets/plus.svg";
import magnifier from "../assets/magnifier.svg";
export default function Filters({ onOpen, onOpenFilter, onSearch, search }) {
  return (
    <div className="filters">
      <div className="filters__left">
        <button className="filters__select" onClick={onOpenFilter}>
          Filters
        </button>
        <button className="filters__btn" onClick={onOpen}>
          <img src={plus} alt="" />
          <span>Add User</span>
        </button>
      </div>
      <div className="search">
        <img src={magnifier} alt="" />
        <input
          value={search}
          type="text"
          className="search__input"
          placeholder="Search"
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  );
}
