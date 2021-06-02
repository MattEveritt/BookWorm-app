import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, Fontisto } from '@expo/vector-icons';

import FavoritesScreen from '../screens/FavoritesScreen';
import GenreScreen from '../screens/GenreScreen';
import HomeScreen from '../screens/HomeScreen'; 
import SelectedGenreScreen from '../screens/SelectedGenreScreen';

import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
//import AddReviewScreen from '../screens/AddReviewScreen';


const BooksNavigator = createStackNavigator({
    Home: HomeScreen,
    Genres: GenreScreen,
    SelectedGenre: SelectedGenreScreen,
    BookScreen: BookDetailScreen,
    //AddReview: AddReviewScreen,
    
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    //Books: BookScreen 
});

const BooksFavTabNavigator = createBottomTabNavigator({
    Home: {screen: BooksNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Fontisto name='home' size={25} color={tabInfo.tintColor}/>;
        } 
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
        }
    }},
}, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor,
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: {screen: FiltersScreen,
    }
});

const MainNavigator = createDrawerNavigator({
    BooksFavs: BooksFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);