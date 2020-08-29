import React, { Component } from 'react';
import Sidebar from '../Sidebar';

import { FaRegBell } from 'react-icons/fa';
import { FiChevronDown, FiFilter } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { MdApps, MdClose } from 'react-icons/md';


import './styles.css';

const Logo = require('../../../assets/Logos/logo_1.svg');
const imgUser = require("../../../assets/noUser.png");

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: window.innerHeight, 
      width: window.innerWidth,
      sideBarVisible: false,
      searchVisible: false,
      head: 'header',
      styleContentSearch: 'contentSearch efeitoFechaSearch'
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if(window.innerWidth > 696){
      this.setState({
        sideBarVisible: false
      })
      if(this.state.searchVisible){
        this.setState({ 
          searchVisible: false,
          styleContentSearch: 'contentSearch efeitoFechaSearch'
        })
      }
    }
  }

  UNSAFE_componentWillMount(){
    if(this.props.feed){
      this.setState({
        head: 'header2'
      })
    }else{
      this.setState({
        head: 'header'
      })
    }
  }
  
  clickSidebar() {
    this.setState({
      sideBarVisible: !this.state.sideBarVisible
    })
  }

  clickSearch(value) {

    if(value === 'close'){
      this.setState({
        searchVisible: !this.state.searchVisible,
        styleContentSearch: 'contentSearch efeitoFechaSearch'
      })
      return
    }
    
    if(this.state.styleContentSearch === 'contentSearch efeitoFechaSearch'){
      this.setState({
        searchVisible: !this.state.searchVisible,
        styleContentSearch: 'contentSearch efeitoAbreSearch'
      })
    }else{
        alert("Pesquisa realizada com sucesso!")
    }
    

  }

  render(){
    return (
    <div id="header-border">

      {this.state.sideBarVisible && <Sidebar id="sidebar" />}

      <div id={this.state.head}>
        {!this.props.feed ? 
          <MdApps className="MdApps" onClick={()=>{this.clickSidebar()}}/>
        :
          <MdApps className="MdApps2" onClick={()=>{this.clickSidebar()}}/>
        }
        
        {this.state.sideBarVisible && <MdApps className="MdAppsAbsolute" onClick={()=>{this.clickSidebar()}}/>}
        
        {!this.state.searchVisible ?
          <>
            <div className="centralizaLogo" />
              <img src={Logo} alt="Logo" className="Logo"/>
            <div className="centralizaLogo" />
          </>
        : null }


        <div id="pacotSerch1">
          <FaRegBell id="icon" />
          <BsEnvelope id="icon" />
          <div id="inputSearch">
            <GoSearch className="icon"/>
            <input type="text" placeholder="Pesquisa" />
            <FiFilter className="icon"/>
          </div>
          <div id="inputNameUser">
            <input type="text" placeholder="Arnaldo Ferreira" />
            <FiChevronDown id="FiChevronDown"/>
          </div>
        </div>
       

        <div id="pacotSerch2">
          <div className={this.state.styleContentSearch} >
            <GoSearch id="GoSearch" onClick={()=>{this.clickSearch('lupa')}}/>
            <input type="text" placeholder="Pesquisa" id="inputS"/>
            {this.state.searchVisible && <MdClose className="MdClose" onClick={()=>{this.clickSearch('close')}}/>}
          </div>
        </div>
        <img src={imgUser} alt="Usuário" className="avatar"/>

      </div>
    </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

