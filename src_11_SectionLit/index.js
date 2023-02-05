import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList } from "react-native";


// 以后自己组织数据也按照此模板
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {

    constructor(){
        super();
        this.state = {
            isRefresh: false,
        }
    }

    loadData = ()=>{
        this.setState({
            isRefresh: true
        })

        //  模拟请求数据
        setTimeout(()=>{
            this.setState({
                isRefresh: false
            })
            alert('刷新完毕')
        }, 3000)
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}

                ItemSeparatorComponent={()=>{
                    //   生命项目之间的分隔符
                    return <View style={{borderBottomWidth: 1, borderBottomColor: 'red'}}></View>
                }}
                ListEmptyComponent={()=>{
                    //   列表数据为空时 展示的组件
                    return <Text>暂无数据!</Text>
                }}

                //   下拉刷新  一般 refreshing 是通过装填数据控制的，true刷新旋转状态一直存在
                refreshing={this.state.isRefresh}
                onRefresh={this.loadData}


                // 上拉刷新
                onEndReachedThreshold={0.1}   //标识距离底部 1% 的时候相当于触底了
                onEndReached={()=>{
                    alert('到底了')
                }}

                ListHeaderComponent={()=>{
                    // 生命列表头部
                    return (
                        <Text style={{fontSize:40}}>列表头部</Text>
                    )
                }}

                ListFooterComponent={()=>{
                    // 生命列尾部
                    return (
                        <Text style={{fontSize:20}}>没有更多了。。。</Text>
                    )
                }}

            />
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;