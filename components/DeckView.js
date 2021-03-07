import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class DeckView extends Component {
	render(){
		return(
			<View>
				<Text>Deck View</Text>
				<Button
					title='Go to Quiz'
					onPress={() => this.props.navigation.navigate('Quiz')}
				/>
				<Button
					title='Add a question'
					onPress={() => this.props.navigation.navigate('Add Question')}
				/>
			</View>
		)
	}
}

export default DeckView;