import React from 'react';

import './styles.css';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import EventsCalendar from '../components/Agenda/index.js'
import Card from '../components/Pesquisa/index.js'
import Card1 from '../components/Card1/index.js'
import Card2 from '../components/Card2/index.js'
import Card3 from '../components/Card3/index.js'
//import Teste from '../components/Apis/index.js'

import { MdApps } from 'react-icons/md';
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';

const Page1 = () => (
  <div id="containerPage1">
    <div id="contentSidebar">
      <Sidebar />
      <MdApps id="MdAppAbsolute"/>
    </div>

    <div id="container">
      <div id="contentHeader">
        <Header feed/>
      </div>

      <div className="subContainer">
        <div id="contentNavbar">
          <Navbar/>
        </div>

        <div className="row-top">
          <div id="column">
            <div id="nav">
              <a href="" id="trabalho">º Trabalho </a>
              <a href="" id="pessoal">° Pessoal</a>
              <a href="" id="importante">° Importante</a>
            </div>
            <EventsCalendar />
          </div>
          <div className="column-top">
            <div id="comp">
              <div id="inputSearch">
                <GoSearch className="icon"/>
                <input type="text" placeholder="Pesquisa" />
                <FiFilter className="icon"/>
              </div>
            </div>

            <div id="comp2">
              <Card1 />
            </div>

            <div id="comp4">
              <Card3 />
            </div>

            <div id="comp3">
              <Card2/>
            </div>
          </div>
        </div>



      </div> {/* FIM SUBCONTAINER */}
    </div>
  </div>
);

export default Page1;
