import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar, Switch} from 'react-native';


export default class index extends Component {
    constructor() {
        super();
        this.state = {
            hideStatusBar: false
        }
    }

    toggleStatueBar = () => {
        this.setState({
            hideStatusBar: !this.state.hideStatusBar
        })
    }

    render() {
        return (
            <View style={[styles.container]}>
                {/*手机顶部状态条 非app导航条*/}
                <StatusBar
                    hidden={this.state.hideStatusBar}
                    backgroundColor='red'  //顶部条颜色 backgroundColor 仅在安卓生效
                    barStyle={'dark-content'} //dark-content  light-content
                />

                <Switch
                    trackColor={{true: 'green', false: 'red'}}
                    thumbColor={'blue'}
                    value={this.state.hideStatusBar}
                    onValueChange={this.toggleStatueBar}
                />
                <Text> textInComponents </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
