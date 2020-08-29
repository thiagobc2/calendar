import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.css';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab1:true,
      activeTab2:false,
      activeTab3:false,
    }

  }

  _active(item){
    if(item==='1'){
      this.setState({
        activeTab1:true,
        activeTab2:false,
        activeTab3:false,
      })
    }
    if(item==='2'){
      this.setState({
        activeTab1:false,
        activeTab2:true,
        activeTab3:false,
      })
    }
    if(item==='3'){
      this.setState({
        activeTab1:false,
        activeTab2:false,
        activeTab3:true,
      })
    }
  }

  render() {

    return (
      <div className="card2">
        <Tabs>
          <TabList className="tab-list">
            <Tab onClick={()=>{this._active('1')}} className={`tab ${this.state.activeTab1 ? "active" : ""}`} >Feitos</Tab>
            <Tab onClick={()=>{this._active('2')}} className={`tab ${this.state.activeTab2 ? "active" : ""}`} >Delegados</Tab>
            <Tab onClick={()=>{this._active('3')}} className={`tab ${this.state.activeTab3 ? "active" : ""}`}>Cancelados</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>

          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>

    );
  }
}
export default Card;
