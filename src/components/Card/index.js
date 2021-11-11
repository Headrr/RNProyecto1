import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import BuyButton from './BuyButton'
// import { useWindowDimensions } from 'react-native'

const Card = ({children, propDummy, url, modelo}) => {
    return (
        <TouchableOpacity style={{margin: 10}}>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: url}} 
                    style={{
                        height: 200, 
                        width: '80%', 
                        // alignSelf: 'center', 
                        marginTop: 20, 
                        marginBottom: 20, 
                        borderRadius: 10}}
                />
            </View>
            <Text style={{color: propDummy ? propDummy : 'white', fontSize: 16, fontWeight: '700'}}>{children}</Text>
            <BuyButton modelo={modelo}/>
        </TouchableOpacity>
    )
}

export default Card
