import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ChatGroupList = () => (
  <div>
    <List defaultValue={3}>
      <Subheader>Recent chats</Subheader>
      <ListItem
        value={1}
        primaryText="Investment Buddies"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
      />
      <ListItem
        value={3}
        primaryText="My Family"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
      />
      <ListItem
        value={4}
        primaryText="My Family"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
      />
      <ListItem
        value={5}
        primaryText="Raquel"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
  </div>
);

export default ChatGroupList;
