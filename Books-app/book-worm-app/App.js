import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import BooksNavigator from './navigation/BooksNavigator';
import booksReducer from './store/reducers/books';


const rootReducer = combineReducers({
  books: booksReducer
});

const store = createStore(rootReducer);

export default function App() {
  return <Provider store={store}>
      <BooksNavigator/>
    </Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});