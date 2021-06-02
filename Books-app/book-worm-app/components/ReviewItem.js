import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const ReviewItem = (props) => {
    return (
    
    <View style={styles.listItem}>
    <Text>{props.title}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderWidth: 1,
      margin: 10,
      backgroundColor: Colors.accentColor,
    },
  });
  
  export default ReviewItem;
  