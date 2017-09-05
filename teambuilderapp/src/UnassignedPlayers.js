import React from 'react';

function UnassignedPlayers(props) {
  return (
    <div className="box Unassigned">
      <h2>Unassigned Players</h2>
      <ul className="PlayersList">
        <li>
          <button className="teambtn a">A</button>
          Malik Robinson
          <button className="teambtn b">B</button>
        </li>
        <li>
          <button>A</button>
          Chris Hamilton
          <button>B</button>
        </li>
        <li>
          <button>A</button>
          Miguel Hernandez
          <button>B</button>
        </li>
        <li>
          <button>A</button>
          Victoria Echevarria
          <button>B</button>
        </li>
      </ul>
    </div>
  )
}
export default UnassignedPlayers;
