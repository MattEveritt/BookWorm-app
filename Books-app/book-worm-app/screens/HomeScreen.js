import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Search from '../components/SearchBar';
import Colors from '../constants/Colors';

const HomeScreen = props => {
        return (
          <View style={styles.home}>
            
            <TouchableOpacity
              style={styles.homeItem1}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Genres'
                });
              }}
            >
              <View >
                <Text style={styles.text}>BROWSE GENRES</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.homeItem2}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Add'
                });
              }}
            >
              <View>
                <Text style={styles.text}>ADD A BOOK</Text>
              </View>
            </TouchableOpacity>
          </View>
          );
        };

        HomeScreen.navigationOptions = {
          headerTitle: 'BOOKWORM',
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: 'white'
        };
const styles = StyleSheet.create({
  home: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 30
  },
  search: {
    borderRadius: 5
  },
  homeItem1: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentColor,
    borderRadius: 5
  },
  homeItem2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentColor,
    borderRadius: 5
  },
  text: {
    color: Colors.primaryColor,
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default HomeScreen;