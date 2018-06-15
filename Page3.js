//@Time    : 2018/6/15
//@Author  : lidong
//@Email   : lidong@hlchang.cn
//@File    : Page3.js
//@Software: webstrom
//@license : 娱网科道信息技术有限公司 copyright 2016-2017
import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';


const onPressButton = () =>{
    alert('login')
}


export default class page2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:''
        }
    }


    render(){

        return(
            <View>
                <Text>333333</Text>
            </View>
        )
    }
}
