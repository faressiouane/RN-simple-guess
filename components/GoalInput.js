import React, { useState } from "react"
import { View, StyleSheet, TextInput, Button, Modal } from "react-native"

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')
    const [disabled, setDisabled] = useState(true)

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
        setDisabled(String(enteredText).length === 0 ? true : false)
        // if (String(enteredText).length === 0){
        //     setDisabled(true)
        // }else {
        //     setDisabled(false)
        // }
    }

    function addGoal() {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
        props.onCancel()
    }

    // function disabledButtonHandler(){
    //     let val = enteredGoal.length > 0 ? false : true;
    //     setDisabled(val)
    // }

    return (
        <Modal visible={props.modalVisibility} animationType="slide">
            <View style={styles.inputContainer}>

                <TextInput style={styles.input}
                    style={styles.input}
                    placeholder="Add goal"
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="red"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            disabled={disabled}
                            title="Add"
                            onPress={addGoal}
                        />
                    </View>

                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 20
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },

    button: {
        width: "40%", 
    }

})

export default GoalInput