import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Switch, TextInput, Alert, KeyboardAvoidView, Button } from 'react-native';
import { setAuthedUser, addUser } from '../actions/users'
import { getData, storeData, clearAll } from '../utils/api'
import { handleInitialData } from '../actions/shared'
import { set } from 'react-native-reanimated';
class SignIn extends Component {
	componentDidMount() {
    this.props.dispatch(handleInitialData())
 	}

	state = {
		user : {
			username: '',
			password: '',
			quized: false,
			decks: [],
		},
		newUser: false
	}

	handleToggleSwitch = () => {
		this.setState((prevState) => ({
			newUser: !prevState.newUser,
		}))
	}

	handleUsername = (text) => {
		this.setState(() => ({
			user: {...this.state.user,
				username: text
			}
		}))
	}

	handlePassword = (text) => {
		this.setState(() => ({
			user: {...this.state.user,
				password: text
			}
		}))
	}

	resetForm = () => {
		this.setState(() => ({
			user : {
				username: '',
				password: '',
				quized: false,
				decks: [],
			}
		}))
	}

	submitSignIn = (user) => {
		this.props.store.users[user.username] === undefined
		? //alert('Creating new user.') &&
		  this.props.dispatch(addUser(user)) &&
		  this.props.dispatch(setAuthedUser(user))
		: this.props.dispatch(setAuthedUser(this.props.store.users[user.username]))
		this.props.navigation.navigate('Decks')
		this.resetForm()
	}

	render(){
		const { user, showInput } = this.state
		const { store } = this.props
		return(
			<View>
				<Text>Sign In</Text>
				<Text>Username:</Text>
				<TextInput
					value = {user.username}
					style = {styles.signInInput}
					onChangeText = { text => this.handleUsername(text)}
				/>
				<Text>Password:</Text>
				<TextInput
					value = {user.password}
					style = {styles.signInInput}
					onChangeText = { text => this.handlePassword(text)}
				/>
				<Button title='submit' onPress={() => this.submitSignIn(user)} />
				{/*
				<Button title='see' onPress={() => getData(Object.keys(store.authedUser).length === 0 ? 'STORE' : store.authedUser.username)} />
				<Button title='user' onPress={() => this.submitSignIn()} />
				<Button title='state' onPress={() => console.log(store)} />
				<Button title='test' onPress={() => getData('Daniel').then(r => console.log(r))} />
				<Button title='Clearing' onPress={() => clearAll() } />*/}
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

const styles = StyleSheet.create({
	signInInput: { 
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1 
	}
});