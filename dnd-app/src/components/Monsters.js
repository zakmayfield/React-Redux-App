import React from 'react';
import { connect } from "react-redux";

import MonsterCard from './MonsterCard';
import { fetchMonsters } from '../actions';
import Loader from 'react-loader-spinner';


const Monsters = (props) => {
  return (
    <div>
      <button onClick={props.fetchMonsters}>Show Monsters</button>
      <div>
        {!props.isLoading && props.monsters ?
            ''
          :
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />}
        {props.monsters && !props.isLoading
            ?
              <MonsterCard monsters={props.monsters} />
            :
              ''}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  monsters: state.monsters,
  error: state.error
})

export default connect(mapStateToProps, { fetchMonsters })(Monsters)