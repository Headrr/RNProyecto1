/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import BuyButton from './BuyButton';
import {useNavigation} from '@react-navigation/native';

const Card = ({children, item}) => {
  const navigation = useNavigation();
  const { modelo, url, id } = item;
  
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log('Touch!');
          navigation.navigate('ProductDetails', {id});
        }}
        style={{margin: 20}}>
        <View style={{alignItems: 'center'}}> 
          <Image
            source={{uri: url}}
            style={{
              height: 200,
              width: '100%',
              marginVertical: 15,
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <Text style={{color:'white', fontSize:20,  backgroundColor: '#92ACD4', padding: 5, marginVertical: 10, borderRadius: 5,
          width: '20%', alignItems: 'center'}}>Id: {id}</Text>
        </View>
        
        <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
          {children}
        </Text>
      </TouchableOpacity>
      <BuyButton modelo={modelo} />
    </>
  );
};

export default Card;
