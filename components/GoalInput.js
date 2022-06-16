import { StyleSheet, View, TextInput, Button, Pressable } from 'react-native'
function GoalInput(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={props.enteredText}
                style={styles.textInput}
                placeholder='Your course goal..'
                onChangeText={props.onInputChange}
            />
            <Button onPress={props.onAddGoal} title='Add Goal' />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
})
