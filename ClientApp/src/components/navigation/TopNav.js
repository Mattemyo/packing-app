import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'packingList' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { state: { activeItem }, props: { children } } = this;

    return (
      <div>
        <Menu style={{ fontSize: '2em' }} color="blue" attached="top" tabular stackable>
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

        <Segment attached="bottom">
          <img src="/assets/images/wireframe/paragraph.png" />
          {children}
        </Segment>
      </div>
    );
  }
}
