import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import { BOOKS} from '../data/Genres'

const FavoritesScreen = props => {

    //const availableBooks = useSelector(state.books.favoriteBooks);

    const genreId = 1;
    const renderBookItem = itemData => {
        return (
            <View style={styles.bookItem}>
                <TouchableOpacity onPress={props.onSelectGenre}>
                        <View style={{...styles.bookRow, ...styles.bookTitle}}>
                            <ImageBackground style={styles.bgImage} source={{uri : itemData.item.imageUrl}}>
                                <Text style={styles.title} numberOfLines={1}>{itemData.item.title}</Text>
                                <Text style={{...styles.bookRow, ...styles.bookDetail }} numberOfLines={1}>{itemData.item.averageRating}</Text>
                            </ImageBackground>
                        </View>
                </TouchableOpacity>
            </View>
        );
    };

    //const genreId = props.navigation.getParam('genreId');
    
    const displayedBooks = BOOKS.filter(
        book => book.genreIds.indexOf(genreId) >= 0
    );

    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedBooks}
                keyExtractor={(item, index) => item.id}
                renderItem={renderBookItem}
                style={{ width: '100%' }}
                numColumns= {2}
                />
        </View>
    )
};

FavoritesScreen.navigationOptions = {
        headerTitle: 'Favorites',
        headerStyle: {
            backgroundColor: Colors.primaryColor
          },
        headerTintColor: 'white',
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    bookItem:{
        overflow: 'hidden',
        flex: 1,
        borderRadius: 10,
        height: 250,
        backgroundColor: Colors.accentColor,
        elevation: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    bookRow: {
        flexDirection: 'row'
    },
    bookDetail: {
        paddingHorizontal: 10,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 2,
        paddingHorizontal: 6,
    },
    bgImage: {
        height: 250,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        width: '100%',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 3,
        paddingHorizontal: 8
    },
});

export default FavoritesScreen;