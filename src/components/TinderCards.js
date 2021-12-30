import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "../components/TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
  ]);

  const swiped = (direction, nametoDelete) => {
    console.log("Removing" + nametoDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
    //setLastDirection(direction);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            on
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{
                backgroundImage: "url(" + person.url + ")",
              }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
