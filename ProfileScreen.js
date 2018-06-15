//@Time    : 2018/6/15
//@Author  : lidong
//@Email   : lidong@hlchang.cn
//@File    : ProfileScreen.js
//@Software: webstrom
//@license : 娱网科道信息技术有限公司 copyright 2016-2017
import React ,{Component} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {StackNavigator} from "react-navigation";


export default class ProfileScreen extends React.Component{
    static navigationOptios={
        title:'聊天',
        headerTitle:'sddsd'
    };

    render(){
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return(
            <View>
                <Text style={styles.container}>welcom to watch {params.name}</Text>
                <Button
                    onPress={()=>this.props.navigation.goBack()}
                    title="点击返回"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontSize:30,
        textAlign:'center',
        color:'red'
    }
});
