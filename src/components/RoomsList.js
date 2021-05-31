import React, { useContext } from "react";
import RoomContext from "../RoomContext";
import Room from "./Room";

function RoomsList() {
  const { rooms = [] } = useContext(RoomContext);
  if (rooms.length === 0)
    return (
      <div className="empty-search">
        <h3>Unfortunately no room matched your searched paramenters</h3>
      </div>
    );
  else
    return (
      <section className="roomsList">
        <div className="roomslist-center">
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    );
}

export default RoomsList;
