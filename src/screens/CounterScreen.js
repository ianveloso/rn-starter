import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
    <View>
        <Button 
            title="Increment +1"
            onPress={() => setCounter(counter + 1)}
        />
        <Button 
            title="Decrement -1"
            onPress={() => setCounter(counter - 1)}
        />
        <Text>Current Count: {counter} </Text>

    </View>
    ); 
};

const styles = StyleSheet.create({});

export default CounterScreen;