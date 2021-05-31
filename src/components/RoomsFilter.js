import React, { useContext } from "react";
import RoomContext from "../RoomContext";
import Title from "./Title";

function RoomsFilter({ rooms }) {
  const {
    featuredRooms,
    getRoom,
    handleChange,
    breakfast,
    capacity,
    loading,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    price,
    pets,
    type,
  } = useContext(RoomContext);
  //

  const getUnique = (items = [], value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(rooms, "type");

  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}

export default RoomsFilter;
