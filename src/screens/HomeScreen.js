import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ShadowPropTypesIOS } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title="Go to Box Screen"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
