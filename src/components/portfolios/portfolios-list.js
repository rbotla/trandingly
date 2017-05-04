import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '../../services/portfolios/portfolios-action';
import FontIcon from 'material-ui/FontIcon';
import {  grey300, grey900, } from 'material-ui/styles/colors';
const style = {margin: 5};

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-center"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Update</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class PortfoliosList extends Component {
  constructor (props) {
    super (props);
    props.actions.getPortfolios();
  }

  render () {
    return (
      <div>
          <List>
              {this.props.portfolios.length > 0 ?
                this.props.portfolios.map((portfolio) => {
                  return (
                    <div>
                    <ListItem
                      primaryText={portfolio.name}
                      leftAvatar={
                        <Avatar
                          icon={<FontIcon className="material-icons">graphic_eq</FontIcon>}
                          color={grey300}
                          backgroundColor={grey900}
                          size={30}
                          style={style}
                        />
                      }
                      secondaryText={portfolio.description}
                      secondaryTextLines={2}
                      rightIconButton={rightIconMenu}
                      insetChildren={true}
                      key={portfolio._id}
                    />
                    <Divider inset={false} />
                    </div>
                    )
                })
                :""
              }
          </List>
      </div>
    );
  }

}

// Redux hook functions to connect and fetch data from the store
export const mapStateToProps = ( state ) => ( { portfolios: state.portfolios } );

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps) (PortfoliosList);
