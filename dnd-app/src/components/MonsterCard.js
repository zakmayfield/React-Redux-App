import React from 'react';

const MonsterCard = (props) => {
  return (
    <div>
      {props.monsters.map(item => {
        return <p key={item.name}>{item.name}</p>
      })}
    </div>
  )
}

export default MonsterCard