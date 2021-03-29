import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';



class DeckList extends Component {
    render(){
        const deckAccess = () => {
            this.props.myDecks.map((d) => {
                return (
                    <Button
                            title={`test ${d}`}
                            onPress={() => this.props.navigation.push('Deck', { Deck: d })}
                        />
                )
            })
        }
        return (
            <View>
                <Text>Deck List {this.props.myDecks[0]}</Text>
                {this.props.myDecks.length === 0
                    ? <View><Text>You do not have any decks.</Text>
                      
                      </View>
                    : <View>{this.props.myDecks.map(d => <Button key={d} title={d} onPress={() => this.props.navigation.push('Deck', {Deck: d})}/>)}</View>}
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
		myDecks: authedUser.decks !== undefined ? Object.values(authedUser.decks) : []
	}
}

export default connect(mapStateToProps)(DeckList);