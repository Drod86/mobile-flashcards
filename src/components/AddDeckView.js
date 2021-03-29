import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { addDeck } from '../actions/decks'

class AddDeckView extends Component {
	state = {
		deck : {
			name: '',
			cards: [],
			author: this.props.author
		}
	}

	handleDeckName = (text) => {
		this.setState(() => ({
			deck: {...this.state.deck,
				name: text
			}
		}))
	}

	handleAddDeck = (deck) => {
		this.props.dispatch(addDeck(deck))
		this.props.navigation.push('Deck', { Deck: deck.name })
	}
	
	render(){
		const { deck } = this.state
		return(
			<View>
				<Text>Add Deck View</Text>
				<Text>Name:</Text>
				<TextInput
					value = {deck.name}
					style = {styles.signInInput}
					onChangeText = { text => this.handleDeckName(text)}
				/>
				<Button title='Add' onPress={() => this.handleAddDeck(deck)} />
			</View>
		)
	}
}

function mapStateToProps({ authedUser }) {
	return {
		author: authedUser.username,
	}
}

export default connect(mapStateToProps)(AddDeckView);

const styles = StyleSheet.create({
	signInInput: { 
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1 
	}
});