import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
// import { connect, Provider } from 'react-redux'
import SignIn from './components/SignIn'
import DecksView from './components/DecksView'
import AddDeckView from './components/AddDeckView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddQuestionView from './components/AddQuestionView'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Decks" component={DecksView} options={{title: 'Dashboard'}}/>
          <Stack.Screen name="Deck" component={DeckView} />
          <Stack.Screen name="Add Deck" component={AddDeckView} />
          <Stack.Screen name="Quiz" component={QuizView} />
          <Stack.Screen name="Add Question" component={AddQuestionView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
