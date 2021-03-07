import React, { Component } from 'react'
import { StyleSheet, Text, View, Switch, TextInput, KeyboardAvoidView } from 'react-native';

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
			</View>
		)
	}
}

export default SignIn;