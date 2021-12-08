import React, {useContext, useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {CartContext} from '../../Context';

const index = ({ modalVisible, setModalVisible, character}) => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;
  console.log(character);

  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
    // animationType="slide"
    transparent={true}
    visible={modalVisible}
    // onRequestClose={() => {
    // Alert.alert("Modal has been closed.");
    // setModalVisible(!modalVisible);
    // }}
    >
    <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22}}>
        <View style={{
            backgroundColor: 'white',
            width: '90%',
            height: '20%',
            alignSelf: 'center',
            justifyContent: "center",
            alignItems: "center",
            }}>
            <Text style={{marginVertical: 10}}>Desea eliminar item del carro</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{
                backgroundColor: '#33DCFF',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '40%',
                alignSelf: 'center',
                margin: 5,
                }}
                onPress={() => {
                    const filtered = cart.filter( function (element) {
                        return element != character?.id;
                    });
                    setCart(filtered);
                    setModalVisible(false);
                    }}>
                    <Text style={{fontSize: 15, color: 'white', paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                        Sí, eliminar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                backgroundColor: '#33DCFF',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '40%',
                alignSelf: 'center',
                margin: 5
                }}
                onPress={() => setModalVisible(false)}>
                    <Text style={{fontSize: 15, color: 'white', paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                        No, mantener
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</Modal>
  );
};

export default index;
