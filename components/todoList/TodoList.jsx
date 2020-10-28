import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

class TodoList extends React.Component {
    render() {
        return (
            <View>
                {props.data.map(todo => <Text>{todo}</Text>)}
            </View>
        );
    }

};

const styles = StyleSheet.create({
    todoList: {

    },
    todo: {

    }
})

export default TodoList;