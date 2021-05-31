import React, { useState, useEffect, useCallback } from "react";
import RoomContext from "./RoomContext";
import items from "./data";

function GlobalState({ children }) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    setState((state) => ({
      ...state,
      rooms: rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
  }, []);

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => {
      return room.slug === slug;
    });
    return room;
  };

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const value = e.type === "checkbox" ? target.checked : target.value;
  //   const name = e.target.name;
  //   setState({
  //     [name]: value,
  //   });
  // };

  const handleChange = (event) => {
    // const target = event.target;
    const value =
      event.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.name;

    setState({ [name]: value });
  };

  const filterRooms = ({ value }) => {
    console.log(value);
  };

  return (
    <RoomContext.Provider
      value={{
        featuredRooms: state.featuredRooms,
        getRoom,
        loading: state.loading,
        rooms: state.rooms,
        sortedRooms: state.sortedRooms,
        handleChange,
        type: state.type,
        capacity: state.capacity,
        price: state.price,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        minSize: state.minSize,
        maxSize: state.maxSize,
        breakfast: state.breakfast,
        pets: state.pets,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default GlobalState;
