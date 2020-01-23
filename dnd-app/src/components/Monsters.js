import React from 'react';
import { connect } from "react-redux";

import MonsterCard from './MonsterCard';


const Monsters = (props) => {
  return (
    <div>
      <h2>Monsters Component</h2>
      <button>Show Monsters</button>
      <MonsterCard />
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  monsters: state.monsters,
  error: state.error
})

export default connect(mapStateToProps, {})(Monsters)