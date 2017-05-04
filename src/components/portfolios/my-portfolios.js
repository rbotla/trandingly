import React, { Component } from 'react';
import './_view-portfolios.css';
import PortfoliosBottomNavigation from './portfolios-bottom-navigation'
import PortfoliosList from './portfolios-list';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: Colors.darkBlack,
    primary1Color: Colors.darkBlack,
  },
}); 

const style = {
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 80,
    left: 'auto',
    position: 'fixed',
};

class MyPortfolios extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      	<div>
	      	<PortfoliosList />
          <FloatingActionButton href="/portfolios/create" zDepth={0} style={style}>
            <ContentAdd />
          </FloatingActionButton>
	      	<PortfoliosBottomNavigation />
      	</div>
      </MuiThemeProvider>
    );
  }
}

export default MyPortfolios;
