import React, { useContext, useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import RoomContext from "../RoomContext";
import StyledH from "../components/StyledHero";

function SingleRoom(props) {
  const [state, setState] = useState({
    slug: props.match.params.slug,
    defaultBcg,
  });
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(state.slug);
  console.log(room);
  // const {
  //   name,
  //   breakfast,
  //   capacity,
  //   description,
  //   extras,
  //   images,
  //   pets,
  //   price,
  //   size,
  // } = state.slug;

  return (
    <>
      {!room ? (
        <div className="error">
          <h3> No Such Room...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      ) : (
        <>
          <StyledH img={room.images[0] || state.defaultBcg}>
            <Banner title={` ${room.name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to Rooms
              </Link>
            </Banner>
          </StyledH>
          <section className="single-room">
            <div className="single-room-images">
              {room.images.map((item, index) => {
                return <img src={item} key={index} alt={room.name} />;
              })}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>Details</h3>
                <p>{room.description}</p>
              </article>
              <article className="info">
                <h3>Info</h3>
                <h6>price: ${room.price} </h6>
                <h6>size: ${room.size} SQFT </h6>
                <h6>
                  Max Capacity: {room.capacity}
                  {room.capacity > 1 ? `people` : `person`}
                </h6>
                {room.pets ? <h6>Pets allowed</h6> : <h6>No pets allowed</h6>}
                <h6>{room.breakfast && "free breakfast included"}</h6>
              </article>
              <article className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                  {room.extras.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </article>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default SingleRoom;
