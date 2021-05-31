import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import RoomContext from "../RoomContext";
import Loading from "./Loading";

function RoomContainer() {
  const { rooms, sortedRooms, loading } = useContext(RoomContext);
  //   console.log({ featuredRooms, getRoom, rooms });

  //   const val = (value) => console.log(value);
  if (loading) return <Loading />;
  return (
    <div>
      Rooms Container
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default RoomContainer;
