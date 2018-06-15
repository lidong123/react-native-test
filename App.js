/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View ,SectionList,Button,Image} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import ProfileScreen from './ProfileScreen'
import Page2 from "./Page2";
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import LoginScreen from './Login'


class MainScreen extends React.Component{
    static navigationOptions = {
        title:'首页',
        headerTitle:'首页啊',
        headerStyle:{
            backgroundColor:'#8ab7fc'
        }
    };
    constructor(props){
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to jane`s profile"
                onPress={() =>
                    navigate('Profile', {name: 'Jane'})
                }
            />
        );
    }
}

const MainScreenNavigator = TabNavigator({
    Home:{
        screen:MainScreen,
        navigationOptions:({navigation})=>({
            tabBarLabel:'首页',
            headerBackTitle:null,
            tabBarIcon: ({focused,tintColor}) => (
                <Image
                    source={focused?require('./image/me1.png'):require('./image/me.png')}
                    style={{width:22,height:22,tintColor:tintColor}}
                />
            ),
        })
    },
    Certificate:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('./image/circle.png')}
                    style={[{tintColor:tintColor},styles.icon]}
                />
            ),
        }
    },
    page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel: '相册',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('./image/tool.png')}
                    style={[{tintColor:tintColor},styles.icon]}
                />
            ),
        }
    },
    page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel: '它的',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('./image/hot.png')}
                    style={[{tintColor:tintColor},styles.icon]}
                />
            ),
        }
    },
    page5:{
        screen:Page5,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('./image/circle.png')}
                    style={[{tintColor:tintColor},styles.icon]}
                />
            ),
        }
    },
}, {
    tabBarComponent: TabBarBottom,
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff552e', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    }
});




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:12,
        fontWeight:'bold',
        backgroundColor:'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    icon:{
        height: 24,
        width: 24,
        resizeMode: 'cover'
    }
});

const SimpleApp = StackNavigator({
    Main:{
        screen:MainScreenNavigator,
        title:'身'
    },
    Profile:{
        screen:ProfileScreen,
        title:'身'
    },
    Login:{
        screen:LoginScreen,
    }
},{
    initialRouteName:'Main'
});

export default SimpleApp;