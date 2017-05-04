import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import * as Colors from 'material-ui/styles/colors';

const style = {
  marginLeft: 20,
  alternateTextColor: Colors.black,
  button: {
    margin: 12,
    color: Colors.lightGreenA700,
  },
};

const keyIcon = <FontIcon className="material-icons">vpn_key</FontIcon>;

class SignIn extends Component {
	render() {
		return (
				<div>
				  <Paper zDepth={2}>
				    <TextField hintText="User Name" style={style} underlineShow={false} />
				    <Divider />
				    <TextField hintText="Password" type="password" style={style} underlineShow={false} />
				    <Divider />
				  </Paper>
				  <div>
			    <RaisedButton
			      href="/portfolios"
			      label="SignIn"
			      secondary={true}
			      style={style.button}
			      icon={keyIcon}
			    />
				  </div>
				</div>
		);
	}
}

export default SignIn;