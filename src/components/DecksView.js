import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { handleAuthedUserData } from '../actions/shared'
import { setAuthedUser } from '../actions/users'
import DeckList from './DeckList'

class DecksView extends Component {
	componentDidMount() {
    	this.props.dispatch(handleAuthedUserData(this.props.store.authedUser.username))
 	}

	handleSignOut = () => {
		this.props.navigation.navigate('Sign In')
		this.props.dispatch(setAuthedUser({}))
	}
	render(){
		const { navigation } = this.props
		return(
			<View>
				<Text>Decks</Text>
				<DeckList navigation={navigation}/>
				<Button
					title='Sign Out'
					onPress={() => this.handleSignOut()}
				/>
			</View>
		)
	}
}

function mapStateToProps(store) {
	return {
		store
	}
}

export default connect(mapStateToProps)(DecksView);