import React, {useState} from 'react';
import {View, TextInput, Button, Modal, Text, StyleSheet} from 'react-native';

const ReviewInput = props => {

    const [enteredReview, setEnteredReview] = useState("");

    const reviewInputHandler = (enteredText) => {
      setEnteredReview(enteredText);
    };

    const addReviewHandler = () => {
      props.onAddReview(enteredReview);
      setEnteredReview('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.reviewModal}>

        <View>
        <Text>Add a review</Text>
      </View>

      
      <View style={styles.reviewInput}>
        <TextInput 
          placeholder="Add your Review here"
          multiline={true}
          onChangeText={reviewInputHandler}
          value={enteredReview}
        />
      </View>
      <View style={styles.buttonContainer}>
      <View style ={styles.button}>
        <Button title="Cancel" color="red" onPress={props.onCancel} />
      </View>
      <View style={styles.button}>
      <Button title="Add" onPress={addReviewHandler}/>
      </View>
      </View>
      
</View>
</Modal>
    );

};

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button:{
    width: "45%"
  },
  reviewInput:{
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    padding: 10,
    marginBottom: 10,
    width: "80%"
  },
  reviewModal:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  }
});

export default ReviewInput;

