import React, { useEffect, useState, useContext, createContext } from 'react';
// import { SafeAreaView, View, Text, ScrollView } from 'react-native';
// import Header  from './src/components/Header';
// import Card from './src/components/Card';
// import { useWindowDimensions } from 'react-native';
// import SearchBar from './src/components/SearchBar';
// import { data } from './src/data'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './src/screens/Cart/index,'
import Home from './src/screens/Home'
import Body from './src/components/Body'
import ProductDetails from './src/screens/ProductDetails';
import SpaceX from './src/screens/SpaceX';
import RyM from './src/screens/RyM'
import ProductDetailsRyM from './src/screens/ProductDetailsRyM/index';
import Camera from './src/screens/Camera';
// import {CartContext} from './src/Context/index';
import Context from './src/Context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const App = () => {

const Stack = createNativeStackNavigator();
// const Context = createContext([]);

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

  return (
  <Context>
  <ApolloProvider client={client}>
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Body" component={Body} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="SpaceX" component={SpaceX} />
        <Stack.Screen name="RyM" component={RyM} />
        <Stack.Screen name="ProductDetailsRyM" component={ProductDetailsRyM} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
  {/* <SafeAreaView style={{backgroundColor: '#474a4e', height: height}}>
    <View>
    <Header></Header>
    <SearchBar texto={texto} setTexto={setTexto}/>
    <Text style={{fontSize: 20, color: 'white'}}>Resultado de búsqueda: {texto}</Text>
    {
      teslaBuscar.length === [] ? renderResultados() : teslaBuscar.map(item => {
        <Card item={item} key={item.id}>
          {item.descripcion}
        </Card>
      })
    }
    <ScrollView>
    {data.map(item => {
      return <Card url={item.url} modelo={item.modelo} key={item.id}>{item.descripcion}</Card>;
    })}
    </ScrollView>
    </View>
  </SafeAreaView> */}
  </NavigationContainer>
  </ApolloProvider>
  </Context>
  )  
};
  
export default App; 