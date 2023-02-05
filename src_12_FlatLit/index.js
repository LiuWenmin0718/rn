import React, { Component, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";


Item = ({ item }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{item.title}</Text>
	</View>
);

class App extends Component {

	constructor(){
		super();
		this.state = {
			isRefresh: false,
			list: [
				{
					id: '1',
					title: "新闻",
					data: ["频道1", "频道2", "频道3"]
				},
				{
					id: '2',
					title: "财经",
					data: ["频道1", "频道2", "频道3"]
				},
				{
					id: '3',
					title: "娱乐",
					data: ["频道1", "频道2"]
				},
				{
					id: '4',
					title: "军事",
					data: ["频道1", "频道2", "频道3"]
				},
				{
					id: '5',
					title: "农业",
					data: ["频道1", "频道2"]
				},
				{
					id: '6',
					title: "少儿",
					data: ["频道1", "频道2", "频道3"]
				},
				{
					id: '7',
					title: "科技",
					data: ["频道1", "频道2"]
				}
			]
		}
	}

	loadData = ()=>{
		this.setState({
			isRefresh: true,
			selectedId: null,
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
		const renderItem = ({ item }) => {
			return (
				<Item
					item={item}
				/>
			);
		};

		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={this.state.list}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.title + index}

					horizontal={false} //是否水平布局
					initialScrollIndex={0} //出事滚动索引 默认0
					// initialNumToRender={2} //初始渲染的数据条数
					// numColumns={2} //多列布局 horizontal={false}生效

					renderSectionHeader={({ section: { title } }) => (
						<Text style={styles.header}>{title}</Text>
					)}

					ItemSeparatorComponent={()=>{
						//   声明项目之间的分隔符
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

					// ListHeaderComponent={()=>{
					// 	// 生命列表头部
					// 	return (
					// 		<Text style={{fontSize:40}}>列表头部</Text>
					// 	)
					// }}

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
		height: 200,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 8
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
