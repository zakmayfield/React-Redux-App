import React from 'react';
import { connect } from "react-redux";

import MonsterCard from './MonsterCard';
import { fetchMonsters } from '../actions';


const Monsters = (props) => {
  return (
    <div>
      <button onClick={props.fetchMonsters}>Show Monsters</button>
      <MonsterCard monsters={props.monsters} />
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  monsters: state.monsters,
  error: state.error
})

export default connect(mapStateToProps, { fetchMonsters })(Monsters)