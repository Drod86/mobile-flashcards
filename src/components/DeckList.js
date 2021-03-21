import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';

class DeckList extends Component {
    render(){
        return (
            <View>
                <Text>Deck List</Text>
                {this.props.myDecks.length === 0
                    ? <View><Text>You do not have any decks.</Text>
                      
                      </View>
                    : <Text>Deck 1: {this.props.myDecks[0]}</Text>}
                {/*<Button
                    title='Go to Deck'
                    onPress={() => this.props.navigation.push('Deck')}
                />*/}
                <Button
                    title='Add Deck'
                    onPress={() => this.props.navigation.push('Add Deck')}
                />
            </View>
        )
    }
}
function mapStateToProps({ authedUser }) {
	return {
		myDecks: authedUser.decks
	}
}

export default connect(mapStateToProps)(DeckList);