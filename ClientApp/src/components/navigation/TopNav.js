import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'packingList' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { state: { activeItem }, props: { children } } = this;

    return (
      <Menu size="massive" color="teal" inverted attached="top" tabular stackable>
        <Menu.Item
          as={Link}
          to="/"
          name="packingList"
          active={activeItem === 'packingList'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/contact"
          name="contact"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              transparent
              icon={{ name: 'search', link: true }}
              placeholder="Search users..."
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
