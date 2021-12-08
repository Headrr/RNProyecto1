import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'axios';
const index = ({navigation}) => {
    const [rockets, setRockets] = useState([]);
    // Método fetch
    // fetch('https://fakestoreapi.com/products').then(e => e.json()).then(data => console.log(data));

    // Método axios
    // axios.get('https://api.spacexdata.com/latest/rockets').then(e => console.log(e))

    // useEffect(() => {
    //     axios
    //     .get('https://api.spacexdata.com/latest/rockets')
    //     .then(e => setRockets(e.data))
    // }, []);

    const peticionSpaceX = async() => {
        const response = await axios
        .get('https://api.spacexdata.com/latest/rockets')
        .then(e => setRockets(e.data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        peticionSpaceX();
    }, [])

    // salida de nuestra data
    // console.log(rockets);
    return (
        <>
        <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 25, marginHorizontal: 20, 
            // backgroundColor: '#92BDD4', 
            padding: 10, marginVertical: 10, textAlign: 'center',
            width: '90%'}}>Space X</Text>
            <TouchableOpacity style={{
               backgroundColor: '#33DCFF',
               padding: 10,
               marginVertical: 10,
               marginBottom: 15,
               borderRadius: 5,
               width: '30%',
               alignSelf: 'flex-end'
               }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress={() => navigation.push('Home')}
                >Regresar</Text>
            </TouchableOpacity>
        </View>
        
        <ScrollView style={{backgroundColor: 'black'}}>
            {rockets.map(item => {
                return(
                    <TouchableOpacity key={item.id} >
                    <View style={{ alignSelf: 'center', marginTop: 10, margin: 5}}>
                        <Text style={{color: 'white', fontSize: 20, alignSelf: 'flex-start', borderRadius: 5}}>{item.name}</Text>
                        <Image source={{uri: item.flickr_images[0]}} style={{height: 300, width: 300, borderRadius: 10}}></Image>
                        
                    </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
        
        </>
    )
}

export default index
