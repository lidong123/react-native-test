//@Time    : 2018/6/15
//@Author  : lidong
//@Email   : lidong@hlchang.cn
//@File    : Page1.js
//@Software: webstrom
//@license : 娱网科道信息技术有限公司 copyright 2016-2017

import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';



export default class page2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photos:null
        }
    }
    choosePicker(){
        ImagePicker.openPicker({
            multiple:true,
            hideBottomControls:false
        }).then(image => {
            console.error(image)
        });
    }
    choosePicker1(){
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.error(image);
        });
    }

    render(){

        return (
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.choosePicker}>
                        <Image source={require('./image/tool.png')} style={{width:50,height:50}}/>
                        <Text>打开相册</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.choosePicker1}>
                        <Image source={require('./image/hot.png')} style={{width:50,height:50}}/>
                        <Text>拍照</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems:'center',
        textAlign:'center'
    },
    row:{
        flexDirection: 'row'
    },
    image:{
        height: 120,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
})