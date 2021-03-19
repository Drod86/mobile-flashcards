import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { handleAuthedUserData } from '../actions/shared'
class DecksView extends Component {
	componentDidMount() {
    this.props.dispatch(handleAuthedUserData(this.props.store.authedUser.username))
 	}
	render(){
		return(
			<View>
				<Text>Decks View</Text>
				<Button
					title='Go to Deck'
					onPress={() => this.props.navigation.push('Deck')}
				/>
				<Button
					title='Go to Deck'
					onPress={() => this.props.navigation.push('Deck')}
				/>
				<Button
					title='Go to Deck'
					onPress={() => this.props.navigation.push('Deck')}
				/>
				<Button
					title='New Deck'
					onPress={() => this.props.navigation.navigate('Add Deck')}
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