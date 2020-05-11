import React from 'react';
import monsterImg from '../../src/images/monsterImg.png';

const MonsterCard = (props) => {
  return (
    <div className="monsterBox">
      {props.monsters.map(item => {
        return (
          <div key={item.name} className="card" >
            <h3 className="name" >{item.name}</h3>

            <div className="alignmentDetails">
              
              {item.alignment === 'chaotic evil' ? 
                <p className="alignment">{item.alignment}***</p>
              : 
                <p className="alignment">{item.alignment}</p>}
            </div>

            {item.img_main ?
              <img className="img" src={item.img_main} />
            :
              <img className="img" src={monsterImg} />}

            <div className="physicalDetails">
              <p className="type">{item.type}</p>
              <p className="size">{item.size}</p>
            </div>

            <div className="stats">
              <span className="ac">AC: {item.armor_class}</span>
              <span className="hp">HP: {item.hit_points}</span>
            </div>

            <div className="additionalDetails">
              <p className="language"><span className="languageTitle">Languages:</span> {item.languages}</p>
              <div><span className="actionTitle">Actions: </span>{item.actions.map(item => {
                return <p key={item.name} className="actionName">{item.name}</p>
              })}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MonsterCard