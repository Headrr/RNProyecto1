import React, {useContext, useState} from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, Modal } from 'react-native'
import {useQuery, gql} from '@apollo/client';
import {CHARACTER} from '../../graphql/queries';
import { CartContext } from '../../Context';
import ModalBuyItem from '../../components/ModalBuyItem';
import ModalDeleteItem from '../../components/ModaDeleteItem';

// const CHARACTER = gql`
// query character ($id: id) {
//     character(id: 1) {
//         name
//         id
//         status
//         gender
//         species
//         image      
//     }
// }`

const ProductDetailsRyM = ({navigation, route}) => {
    const context = useContext(CartContext);
    const {cart, setCart} = context;
    // console.log(route.params);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
    const {id} = route.params;
    const {data, error, loading} = useQuery(CHARACTER, {
        variables: {id: id},
      });
    
    console.log("ID:", id);
    console.log("data:", data);
    console.log("error:", error);

    const character = data?.character

    const date = new Date(character?.created).toLocaleDateString(
        'es', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'utc'
          }
      );
    return (
        <SafeAreaView style={{flexDirection: 'column', alignContent: 'center', backgroundColor: '#2d2e32'}}>
             <ModalBuyItem
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        character={character}
      />
      <ModalDeleteItem
        modalVisible={modalDeleteIsOpen}
        setModalVisible={setModalDeleteIsOpen}
        character={character}
      />
            <Text style={{color: 'white', fontSize: 25, marginHorizontal: 20, backgroundColor: '#92BDD4', padding: 10, marginVertical: 10, textAlign: 'center',
            width: '90%'}}>Detalles Personaje </Text>
           
           <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
            <TouchableOpacity style={{
               backgroundColor: '#33DCFF',
               padding: 10,
               marginVertical: 10,
               borderRadius: 5,
               width: '30%',
               alignSelf: 'center'
               }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => {navigation.goBack()}}
                >Regresar</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{
                backgroundColor: '#33FF41',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
                width: '90%',
                alignSelf: 'center'
                }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => {navigation.push('ProductDetails')}}
                >Push</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={{
                backgroundColor: '#416170',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
                width: '30%',
                alignSelf: 'center'
                }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => {navigation.popToTop()}}
                >Ir a Home</Text>
            </TouchableOpacity>
            </View>
            {/* <TouchableOpacity> */}
            <View style={{alignItems: 'center'}}>
            <Image
                source={{uri: character?.image}}
                style={{
                    height: 300,
                    width: '90%',
                    marginVertical: 15,
                    borderRadius: 10,
                }}
                />
                
                {/* <Text style={{color: 'white'}}>{character?.id}</Text> */}
                <Text style={{color: 'white'}}>{character?.name}</Text>
                <Text style={{color: 'white'}}>{character?.species}</Text>
                <Text style={{color: 'white'}}>{character?.gender}</Text>
                <Text style={{color: 'white'}}>{character?.status}</Text>
                <Text style={{color: 'white'}}>{date}</Text>
                
        {/* </TouchableOpacity> */}
            <View style={{justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#2d2e32', marginBottom: 30}}>
            <TouchableOpacity style={{
               backgroundColor: '#33DCFF',
               padding: 10,
               marginVertical: 10,
               borderRadius: 5,
               width: '90%',
            //    alignSelf: 'center',
               marginBottom: 5,
               width: '30%'
               }}>
                <Text style={{fontSize: 20, color: '#2d2e32', paddingHorizontal: 5, textAlign: 'center'}}
                onPress={() => {
                    // console.log("ID", character.id)
                    // setCart([...cart, character?.id])
                    setModalVisible(true)
                    // const parseId = parseInt(character.id, 10);
                    // setCart([...cart, parseId]);
                }}
                >Comprar</Text>
            </TouchableOpacity>

            {cart.includes(parseInt(character?.id)) ? (
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
                </TouchableOpacity>
                ) : null}
                </View>
           
            </View>
           {/*  */}
        </SafeAreaView>
    )
}

export default ProductDetailsRyM;
