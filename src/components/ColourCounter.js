import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, increase, decrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={increase} />
            <Button title={`Decrease ${color}`} onPress={decrease} />
        </View>
    ); 
};

const styles = StyleSheet.create({

});

export default ColorCounter;
