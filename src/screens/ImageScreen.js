import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" score={10} imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" score={5} imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" score={8} imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
