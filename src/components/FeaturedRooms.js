import React, { useContext } from "react";
import RoomContext from "../RoomContext";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

function FeaturedRooms() {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);
  console.log(rooms);
  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />

      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;
