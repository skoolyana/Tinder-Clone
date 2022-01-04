import React, { useState } from "react";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../components/TinderCards.css";
import axios from "../axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
   
    async function fetchData() {

      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }
    
    fetchData();

  }, [])

  console.log(people);

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
                backgroundImage: "url(" + person.imgUrl + ")",
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
