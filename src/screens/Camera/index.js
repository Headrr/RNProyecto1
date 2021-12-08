import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const index = () => {

    const photo = 'https://res.cloudinary.com/ogcodes/image/upload/v1581387688/m0e7y6s5zkktpceh2moq.jpg';

    const [state, setState] = useState({});
    console.log(state);

    const [image, setImage] = useState("");
    
    const uploadImage = (foto) => {
        // { tiempoCarga() }
        const data = new FormData()
        data.append("file", foto)
        data.append("upload_preset", "react-redescolar")
        // data.append("cloud_name", "as-del-sur")
        fetch("https://api.cloudinary.com/v1_1/as-del-sur/image/upload", {
        method:"post",
        body: data,
        // path: '/Home/ProyectoRN'
        })
            .then(resp => resp.json())
            // .then(data => {
        // setUrl(data.url);
        // axios.post("http://localhost:3100/imagenUsuario", 
        //   const response = await axios.post("/imagenUsuario", 
        //   { run: runUsuario, url: data.url });
          // alert("imagen subida");
          
        //   { previsualizarFoto() };
        // })
            .catch(err => console.log(err))
        };
    
        const tomarFoto = async() => {
            const data = new FormData()
            return launchCamera(
                {
                    cameraType: 'back',
                    saveToPhotos: true,
                    includeBase64: true
                },
                response => {
                    // const file = response.assets[0];
                    console.log(response);
                    if (response.didCancel) {
                        console.log('El usuario cancelo');
                        return;
                    }
                    if (response.assets[0].uri) {
                        // const uri = response.assets[0].uri;
                        setState({...state, uri});
                        const uri = response.assets[0].uri;
                        const type = response.assets[0].type;
                        // const name = response.assets[0].fileName;
                        const name = 'Imagen RN'
                        const source = {
                            uri,
                            type,
                            name
                        };

                        uploadImage(source);
                        console.log("Imagen cargada");
                    }
                    // console.log(response.assets[0].uri);
                    // const replace = response.assets[0].uri.replace('file://', '');
                    // console.log(replace);
                    // data.append("file", file)
                    // console.log(file);
                    // data.append("upload_preset", "react-redescolar")
                    // fetch("https://api.cloudinary.com/v1_1/as-del-sur/image/upload", {
                    //     method:"post",
                    //     mode: "cors",
                    //     body: data
                    //     });
                    //     console.log("IMAGEN CARGADA!");
                    // console.log("ASSETS:", response.assets);
                   
                },
            );
            };
        
    return (
        <SafeAreaView>
            <View>
            <Image source={{ uri: photo }} style={{height: 400, width: 400}}>
            </Image>
            </View>
            <Text>Camera</Text>

            {state?.uri ? (<Image source={{uri: state.uri}} style={{width: 350, height: 350, alignSelf: 'center'}}></Image>) : null}
            <TouchableOpacity 
            style={{
                backgroundColor: '#416170',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
                width: '50%',
                alignSelf: 'center'
                }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                // onPress = {async () => {
                //     return launchCamera(
                //         {
                //             cameraType: 'back',
                //             saveToPhotos: true,
                //             includeBase64: true
                //         },
                //         response => {
                //             console.log(response);
                //             if (response.didCancel) {
                //                 console.log('El usuario cancelo');
                //                 return;
                //             }
                //             if (response.assets[0].uri) {
                //                 const uri = response.assets[0].uri;
                //                 setState({...state, uri})
                //             }
                //             console.log("ASSETS:", response.assets);
                //         },
                //     );
                //     }}
                onPress = {() => tomarFoto()}
                >
                Tomar una foto</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{
                backgroundColor: '#416170',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
                width: '50%',
                alignSelf: 'center'
                }}>
                <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}
                onPress = {async () => {
                    return launchImageLibrary(
                        {
                          cameraType: 'front',
                          saveToPhotos: true,
                        },
                        response => {
                          console.log(response);
                          if (response.didCancel) {
                            console.log('el usuario cancelo');
                            return;
                          }
                          if (response.assets[0].uri) {
                            const uri = response.assets[0].uri;
                            setState({...state, uri});
                          }
                        },
                      );
                    }}
                >
                Ver galería </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default index
