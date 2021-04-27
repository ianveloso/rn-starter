import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 12 },
        { name: 'Friend #2', age: 12 },
        { name: 'Friend #3', age: 12 },
        { name: 'Friend #4', age: 12 },
        { name: 'Friend #5', age: 12 },
        { name: 'Friend #6', age: 12 },
        { name: 'Friend #7', age: 12 },
        { name: 'Friend #8', age: 12 },
        { name: 'Friend #9', age: 12 },
        { name: 'Friend #10', age: 12 },
    ]

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor = {({ name }) => name}
            data={friends}
            renderItem={({ item }) => (
                <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
