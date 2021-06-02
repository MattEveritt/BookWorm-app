import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';



const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <Text>Hey</Text>
                <Switch/>
            </View>
        </View>
    )
};

FiltersScreen.navigationOptions = {
    headerTitle: 'Filter Books'
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default FiltersScreen;