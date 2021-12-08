/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
        Bienvenido
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Camera');
        }}
        >
        <Text style={{color: 'white'}}>Camera</Text>
      </TouchableOpacity>
      <View>
        <Image
          source={require('../../assets/logoTesla.png')}
          style={{height: 90, width: 90}}
        />
      </View>
    </View>
  );
};

export default Header;
