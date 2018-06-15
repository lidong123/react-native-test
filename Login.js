//@Time    : 2018/6/15
//@Author  : lidong
//@Email   : lidong@hlchang.cn
//@File    : Login.js
//@Software: webstrom
//@license : 娱网科道信息技术有限公司 copyright 2016-2017
import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from "react-navigation";

const onPressButton  =function () {
    // this.props.navigation.navigate('Main')
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
            <View style={styles.main}>
                <Text style={styles.title}>登录</Text>
                <View style={styles.container}>
                    <View style={styles.tinput1}>
                        <View style={styles.label}>
                            <Image
                                style={styles.imag1}
                                source={require('./image/me.png')}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入用户名"
                            onChangeText={(name)=>this.setState({name})}
                            multiline={false}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.tinput2}>
                        <View style={styles.label}>
                            <Image
                                style={styles.imag2}
                                source={require('./image/tool.png')}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入密码"
                            onChangeText={(password)=>this.setState({password})}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={onPressButton} activeOpacity={0.5} focusedOpacity={0.8} color="#555">
                    <View style={{width:350,height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#9078FF',borderRadius:25,marginTop:50}}>
                        <Text style={{color:'#ffffff',fontSize:18,width:350,textAlign:'center'}}>登    录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        textAlign:'center',
        backgroundColor:'#F3F3F3',
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:30,
        textAlign:'center',
        marginTop:30,
        marginBottom:50
    },
    container:{
        textAlign:'right',
        justifyContent:'center',
        alignItems:'center',
    },
    tinput1:{
        width:350,
        borderRadius:30,
        backgroundColor:'#FFFFFF',
        marginBottom:30,
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center'
    },
    tinput2:{
        width:350,
        borderRadius:30,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        // paddingTop:10,
        // paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center'
    },
    input:{
        // width:250,
        flex:5,
    },
    label:{
        width:40,
        height:40,
        // backgroundColor:'#666666',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imag1:{
        height:30,
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    imag2:{
        height:30,
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:350,
        height:50
    }
})
