import React from 'react'
import { View, StyleSheet, TextInput, Button, FlatList } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

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

    const deleteGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.goalsContainer}>
                <GoalInput
                    onAddGoal={addGoalHandler}
                    onInputChange={goalInputHandler}
                    enteredText={enteredGoalText}
                />

                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.newGoal}
                                onDeleteGoal={deleteGoalHandler}
                                id={itemData.item.id}
                            />
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

    goalsContainer: {
        flex: 1,
    },
})
