import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};


class SignUp extends Component {
	render() {
		return (
		  <Paper zDepth={2}>
		    <TextField hintText="First name" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Last Name" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Email" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Password" type="password" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Re-enter Password" type="password" style={style} underlineShow={false} />
		    <Divider />
		  </Paper>
		);
	}
}

export default SignUp;