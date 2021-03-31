import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native'
import { setAuthedUser, addUser } from '../actions/users'
import { handleInitialData } from '../actions/shared'

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
			<View style = {styles.backgroud}>
				<Text style = {styles.heading}>Sign In or Register</Text>
				<Text style = {styles.inputLabel}>Username:</Text>
				<TextInput
					value = {user.username}
					style = {styles.signInInput}
					onChangeText = { text => this.handleUsername(text)}
				/>
				<Text style = {styles.inputLabel}>Password:</Text>
				<TextInput
					value = {user.password}
					style = {styles.signInInput}
					onChangeText = { text => this.handlePassword(text)}
				/>
				<Button style = {{height: 30}} title='Sign In' onPress={() => this.submitSignIn(user)} />
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
	backgroud: {
		height: '100%',
	},
	heading: {
		fontSize: 25,
		//fontWeight: 'bold',
		textAlign: 'center',
		padding: 50,
		color: 'navy',
		textShadowColor: 'grey',
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 5
	},
	inputLabel: {
		paddingLeft: 10
	},
	signInInput: { 
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1,
	  borderRadius: 5,
	  marginHorizontal: 10,
	  marginVertical: 5
	},
	button: {
		fontFamily: 'script'
	}
});