import React from 'react';

import './styles.css';

class Event extends React.Component {
  
  render() {
    
    return (
      <div className='demo-app-sidebar'>     
        <div className='demo-app-sidebar-section'>
          <h2>Todos os Eventos ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
    </div>

    );
  }
}
export default Event;
