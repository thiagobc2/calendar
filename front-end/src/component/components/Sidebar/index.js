import React, { Component } from 'react';
import { MdApps } from 'react-icons/md';

import './styles.css';
const IconSchedule = require('../../../assets/Icones/IconSchedule.svg');
const IconFeedback = require('../../../assets/Icones/IconFeedback.svg');
const IconMarketing = require('../../../assets/Icones/IconMarketing.svg');
const IconServiceSystem = require('../../../assets/Icones/IconServiceSystem.svg');
const IconApprovalFlow = require('../../../assets/Icones/IconApprovalFlow.svg');
const IconTraining = require('../../../assets/Icones/IconTraining.svg');
const IconPersonalDepartment = require('../../../assets/Icones/IconPersonalDepartment.svg');
const IconClimateResearch = require('../../../assets/Icones/IconClimateResearch.svg');
const IconOmbudsman = require('../../../assets/Icones/IconOmbudsman.svg');
const IconSuccessionPlan = require('../../../assets/Icones/IconSuccessionPlan.svg');
const IconSelectionAdvance = require('../../../assets/Icones/IconSelectionAdvance.svg');

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      submenuVisible:false,
      top: '',
      colorButton: 'colorButton1',
      btn1: 'btnW',
      btn2: 'btnW',
      btn3: 'btnW',
      btn4: 'btnW',
      btn5: 'btnW',
      btn6: 'btnW',
      btn7: 'btnW',
      btn8: 'btnW',
      btn9: 'btnW',
      btn10: 'btnW',
      btn11: 'btnW',
    }
  }

  _btnWhite(){
    this.setState({btn1:'btnW', btn2:'btnW', btn3:'btnW', btn4:'btnW', btn5:'btnW', btn6:'btnW', btn7:'btnW', btn8:'btnW', btn9:'btnW', btn10:'btnW', btn11:'btnW' });
  }

  _clickButton(dado, btn){
    if(this.state.top === dado){
      this._btnWhite();
      this.setState({
        submenuVisible : false,
        top : '',
      })
      return false;
    }
    this.setState({
      submenuVisible:true,
      top: dado,
    })
    this._btnWhite();
    switch (btn) {
      case 'btn01': 
        this.setState({ btn1 : 'btnW' })
        break;
      case 'btn1':
        this.setState({btn1: 'btnB'});
        break;
      case 'btn2':
        this.setState({btn2: 'btnB'});
        break;
      case 'btn3':{
        this.setState({btn3: 'btnB'});
        break;
      }
      case 'btn4':
        this.setState({btn4: 'btnB'});
        break;
      case 'btn5':
        this.setState({btn5: 'btnB'});
        break;
      case 'btn6':
        this.setState({btn6: 'btnB'});
        break;
      case 'btn7':
        this.setState({btn7: 'btnB'});
        break;
      case 'btn8':
        this.setState({btn8: 'btnB'});
        break;
      case 'btn9':
        this.setState({btn9: 'btnB'});
        break;
      case 'btn10':
        this.setState({btn10: 'btnB'});
        break;
      case 'btn11':
        this.setState({btn11: 'btnB'});
        break;
      default:
        this._btnWhite();
    }

  }

  render(){
    return(
      <div id="sidebar">
        <ul>
          <li id="bgAzul">
            <MdApps id="MdApps" />
          </li>
          <li className={this.state.btnColor1 || this.state.btn1 }onClick={()=>{this._clickButton('top1', 'btn1')}}>
            <img src={IconSelectionAdvance} alt="Seleção Avançada"/>
          </li>
          <li className={this.state.btnColor2 || this.state.btn2} onClick={()=>{this._clickButton('top2', 'btn2')}}>
            <img src={IconSchedule} alt="IconSchedule"/>
          </li>
          <li className={this.state.btnColor3 || this.state.btn3} onClick={()=>{this._clickButton('top3', 'btn3')}}>
            <img src={IconFeedback} alt="IconFeedback"/>
          </li>
          <li className={this.state.btnColor4 || this.state.btn4} onClick={()=>{this._clickButton('top4', 'btn4')}}>
            <img src={IconMarketing} alt="IconMarketing"/>
          </li>
          <li className={this.state.btnColor5 || this.state.btn5} onClick={()=>{this._clickButton('top5', 'btn5')}}>
            <img src={IconServiceSystem} alt="IconServiceSystem"/>
          </li>
          <li className={this.state.btnColor6 || this.state.btn6} onClick={()=>{this._clickButton('top6', 'btn6')}}>
            <img src={IconApprovalFlow} alt="IconApprovalFlow"/>
          </li>
          <li className={this.state.btnColor7 || this.state.btn7} onClick={()=>{this._clickButton('top7', 'btn7')}}>
            <img src={IconTraining} alt="IconTraining"/>
          </li>
          <li className={this.state.btnColor8 || this.state.btn8} onClick={()=>{this._clickButton('top8', 'btn8')}}>
            <img src={IconPersonalDepartment} alt="IconPersonalDepartment"/>
          </li>
          <li className={this.state.btnColor9 || this.state.btn9} onClick={()=>{this._clickButton('top9', 'btn9')}}>
            <img src={IconClimateResearch} alt="IconClimateResearch"/>
          </li>
          <li className={this.state.btnColor10 || this.state.btn10} onClick={()=>{this._clickButton('top10', 'btn10')}}>
            <img src={IconOmbudsman} alt="IconOmbudsman"/>
          </li>
          <li className={this.state.btnColor11 || this.state.btn11} onClick={()=>{this._clickButton('top11', 'btn11')}}>
            <img src={IconSuccessionPlan} alt="IconSuccessionPlan"/>
          </li>
        </ul>
        {this.state.submenuVisible ? 
          <div id="submenu">
            <div id="submenuSelected" className={this.state.top}></div>
            <div id="listsubmenu">
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
              <p>Item 5</p>
              <p>Item 6</p>
              <p>Item 7</p>
              <p>Item 8</p>
              <p>Item 9</p>
              <p>Item 10</p>
            </div>
          </div>
        : null }
        
      </div>
    )
  }

  
}

 