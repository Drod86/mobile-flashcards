import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { generateID } from '../utils/api'

class DeckView extends Component {
	render(){
		const myDeck =  this.props.decks[this.props.route.params.Deck]
		console.log('myDeck', myDeck)
		return(
			<View>
				<Text>{this.props.route.params.Deck}</Text>
				<View>{myDeck.cards.map(id => <Text key={id} >{id}</Text>)}</View>
				<Button
					title='Go to Quiz'
					onPress={() => this.props.navigation.navigate('Quiz')}
				/>
				<Button
					title='Add a question'
					onPress={() => this.props.navigation.navigate('Add Question', { id: generateID(), Deck: this.props.route.params.Deck})}
				/>
			</View>
		)
	}
}

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(DeckView);