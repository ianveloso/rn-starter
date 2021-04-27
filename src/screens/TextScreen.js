import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newVal) => setName(newVal)}
            />
            <Text>My name is {name}</Text>
            {name.length < 5 ? <Text>Name must be longer than 5 characters</Text>: null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
