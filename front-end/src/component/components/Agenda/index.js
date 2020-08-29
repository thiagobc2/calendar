import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from './event-utils'

import '../Agenda/index.css'
export default class Calendario extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // Como alternativa, use a configuração `events` para buscar de um feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // função de renderização personalizada
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // chamado depois que os eventos são inicializados / adicionados / alterados / removidos
            /* Você pode atualizar um banco de dados remoto quando eles forem acionados;
            eventAdd {= function () {}}
            eventChange {= function () {}}
            eventRemove {= function () {}}
            */
          />
        </div>
        {/* {this.renderSidebar()} */}
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>

        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>

      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Insira um novo título para o seu evento')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // limpar seleção de data

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }
/*
  handleEventClick = (clickInfo) => {
    if (confirm(`Tem certeza que deseja deletar o evento '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }
  */
  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
