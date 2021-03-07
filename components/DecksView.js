import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class DecksView extends Component {
	render(){
		console.log(this.props)
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

export default DecksView;