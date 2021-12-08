import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const index = ({children, bgColor}) => {

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={{padding: 10, backgroundColor: bgColor, borderRadius: 10, alignSelf: 'center', width: '100%'}} onPress={() => navigation.navigate('SpaceX')}>
            <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>{children}</Text>
        </TouchableOpacity>
    )
}

export default index
