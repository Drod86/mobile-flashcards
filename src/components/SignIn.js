import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Switch, TextInput, Alert, KeyboardAvoidView, Button } from 'react-native';
import { setAuthedUser } from '../actions/users'
import { getData, storeData } from '../utils/api'

class SignIn extends Component {
	state = {
		username: '',
		quized: false,
		decks: [],
		showInput: false
	}

	handleToggleSwitch = () => {
		this.setState((prestate) => ({
			showInput: !prestate.showInput,
		}))
	}

	handleUsername = (text) => {
		this.setState(() => ({
			username: text
		}))
	}

	submitSignIn = () => {
		this.props.dispatch(setAuthedUser({
			username: 'danny',
			decks: []
		}))
	}

	render(){
		const { username, showInput } = this.state
		return(
			<View>
				<Text>Sign In</Text>
				<Switch
					value={showInput}
					onValueChange={this.handleToggleSwitch}
				/>
				{showInput === true && (
					<TextInput
						value={username}
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => this.handleUsername(text)}
					/>
				)}
				<Button title='submit' onPress={() => this.submitSignIn()} />
				<Button title='see' onPress={() => getData()} />
			</View>
		)
	}
}

function mapStateToProps(store) {
	return {
		store
	}
}

export default connect(mapStateToProps)(SignIn);