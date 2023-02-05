import React from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Platform
  } from "react-native";


//   内容溢出通过<View>是没有办法展示的
//   contentContainerStyle 针对 ScrollView 内容的样式，相当于具有继承性。
//   showsVerticalScrollIndicator 隐藏纵向滚动条
//   SafeAreaView 可以避开刘海屏幕，View不能

export default function Index(){
    return (
        <SafeAreaView>
            <ScrollView
                horizontal={true}
            >
                <Text style={styles.nav}>新闻</Text>
                <Text style={styles.nav}>娱乐</Text>
                <Text style={styles.nav}>体育</Text>
                <Text style={styles.nav}>财经</Text>
                <Text style={styles.nav}>军事</Text>
                <Text style={styles.nav}>时尚</Text>
                <Text style={styles.nav}>科技</Text>
            </ScrollView>
            <ScrollView
                style={[styles.scrollView]}
                contentContainerStyle={{ margin: 30 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.text}>
                    ndows PowerShell
                    版权所有 (C) Microsoft Corporation。保留所有权利。

                    尝试新的跨平台 PowerShell https://aka.ms/pscore6

                    PS D:\Workstudy\first_time_rn\victory npx react-native run-android
                    info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
                    终止批处理操作吗(Y/N)?
                    ^C
                    PS D:\Workstudy\first_time_rn\victoryyarn start
                    yarn run v1.22.19
                    $ react-native start

                                            #######
                                    ################
                                    #########     #########
                                #########             ##########
                            #########        ######        #########
                        ##########################################
                        #####      #####################       #####
                        #####          ##############          #####
                        #####    ###       ######       ###    #####
                        #####    #######            #######    #####
                        #####    ###########    ###########    #####
                        #####    ##########################    #####
                        #####    ##########################    #####
                        #####      ######################     ######
                        ######        #############        #######
                            #########        ####       #########
                                #########          #########
                                    ######### #########
                                        #########


                                        Welcome to Metro!
                                Fast - Scalable - Integrated



                    To reload the app press "r"
                    To open developer menu press "d"

                    warn No apps connected. Sending "reload" to all React Native apps failed. Make sure your app is running in the simulator or on a phone connected via USB.
                    info Reloading app...
                    BUNDLE  ./index.js

                    LOG  Running "victory" with 777777777777
                </Text>

                {/* 解决ScrollView滚动不到底的问题 */}
                {/*<View style={{ height: Platform.OS === 'ios' ? 50 : 100 }}></View>*/}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    scrollView: {
        backgroundColor: "#eee",
        paddingHorizontal: 20,
    },
    nav: {
        margin: 10,
        fontSize: 20
    }
})
