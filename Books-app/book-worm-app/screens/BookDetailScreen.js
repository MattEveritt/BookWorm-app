import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image, FlatList, SafeAreaView, ScrollView, nestedScrollEnabled} from 'react-native';


import { GENRES, BOOKS } from '../data/Genres';
import Colors from '../constants/Colors';
import ReviewInput from "../components/ReviewInput";
import ReviewItem from "../components/ReviewItem";




const BookDetailScreen = (props) => {
  
 
  const [reviews, setReviews] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);  
  const bookId = props.navigation.getParam('id');
  
   const addReviewHandler = (review) => {
    if (review.length ===0) {
      return;
    }
  

    setReviews((currentReview) =>
  [...currentReview,
  {id: Math.random().toString(),
  value: review
  },
]); 
setIsAddMode(false);
};  

const cancelAddReviewHandler = () => {
  setIsAddMode(false);
};


  
  
  const selectedBook = BOOKS.find(book => book.id === bookId);


    return (
     
        <SafeAreaView style={styles.screen}>
          
            
            <View style={styles.bookImg}>
            <Text>{selectedBook.title}</Text>
            <Image style= {styles.bgImage} source={{uri: selectedBook.imageUrl}}/>
            </View>
            <View style={styles.descContainer}>
            <Text style={styles.textDesc}>{selectedBook.blurb}</Text>
            </View>
            
            
            <View>

              <Button title="Add Review" onPress={() => setIsAddMode(true)} />

              <ReviewInput 
              visible={isAddMode}
              onAddReview={addReviewHandler}
              onCancel={cancelAddReviewHandler}
              
              />

             {/*  <Button title="Add Review" 
              onPress={() => {props.navigation.navigate({
                routeName: 'AddReview',
                //bookId: itemData.item.id,
              }
              );}} />  */}
              
              
              </View>
              

            <View style={styles.revContainer}>
            <Text>Review average goes here</Text>
            <Text>*****</Text>
             <FlatList
              nestedScrollEnabled={true}
              keyExtractor={(item, index) => item.id}
              data={reviews}
              renderItem={(itemData) => (
                <ReviewItem 
                id={itemData.item.id}
                //onDelete={removeReviewHandler}
                title={itemData.item.value}
                />
              )}
            /> 

            </View>
           
           
        </SafeAreaView>
        
    );
};

BookDetailScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: 'white'
};

const styles = StyleSheet.create({
    screen: {
      paddingTop: 5,
      paddingHorizontal: 10,
      paddingBottom: 5,
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    bookImg: {
      flex: 2,
      backgroundColor: Colors.accentColor,
      justifyContent: 'center',
      flexDirection: 'column',
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 10,

    },
    descContainer: {
      flex: 1,
      backgroundColor: Colors.accentColor,
      justifyContent: 'center',
      flexDirection: 'column',
      alignSelf: "stretch",
      alignItems: 'center',
      marginTop: 10,
    },
    revContainer: {
      flex: 1,
      backgroundColor: Colors.accentColor,
      justifyContent: 'center',
      flexDirection: 'column',
      alignSelf: "stretch",
      alignItems: 'center',
      marginTop:10,
    },
    textDesc: {
      padding: 10,
    },
    bgImage: {
      height: '85%',
      width: '40%',
      alignSelf: 'center'
    },
    scrollView: {
      
    },
})

export default BookDetailScreen;