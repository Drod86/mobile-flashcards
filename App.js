import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import SignIn from './src/components/SignIn'
import DecksView from './src/components/DecksView'
import AddDeckView from './src/components/AddDeckView'
import DeckView from './src/components/DeckView'
import QuizView from './src/components/QuizView'
import AddQuestionView from './src/components/AddQuestionView'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducer from './src/reducers'
import middleware from './src/middleware'

const Stack = createStackNavigator();

const store = createStore(reducer, middleware)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
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
