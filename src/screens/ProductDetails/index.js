import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import {data} from './../../data';

const index = ({navigation, route}) => {
    // console.log(route.params);
    const {id} = route.params;
    console.log(id);
    return (
        <SafeAreaView style={{flexDirection: 'column', alignContent: 'center', backgroundColor: '#2d2e32'}}>
            <Text style={{color: 'white', fontSize: 25, marginHorizontal: 20, backgroundColor: '#92BDD4', padding: 10, marginVertical: 10, textAlign: 'center',
            width: '90%'}}>Product Details</Text>
            <TouchableOpacity style={{
               backgroundColor: '#33DCFF',
               padding: 10,
               marginVertical: 10,
               borderRadius: 5,
               width: '90%',
               alignSelf: 'center'
               }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => {navigation.goBack()}}
                >Regresar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
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
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: '#416170',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
                width: '90%',
                alignSelf: 'center'
                }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => {navigation.popToTop()}}
                >Ir a Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{alignItems: 'center'}}>
            <Image
                source={{uri: data[id].url}}
                style={{
                    height: 200,
                    width: '90%',
                    marginVertical: 15,
                    borderRadius: 10,
                }}
                />
                </View>
</TouchableOpacity>
            <View style={{backgroundColor: '#2d2e32'}}> 
               
            <Text style={{fontSize: 20, fontWeight: '700', color: 'white', alignContent: 'flex-start', 
            marginHorizontal: 20, backgroundColor: 'green', 
            borderRadius: 10, padding: 10, width: '30%'}}>{data[id].modelo}</Text>
            
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white', alignContent: 'flex-start', marginHorizontal: 20, backgroundColor: 'grey',
            borderRadius: 10, padding: 10, marginVertical: 10, marginBottom: '100%' }}>{data[id].descripcion} </Text>
            </View>
        </SafeAreaView>
    )
}

export default index
