import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { GENRES } from '../data/Genres';
import Colors from '../constants/Colors';

const GenreScreen = props => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity
              style={{
                flex: 1, 
                backgroundColor: Colors.accentColor,
                margin: 20,
                borderRadius: 10,
                elevation: 10,
              }}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'SelectedGenre',
                  params: {
                    genreId: itemData.item.id
                  }
                });
              }}
            >
              <View style={styles.gridItem}>
                <Text style={styles.text}>{itemData.item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        };
      
        return (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={GENRES}
            renderItem={renderGridItem}
            numColumns={2}
          />
        );
      };

GenreScreen.navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create ({
    screen: {

    },
    gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 15,
        height: 150
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold'
    },
});

export default GenreScreen;