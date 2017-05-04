import React, { Component } from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';
import * as actions from '../../services/portfolios/portfolios-action';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Route, Redirect } from 'react-router';

const errorMessages = {
  wordsError: "Please only use letters",
  numericError: "Please provide a number",
  urlError: "Please provide a valid URL",
}

const styles = {
  paperStyle: {
    width: '90%',
    margin: 20,
    padding: 20,
  },
  switchStyle: {
    marginBottom: 16,
  },
  submitStyle: {
    marginTop: 32,
  },
}

class CreatePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {canSubmit: true};
  }
  // getInitialState() {
  //   return this.getState();
  // }
  // enableButton() {
  //   this.setState({
  //     canSubmit: true,
  //   });
  // }
  // disableButton() {
  //     this.setState({
  //       canSubmit: true,
  //     });
  // }
  submitForm(data) {
    // Dispatch save event
    //alert(JSON.stringify(data, null, 4));
    this.props.actions.saveNewPortfolio(data);
    <Redirect to="/portfolios"/>
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    let {paperStyle, switchStyle, submitStyle } = styles;
    let { wordsError, numericError, urlError } = errorMessages;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="name"
              required
              multiLine={true}
              hintText="Portfolio Name"
              floatingLabelText="Portfolio Name"
              updateImmediately
            />
            <FormsyText
              name="description"
              required
              multiLine={true}
              hintText="Portfolio description"
              floatingLabelText="Describe your portfolio in few words"
              updateImmediately
            />
            <FormsyToggle
              name="watchlist"
              label="Is this a watchlist portfolio?"
              style={switchStyle}
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

// Redux hook functions to connect and fetch data from the store
export const mapStateToProps = ( state ) => (  { portfolios: state.portfolios }  );

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps) (CreatePortfolio);
