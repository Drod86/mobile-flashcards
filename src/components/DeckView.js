import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

class DeckView extends Component {
	render(){
		const { Deck } = this.props.route.params
		const deckInfo =  this.props.decks[Deck]
		const { navigate } = this.props.navigation
		return(
			<View>
				<Text>{ Deck }</Text>
				<View>{deckInfo.cards.map(id => <Text key={id} >{id}</Text>)}</View>
				<Button
					title='Go to Quiz'
					onPress={() => navigate('Quiz', { Deck: Deck})}
				/>
				<Button
					title='Add a question'
					onPress={() => navigate('Add Question', { Deck: Deck})}
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