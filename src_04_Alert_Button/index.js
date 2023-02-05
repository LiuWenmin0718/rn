import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, Alert} from 'react-native';

export default class index extends Component {
  creatTwoBtnAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => {
          console.log('Cancle');
        },
        style: 'cancle',
      },
      {
        text: '确认',
        onPress: () => {
          console.log('Confirm');
        },
        style: 'default',
      },
    ]);
  };

  creatThreeBtnAlert = () => {
    Alert.alert('更新提示', '发现新版本，是否立即更新？', [
      {
        text: '稍后再试',
        onPress: () => {
          console.log('稍后提醒我');
        },
        style: 'default',
      },
      {
        text: '取消',
        onPress: () => {
          console.log('Cancle');
        },
        style: 'cancle',
      },
      {
        text: '确认',
        onPress: () => {
          console.log('Confirm');
        },
        style: 'default',
      },
    ]);
  };

  // Button 不能写style
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="alert"
          onPress={() => {
            alert('提示信息alert');
          }}
        />

        <Button
          title="Alert.alert"
          onPress={() => {
            Alert.alert('提示信息Alert.alert');
          }}
          color="red"
        />

        <Button
          title="两个按钮"
          onPress={this.creatTwoBtnAlert}
          color="green"
        />

        <Button
          style={[styles.btn]}
          title="三个按钮"
          onPress={this.creatThreeBtnAlert}
          color="tomato"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});
