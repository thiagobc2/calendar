import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
//import Grafico from '../Grafico/index'
//import ReactApexChart from '../Grafico/index'

import './styles.css';

class Card1 extends React.Component {

  render() {

    return (
      <div className="card1">
        <div id="head">
          <div id="column">
            <span id="row">
              <FaCalendarCheck/>
              Task List
            </span>
            <label>+ Adicionar item</label>
          </div>
          <div>
            Gráfico
          </div>
        </div>
      </div>
    );
  }
}
export default Card1;
