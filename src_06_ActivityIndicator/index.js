import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Platform } from 'react-native'

export default class abc extends Component {

    render() {

        // if( Platform.OS === 'ios' ){
        //     alert('ios')
        // }
        //
        // if( Platform.OS === 'android' ){
        //     alert('android')
        // }


        return (
            <View style={styles.container}>
                <ActivityIndicator
                    color={"blue"}
                    size={'small'}
                />
                <ActivityIndicator
                    color={"green"}
                    size={'large'}
                />
                <ActivityIndicator
                    color={"#00d0ff"}
                    size={'large'}
                />

                {/*size用数值表示 只有安卓支持*/}
                <ActivityIndicator
                    color={"red"}
                    size={ 70 }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
})
