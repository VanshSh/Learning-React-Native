import { StyleSheet, View, Text } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={{ color: '#fff', fontSize: 20 }}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        paddingLeft: 16,
    },
})
