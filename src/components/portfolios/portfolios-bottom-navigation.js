import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';

injectTapEventPlugin();

const researchIcon = <FontIcon className="material-icons">all_out</FontIcon>;
const notesIcon = <FontIcon className="material-icons">note_add</FontIcon>;
const chatIcon = <FontIcon className="material-icons">forum</FontIcon>;

const style = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  paddingBottom: "15px"
}

class PortfoliosBottomNavigation extends Component {
  state = {
    selectedIndex: -1,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={2} className="bottom-menu" style={style}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Research"
            icon={researchIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Notes"
            icon={notesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Discuss"
            icon={chatIcon}
            href="/chat"
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default PortfoliosBottomNavigation;