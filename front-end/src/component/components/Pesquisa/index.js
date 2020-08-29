import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FiChevronDown, FiFilter } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { MdApps, MdClose } from 'react-icons/md';

import './styles.css';

class Card extends React.Component {
  
  render() {
    return (
      //<div className="card">
        <div id="header-borderPesa">
          <div id="pacotSerch11">
            <div id="inputSearch1">
              <GoSearch className="icon"/>
              <input type="text" placeholder="Pesquisa" />
            </div>
          </div>
        </div>
      //</div>
    );
  }
}
export default Card;
