import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { addCard } from '../actions/cards'
import { generateID } from '../utils/api'

class AddQuestionView extends Component {
	state = {
		card: {
			id: generateID(),
			deck: this.props.route.params.Deck,
			question: '',
			answer: ''
		}
	}

	handleQuestion = (text) => {
		this.setState({
			card: {...this.state.card,
				question: text,
			}
		})
	}

	handleAnswer = (text) => {
		this.setState({
			card: {...this.state.card,
				answer: text,
			}
		})
	}

	clearState = () => {
		this.setState({
			card: {
				id: generateID(),
				deck: this.props.route.params.Deck,
				question: '',
				answer: ''
			}
		})
	}

	handleAddCard = (card) => {
		this.props.dispatch(addCard(card))
		this.clearState()
		this.props.navigation.push('Deck', {Deck: this.props.route.params.Deck})
	}

	render(){
		const { card } = this.state
		const { Deck } = this.props.route.params.Deck
		return(
			<View>
				<Text>Add Card to {Deck} deck.</Text>
				<Text>Question:</Text>
				<TextInput
					value = {card.question}
					style = {styles.signInInput}
					onChangeText = { text => this.handleQuestion(text)}
				/>
				<Text>Answer:</Text>
				<TextInput
					value = {card.answer}
					style = {styles.signInInput}
					onChangeText = { text => this.handleAnswer(text)}
				/>
				<Button title='Add' onPress={() => this.handleAddCard(card)} />
			</View>
		)
	}
}



export default connect()(AddQuestionView);

const styles = StyleSheet.create({
	signInInput: { 
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1 
	}
});