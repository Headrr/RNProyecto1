import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import { useWindowDimensions } from 'react-native';

const App = () => {
  
const {height} = useWindowDimensions();

  return <SafeAreaView style={{backgroundColor: '#474a4e', height: height}}>
    <Header></Header>
    <ScrollView>
    <Card 
    url={'https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3.jpg'}
    modelo={'Modelo S'}
    >
      Lorem, ipsum dolor sit amet...
    </Card>
    <Card 
    url={'https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop'}
    modelo={'Modelo X'}
    >
      Lorem, ipsum dolor sit amet...
    </Card>
    <Card 
    url={'https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop'}
    modelo={'Modelo Y'}
    >
      Lorem, ipsum dolor sit amet...
    </Card>
    </ScrollView>
  </SafeAreaView>
};

export default App;