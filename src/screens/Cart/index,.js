import React, {useContext} from 'react';
import { Fragment } from 'react';
import {TouchableOpacity, Text, SafeAreaView, View, Image, ScrollView} from 'react-native';
import {CartContext} from '../../Context';
import { useNavigation } from '@react-navigation/core';
import {useQuery } from '@apollo/client';
import {CHARACTERSBYIDS} from '../RyM/graphql/queries'

const index = () => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;
    // console.log(context.cart);
  const navigation = useNavigation();
  const {
    error,
    data,
    loading,
  } = useQuery(CHARACTERSBYIDS, {variables: {ids: cart}});

  return (
    <SafeAreaView>
      <ScrollView>
        <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
               <TouchableOpacity style={{
                    backgroundColor: '#33DCFF',
                    padding: 10,
                    marginVertical: 10,
                    marginBottom: 15,
                    borderRadius: 5,
                    width: '40%',
                    alignSelf: 'flex-end'
                    }}>
                        <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5, alignSelf: 'center'}}
                        onPress={() => navigation.goBack()}
                        >Regresar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: '#F39C12',
                    padding: 10,
                    marginVertical: 10,
                    marginBottom: 15,
                    borderRadius: 5,
                    width: '40%',
                    alignSelf: 'flex-end'
                    }}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5, alignSelf: 'center'}}>Ir al Carrito</Text>
                </TouchableOpacity>
                </View>
      <Text style={{color: 'black'}}>Tu carrito es:</Text>

      {data?.charactersByIds.map((item) => {
        console.log(item)
        return (
        <Fragment>
          <Text># {item.name}</Text>
          <Image source={{uri: item.image}} style={{height: 300, width: 300, borderRadius: 10}}></Image>
          <TouchableOpacity  
            onPress={() => {
              const filtered = cart.filter(function (element) {
                return element != item.id;
              });
              setCart(filtered);
            }}
            style={{
              backgroundColor: 'red',
              width: 150,
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>Eliminar</Text>
          </TouchableOpacity>
        </Fragment>
        )
      })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
