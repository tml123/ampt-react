import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

import './styles.css';

export default class SidebarNav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu as={Menu} borderless className='bdr-rd-0' width='thin' icon='labeled' vertical inverted>
        <Menu.Item
          as={NavLink}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/telemetry-monitor"
          name='telemetry'
          active={activeItem === 'telemetry'}
          onClick={this.handleItemClick}>
          <Icon name='bar graph' />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/world-view"
          name='worldView'
          active={activeItem === 'worldView'}
          onClick={this.handleItemClick}>
          <Icon name='globe' />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/timeline"
          name='timeline'
          active={activeItem === 'timeline'}
          onClick={this.handleItemClick}>
          <Icon name='calendar' />
        </Menu.Item>
      </Menu>
    )
  }
}
