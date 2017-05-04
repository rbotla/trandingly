import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import ChatGroupsList from './chat-group-list';
import ChatToolBar from './chat-toolbar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.grey600,
    accent1Color: Colors.grey50,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.darkBlack
  },
}); 

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class ChatHome extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      	<ChatToolBar />
			  <Tabs>
			    <Tab label="My Groups" >
			    	<ChatGroupsList />
			    </Tab>
          <Tab label="My Contacts" >
            <div >My contacts</div>
          </Tab>
	    	</Tabs>
      </div>
			</MuiThemeProvider>
    );
  }
}

export default ChatHome;
