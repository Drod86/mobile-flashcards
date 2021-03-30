import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';



class DeckList extends Component {
    render(){
        const { myDecks, navigation } = this.props
        const deckAccess = () => {
            myDecks.map((d) => {
                return (
                    <Button
                            title={`test ${d}`}
                            onPress={() => navigation.push('Deck', { Deck: d })}
                        />
                )
            })
        }
        return (
            <View>
                {myDecks.length === 0
                    ? <View><Text>You do not have any decks.</Text></View>
                    : <View>{myDecks.map(d => <Button key={d} title={d} onPress={() => navigation.push('Deck', {Deck: d})}/>)}</View>
                }
                
                <Button
                    title='Add Deck'
                    onPress={() => navigation.push('Add Deck')}
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