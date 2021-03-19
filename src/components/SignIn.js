import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Switch, TextInput, Alert, KeyboardAvoidView, Button } from 'react-native';
import { setAuthedUser, addUser } from '../actions/users'
import { getData, storeData } from '../utils/api'
import { handleInitialData } from '../actions/shared'
class SignIn extends Component {
	componentDidMount() {
    this.props.dispatch(handleInitialData())
 	}

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
		const user = {
			username: 'Danny',
			decks: []
		}
		this.props.dispatch(addUser(user))
		this.props.dispatch(setAuthedUser(user))
		this.props.navigation.navigate('Decks')
	}

	render(){
		const { username, showInput } = this.state
		const { store } = this.props
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
				<Button title='submit' onPress={() => storeData(store)} />
				<Button title='see' onPress={() => getData(Object.keys(store.authedUser).length === 0 ? 'STORE' : store.authedUser.username)} />
				<Button title='user' onPress={() => this.submitSignIn()} />
				<Button title='state' onPress={() => console.log(store)} />
				<Button title='test' onPress={() => getData('STORE')} />
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