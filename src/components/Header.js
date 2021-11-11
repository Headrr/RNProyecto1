import React from 'react'
import { View, Text, Image } from 'react-native'

const Header = () => {
    return (
        <View style={{heigh: 100, 
            backgroundColor: 'black', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15
            }}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>Home</Text>
            <Image source={require('./../assets/logoTesla.png')}
            style={{height: 90, width: 90}}/>
        </View>
    )
}

export default Header
