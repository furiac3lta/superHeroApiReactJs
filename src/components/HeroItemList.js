import React from "react";
import "./../styles/HeroItemList.css";
import HeroItem from './HeroItem'
function HeroItemList({ data }) {
  

  return (
    <div className="HeroItemList">
      <div className="Container">
        <div className="HeroItemList__title">
          <h2>Personajes</h2>
        </div>
        
      </div>
        <div className="Container">
        <div className="Row">
        <div className="Col">
        {data.map((hero) => (
              <HeroItem key={hero.id} hero = {hero} />
              //<h1 key={hero.id}>{hero.name}</h1>
            ))}
        </div>
        </div>
        </div>

    </div>
  );
}

export default HeroItemList;
