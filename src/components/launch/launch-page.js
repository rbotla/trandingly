import React, {Component} from 'react';
import SignIn from '../auth/signin';
import SignUp from '../auth/signup';
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.grey50,
    primary1Color: Colors.grey600,
    accent1Color: Colors.grey50,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white
  },
}); 

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class LaunchPage extends Component {
	render(){
		return (
      <MuiThemeProvider muiTheme={muiTheme}>
			  <Tabs>
			    <Tab label="Sign In" >
			    	<SignIn />
			    </Tab>
			    <Tab label="Sign Up" >
			    	<SignUp />
			    </Tab>
	    	</Tabs>
			</MuiThemeProvider>
		);
	}
}

export default LaunchPage;
