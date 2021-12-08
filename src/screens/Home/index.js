import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ButtonRyM from '../../components/ButtonRyM';
import SearchBar from '../../components/SearchBar';
import {data} from '../../data';
import {SafeAreaView, StyleSheet} from 'react-native-safe-area-context';

const index = ({}) => {
  const [text, setText] = useState('');
  const [teslaBuscar, setTeslaBuscar] = useState(data);

  useEffect(() => {
    if(!text) return setTeslaBuscar(data);
    
    if(isNaN(text)){
      setTeslaBuscar(
        data.filter(item => item.modelo.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
      )
    }
    else{
      const carDetected = data.filter( item => item.id === text );
      setTeslaBuscar(carDetected ? carDetected : []);
    }
  }, [text])
  
  const renderResultados = () => (
    <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20}}> No hay resultados</Text>
  );

  // <gg></gg>sssas
  const a = ";"

  return (
    <SafeAreaView style={{backgroundColor: '#2d2e32'}}>
      <ScrollView>
        <Header />

        <View
        style={{flexDirection: 'row', alignContent: 'center', backgroundColor: '#2d2e32', paddingHorizontal: 5}}>
        <TouchableOpacity
          style={{
            padding: 5,
            marginVertical: 10,
            borderRadius: 20,
            width: '50%',
          }}>
        <Button bgColor={'black'} style={{borderRadius: 10}}>Go to Space X</Button>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 5,
            marginVertical: 10,
            width: '50%',
          }}>
        <ButtonRyM bgColor={'black'} onPress={() => {navigation.push('RyM')}}>Go to RyM</ButtonRyM>
        </TouchableOpacity>
        </View>

        <SearchBar setText={setText}/>
        <Text style={{fontSize: 25, color: 'white', paddingHorizontal: 25}}>
          Resultados de Busqueda: {text}
        </Text>
            {
          teslaBuscar.length === 0 ? renderResultados() : teslaBuscar.map(item => (
            <Card item={item} key={item.id}>
              {item.descripcion}
            </Card>
          ))
        } 
        {/* {data.map(item => {
          return (
            <Card
              url={item.url}
              modelo={item.modelo}
              key={item.id}
              id={item.id}>
              {item.descripcion}
            </Card>
          );
        })} */}
        <TouchableOpacity>
          
        </TouchableOpacity>
      <View
        style={{flexDirection: 'row', alignContent: 'center', backgroundColor: '#2d2e32', paddingHorizontal: 5}}>
        <TouchableOpacity
          style={{
            padding: 5,
            marginVertical: 10,
            borderRadius: 20,
            width: '50%',
          }}>
        <Button bgColor={'black'} style={{borderRadius: 10}}>Go to Space X</Button>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 5,
            marginVertical: 10,
            width: '50%',
          }}>
        <ButtonRyM bgColor={'black'} onPress={() => {navigation.push('RyM')}}>Go to RyM</ButtonRyM>
        </TouchableOpacity>
    </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
