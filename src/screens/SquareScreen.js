import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            if( state.red + action.payload > 255 || state.red + action.payload < 0) return state;
            return { ...state, red: state.red + action.payload };
        case 'change_green':
            if( state.green + action.payload > 255 || state.green + action.payload < 0) return state;
            return { ...state, green: state.green + action.payload };
        case 'change_blue':
            if( state.blue + action.payload > 255 || state.blue + action.payload < 0) return state;
            return { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColourCounter 
                color="Red"
                increase={() => dispatch({ type: 'change_red', payload: 5 })}
                decrease={() => dispatch({ type: 'change_red', payload: -5 })}
            />
            <ColourCounter 
                color="Green"
                increase={() => dispatch({ type: 'change_green', payload: 5 })}
                decrease={() => dispatch({ type: 'change_green', payload: -5 })}
            />
            <ColourCounter 
                color="Blue"
                increase={() => dispatch({ type: 'change_blue', payload: 5 })}
                decrease={() => dispatch({ type: 'change_blue', payload: -5 })}
            />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
            <Text>({state.red},{state.green},{state.blue})</Text> 
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
