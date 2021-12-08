import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { SearchBar } from './../SearchBar';
import { useWindowDimensions } from 'react-native';
import { data } from './../../../src/data';
import Card from '../Card/index'

const Body = () => {
  const [text, setText] = useState('');
  const [teslaBuscar, setTeslaBuscar] = useState([data]);

  useEffect(() => {
    if(text) return setTeslaBuscar([]);
    if(isNaN(text)){
      setTeslaBuscar(
        data.filter(item => item.modelo.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
      )
    }else{
      const carDetected = data.filter(item => item.id == text);
      setTeslaBuscar(carDetected ? carDetected : []);
    }
  }, [text])
  
  const {height} = useWindowDimensions();

  const renderResultados = () => {
    <Text style={{color: 'white', fontSize: 20, marginTop: 20}}> No hay resultados</Text>
  };

    return ( <>
    <SafeAreaView style={{backgroundColor: '#474a4e', height: 400}}>
    
    {/* <Header></Header> */}
    <SearchBar text={text} setText={setText}/>
    <Text style={{fontSize: 20, color: 'white'}}>Resultado de búsqueda: {text}</Text>
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
    
  </SafeAreaView> 
  </>
    )
};

export default Body;