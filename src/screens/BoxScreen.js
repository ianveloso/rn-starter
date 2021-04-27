import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle} />
            <View style={styles.textTwoStyle} />
            <View style={styles.textThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 250,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 80,
        width: 80,
        //padding: 5,
        //margin: 20
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'green',
        height: 80,
        width: 80,
        top: 80,
        //padding: 5,
        //margin: 20
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'purple',
        height: 80,
        width: 80,
        //padding: 5,
        //margin: 20
    },
});

export default BoxScreen;
