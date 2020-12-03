import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisibility, setModalVisibility] = useState(false)

  function modalTogleHandler(){
    setModalVisibility(prev => !prev)
  }

  const addGoalHandler = goalTitle => {

    if (goalTitle.length === 0){
      return;
    }
    
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalTitle }
    ])
    
  }

  const removeGoalItem = goalId => {
    setCourseGoals(curentCourseGoals => {
      return curentCourseGoals.filter(goal => goal.uid !== goalId)
    })
  } 



  return (
    <View style={styles.screen}>

<Button title="Add New Goal" onPress={modalTogleHandler} />

      <GoalInput
      onAddGoal={addGoalHandler}
      modalVisibility={modalVisibility}
      onCancel={modalTogleHandler}
      />


      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          // <View style={styles.listItem}>
          //   <Text>{itemData.item.value}</Text>
          // </View>

          <GoalItem text={itemData.item.value} onDelete={removeGoalItem} uid={itemData.item.uid}/>
          
        )}
      />





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
