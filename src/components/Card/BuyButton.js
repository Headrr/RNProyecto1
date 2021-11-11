import React from 'react'
import { View, Text } from 'react-native'

const BuyButton = ({modelo}) => {
    return (
        <View style={{
            backgroundColor: '#d22923', 
            padding: 10, borderRadius:5,
            marginVertical: 15,
            marginEnd: 15, 
            width: '40%',
            alignSelf: 'flex-end'
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700', alignSelf: 'center'}}>{modelo}</Text>
        </View>
    )
}

export default BuyButton
