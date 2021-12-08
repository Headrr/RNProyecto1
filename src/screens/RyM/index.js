import React, { useEffect, useStatem, useContext, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import axios from 'axios';
import {gql, useQuery} from '@apollo/client';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CHARACTERSBYIDS} from './graphql/queries'
import { CartContext } from '../../Context';
import { useNavigation } from '@react-navigation/core';
// import { useNavigation } from '@react-navigation/native';
// import CHARACTER_QUERY from '../Cart/graphql/queries';

const index = ({navigation, route}) => {

    // const navigation = useNavigation();
    const context = useContext(CartContext);
    console.log(context);
    const {cart, setCart} = context;

    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [characters, setCharacters] = useState(originalArray);
    const [page, setPage] = useState(0);
    const [dataCache, setDataCache] = useState(false);
    // console.log(page);

    // const CHARACTERSBYIDS = gql`
    //     query characters($ids: [ID!]!) {
    //     charactersByIds(ids: $ids) {
    //         name
    //         id
    //         status
    //         gender
    //         species
    //         image
    //     }
    //     }
    // `;
    // Estado bucle infinitp
    // const [a, setA] = useState({});
    // useEffect(() => {
    //     setA({a: 1})
    //     console.log('Hola');
    // }, [a])

    // const [contador, setContador] = useState(0);

    // useEffect(() => {
    //     console.log(contador);
    // }, [contador]);
    
    // const CHARACTER_QUERY = gql`
    //     query CHARACTER_QUERY {
    //         character(id: 1) {
    //         name
    //         id
    //         }
    //     }`

    // const {loading, error, data} = useQuery(CHARACTER_QUERY);
    // console.log(CHARACTER_QUERY);
    // console.log(data);

    // const {loading, error, data} = useQuery(CHARACTERBYIDS);
    // const {
    //     loading : loadingData, 
    //     error: errorData, 
    //     data: dataData
    // } = useQuery(CHARACTERSBYIDS, {variables: {ids: characters}});

    // console.log(CHARACTERBYIDS);
    // console.log(dataData);

    useEffect(() => {
        const multiplo = 10 * page;
        console.log(multiplo);
        const filtered = originalArray.map(element => {
            const newElement = element + multiplo;
            return newElement;
        });
        // console.log(filtered);
        setCharacters(filtered);
    }, [page]);

    const {
        error: errorLocation,
        data: dataLocation,
        loading: loadingLocation,
      } = useQuery(CHARACTERSBYIDS, {variables: {ids: characters}});
    
      console.log({errorLocation, dataLocation, loadingLocation});
    
      useEffect(() => {
        if (dataLocation) {
          setDataCache(dataLocation);
        }
        return;
      }, [dataLocation]);

    return (
        <SafeAreaView style={{padding: 15, backgroundColor: 'black'}}>
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
                        onPress={() => navigation.push('Home')}
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
                    onPress={() => navigation.navigate('Cart')}>
                    <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5, alignSelf: 'center'}}>Ir al Carrito</Text>
                </TouchableOpacity>
                </View>
        <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 25, marginHorizontal: 20, 
            // backgroundColor: '#92BDD4', 
            padding: 10, marginVertical: 10, textAlign: 'center',
            width: '90%'}}>Rick & Morty</Text>
            
            {/* <TouchableOpacity onPress={() => setContador(contador + 1)}>
               <Text style={{color:'white'}}>Contador</Text>
            </TouchableOpacity> */}
        </View>

        <ScrollView style={{backgroundColor: 'black', marginBottom: '35%'}}>
            {/* { loadingLocation ? (<Text>...</Text>) : <Text>Data</Text> } */}
            { errorLocation ? <Text>Hubo un error</Text> : null}

            {loadingLocation ? <ActivityIndicator style={{padding: 20}}/> : null}

            { dataCache &&
                dataCache.charactersByIds.map(e =>  
                <View key={e.id} style={{alignSelf: 'center', padding: 5, marginVertical: 10, backgroundColor: 'black'}}>
                    <Text style={{color: 'white', fontSize: 20, alignSelf: 'flex-start', borderRadius: 5}}>#{e.id}.- {e.name}</Text>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        padding: 10,
                        marginVertical: 10,
                        marginBottom: 15,
                        borderRadius: 10,
                        width: '30%',
                        alignSelf: 'flex-end'
                        }}
                        onPress={() => navigation.push('ProductDetailsRyM', {id: e.id})}>
                        <Image source={{uri: e.image}} style={{height: 300, width: 300, borderRadius: 10}}></Image>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', marginBottom: 15, justifyContent: 'center', }}>
                            <TouchableOpacity
                             onPress={() => {
                                // const add = characters.push(1)
                                // console.log(add);
                                // setCharacters(filtered)
                                const parseId = parseInt(e.id, 10);
                                setCart([...cart, parseId]);
                            }}
                                style={{backgroundColor: 'green', width: 150, padding: 10, borderRadius: 5}}>
                                <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>Comprar</Text>
                            </TouchableOpacity>
                            {cart.includes(parseInt(characters?.id)) ? (
                                <TouchableOpacity
                                onPress={() => {
                                    // const add = characters.push(1)
                                    // console.log(add);
                                    // setCharacters(filtered)
                                    const parseId = parseInt(e.id, 10);
                                    setCart([...cart, parseId]);
                                }}
                                    style={{backgroundColor: 'red', width: 10, padding: 10, borderRadius: 5}}>
                                    <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>Eliminar</Text>
                                </TouchableOpacity>
                            ) : null}

                        {/* {cart.includes(parseInt(character?.id, 10)) ? (
                                <TouchableOpacity
                                    style={{
                                    backgroundColor: 'red',
                                    padding: 7,
                                    borderRadius: 5,
                                    margin: 10,
                                    }}
                                    onPress={() => {
                                    setModalDeleteIsOpen(true);
                                    }}>
                                    <Text style={{fontSize: 25, color: 'white'}}>Eliminar</Text>
                                </TouchableOpacity> */}
                           
                            {/* <TouchableOpacity
                            onPress={() => {
                                const filtered = characters.filter(function (element) {
                                    return element != e.id;
                                });
                                console.log(filtered);
                                setCharacters(filtered)
                            }}
                            style={{backgroundColor: 'red', width: 150, padding: 10, borderRadius: 5}}>
                            <Text style={{color: 'white'}}>Eliminar</Text>
                        </TouchableOpacity> */}
                        </View>
                </View>
                )}
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: '10%'}}>
            <TouchableOpacity
                onPress={() => {
                    if (page > 0) {
                        setPage(page - 1);
                    }
                }}
                style={{backgroundColor: 'blue', width: 150, padding: 10, borderRadius: 5}}>
                <Text style={{color: 'white'}}>Página anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setPage(page + 1);
                }}
                style={{backgroundColor: 'blue', width: 150, padding: 10, borderRadius: 5}}>
                <Text style={{color: 'white'}}>Siguiente página</Text>
            </TouchableOpacity>
            </View>
            
        </ScrollView>        
        </SafeAreaView>
    )
}

export default index
