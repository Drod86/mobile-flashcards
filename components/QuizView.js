import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class QuizView extends Component {
	render(){
		return(
			<View>
				<Text>Quiz View</Text>
				<Button
					title='Next Card'
					onPress={() => this.props.navigation.push('Quiz')}
				/>
				<Button
					title='Previous Card'
					onPress={() => this.props.navigation.goBack()}
				/>
				<Button
					title='Back to Deck'
					onPress={() => this.props.navigation.navigate('Deck')}
				/>
			</View>
		)
	}
}

export default QuizView;