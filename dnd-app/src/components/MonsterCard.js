import React from 'react';
import monsterImg from '../../src/images/monsterImg.png';

const MonsterCard = (props) => {
  return (
    <div className="monsterBox">
      {props.monsters.map(item => {
        return (
          <div key={item.name} className="card" >
            <h3 className="name" >{item.name}</h3>
            {item.img_main ?
              <img className="img" src={item.img_main} />
            :
              <img src={monsterImg} />}
            <p className="type">{item.type}</p>
            <p className="size">{item.size}</p>
            <p className="alignment">Alignment: {item.alignment}</p>
            <div className="stats">
              <span className="ac">AC: {item.armor_class}</span>
              <span className="hp">HP: {item.hit_points}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MonsterCard