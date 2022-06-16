import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
} from 'react-native'

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = React.useState('')
    const [courseGoals, setCourseGoals] = React.useState([])

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        if (enteredGoalText.trim().length < 0 || enteredGoalText.length === 0) {
            return
        }
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { newGoal: enteredGoalText, id: Math.random().toString() },
        ])
        setEnteredGoalText('')
    }
    console.log(courseGoals)
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={enteredGoalText}
                    style={styles.textInput}
                    placeholder='Your course goal..'
                    onChangeText={goalInputHandler}
                />
                <Button onPress={addGoalHandler} title='Add Goal' />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {itemData.item.newGoal}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
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
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        paddingLeft: 16,
    },
})
