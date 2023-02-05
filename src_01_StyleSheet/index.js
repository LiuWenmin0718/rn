import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>index test</Text>
        <Text style={[ {fontSize: 30}, {color: "red"} ]}>index</Text>
        <Text style={ styles.font1 }>StyleSheet.create</Text>
      </View>
    )
  }
}

// export const index = () => {
//     return (
//         <View>
//             <Text style={{ fontSize: 20 }}>index</Text>
//             <Text style={[ {fontSize: 30}, {color: "red"} ]}>index</Text>
//             <Text style={ styles.font1 }>StyleSheet.create</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    font1: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
